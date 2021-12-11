import React from "react";
import './../css/sifaris.css';
import {Header} from "./header";
import ReactToPrint from 'react-to-print';
import { NepaliDatePicker } from "datepicker-nepali-reactjs";
import axios from "axios";
export class Sifaris extends React.Component{
    constructor() {
        super();
        this.state = {
            sifaris_selected : "ao",
            bank_options:[],
            selectedBankOptionIndex:0,
            letterDate:'',
            aayojana_naam:'',
            searchedProjects:[],
            projectId:null,

            project:[],
            padadhikariharu:[],
            jamma_padadhikariharu:'',
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleGetSifaris = this.handleGetSifaris.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {},
        }).then((response)=> {
            if (response.data.bank_options) {
                this.setState({bank_options:response.data.bank_options});
            }
        }).catch((res)=>{

        })
    }
    handleGetSifaris(id,aayojana_naam,aayojana_sthal){
        this.setState({aayojana_naam:aayojana_naam +' '+ aayojana_sthal,searchedProjects:[],projectId:id},()=>{
            axios({
                method: 'post',
                url: localStorage.getItem('server')+'api/getSifaris',
                data: {id:this.state.projectId},
            }).then((response)=>{
                this.setState({project:response.data[1],padadhikariharu:response.data[2],jamma_padadhikariharu:response.data[3]});
                console.log(response.data[3]);
            }).catch(function (error) {
                console.log(error);
            });
        })
    }
    handleUpdate(event){
        let value = event.target.value;
        let name = event.target.name;
        if(name==="aayojana_naam"){
            this.setState({aayojana_naam:value},()=>{
                axios({
                    method: 'post',
                    url: localStorage.getItem('server')+'api/searchProject',
                    data: {aayojana_naam:value},
                }).then((response)=>{
                    this.setState({searchedProjects:response.data[1]})
                   console.log(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
            });
        }
    }
    render() {
        return (
            <div id='sifaris'>
                <Header/>
                <div id="container">
                    <div id="title">
                        योजना सम्बन्धि विभिन्न सिफारिसहरु
                    </div>
                    <div id="project">
                        <div id="entry">
                            <div id="select_sifaris">
                                <button style={this.state.sifaris_selected === "ao" ? {color: 'white',backgroundColor: 'green'} : {}} onClick={()=>{this.setState({sifaris_selected:"ao"})}}>खाता संचालन सिफारिस</button>
                                <button style={this.state.sifaris_selected === "ac" ? {color: 'white',backgroundColor: 'green'} : {}} onClick={()=>{this.setState({sifaris_selected:"ac"})}}>खाता बन्द सिफारिस</button>
                            </div>
                            <div id="select_people">
                                <input type="checkbox" checked="checked"/> <span>अध्यक्ष</span>
                                <input type="checkbox" checked="checked"/> <span>सचिव</span>
                                <input type="checkbox" checked="checked"/> <span>कोषादध्क्ष</span>
                            </div>
                            <div id="sifaris_data">
                                <div className="item">
                                    <div id="input">
                                        <span>योजना खोज्नुहोस</span>
                                        <input name="aayojana_naam" value={this.state.aayojana_naam} onChange={this.handleUpdate} type="text" placeholder="योजनाको नाम "/>
                                    </div>
                                    {this.state.searchedProjects.length>0 ?
                                    <div id="result">
                                        {this.state.searchedProjects.map((item,index)=>{
                                            return <span onClick={()=>{this.handleGetSifaris(item.id,item.aayojanako_naam,item.aayojanako_sthal)}} className="item">{item.aayojanako_naam}, {item.aayojanako_sthal}</span>
                                        })}
                                    </div> : null }
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>बैङ्कको नाम र ठेगाना</span>
                                        <select onChange={(event)=>{this.setState({selectedBankOptionIndex:event.target.value})}}>
                                            {this.state.bank_options.map((item,index)=>{
                                                return <option value={index} key={index}>{item.bank_name+","+item.bank_sakha+","+item.bank_thegana}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>पत्रको मिति</span>
                                        <NepaliDatePicker onDateSelect={(date)=>{this.setState({letterDate:date})}} className="date_picker"  defaultDate={true} placeholder="पत्रको मिति" />
                                    </div>
                                </div>
                                {this.state.sifaris_selected==="ac" ?
                                    <div className="item">
                                        <div id="input">
                                            <span>खाता नं.</span>
                                            <input type="text" placeholder="खाता नं."/>
                                        </div>
                                    </div> : null}
                            </div>
                            <div id="controls">
                                <ReactToPrint
                                    trigger={() => {
                                        return <button>प्रिन्ट गर्नुहोस</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button>रद्ध गर्नुहोस</button>
                            </div>
                        </div>
                        <div id="print_preview">
                            {this.state.bank_options.length>0 ? <SifarisPrint letterDate= {this.state.letterDate} selectedBankOption = {this.state.bank_options[this.state.selectedBankOptionIndex]} jamma_padadhikariharu={this.state.jamma_padadhikariharu} padadhikariharu={this.state.padadhikariharu} project={this.state.project} ref={el => (this.componentRef = el)} /> : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class SifarisPrint extends React.PureComponent {
    constructor() {
        super();
        this.state={
            upabhokta_samitiko_naam : '',
            aayojanako_naam : '',
            aayojanako_sthal : '',
            aayojana_suru_miti : '',
            gathan_vayeko_miti :'',

            padadhikariharu_1_id:null,
            padadhikariharu_1_name:'',
            padadhikariharu_1_pada:1,
            padadhikariharu_1_na_na:'',
            padadhikariharu_2_id:null,
            padadhikariharu_2_name:'',
            padadhikariharu_2_pada:1,
            padadhikariharu_3_id:null,
            padadhikariharu_3_name:'',
            padadhikariharu_3_pada:1,

            aayojana_hune_woda:'',
            jamma_padadhikariharu:'',

            selectedBankOption:{},
            letterDate:'',
            aa_ba:'',
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            upabhokta_samitiko_naam : nextProps.project.upabhokta_samitiko_naam,
            aayojanako_naam : nextProps.project.aayojanako_naam,
            aayojanako_sthal : nextProps.project.aayojanako_sthal,
            aayojana_suru_miti : nextProps.project.aayojana_suru_miti,
            gathan_vayeko_miti :nextProps.project.gathan_vayeko_miti,
            aayojana_hune_woda:nextProps.project.aayojana_hune_woda,
            jamma_padadhikariharu:nextProps.jamma_padadhikariharu.jamma_padadhikariharu,

            selectedBankOption:nextProps.selectedBankOption,
            letterDate:nextProps.letterDate,
            aa_ba:parseInt(nextProps.letterDate.substr(2,4)),
        });
        for(let i=0;i<nextProps.padadhikariharu.length;i++){
            if(nextProps.padadhikariharu[i].id===1){
                this.setState({
                    padadhikariharu_1_id:nextProps.padadhikariharu[i].id,
                    padadhikariharu_1_name:nextProps.padadhikariharu[i].name,
                    padadhikariharu_1_pada:nextProps.padadhikariharu[i].pada,
                    padadhikariharu_1_na_na:nextProps.padadhikariharu[i].na_na,
                })
            }
            if(nextProps.padadhikariharu[i].id===2){
                this.setState({
                    padadhikariharu_2_id:nextProps.padadhikariharu[i].id,
                    padadhikariharu_2_name:nextProps.padadhikariharu[i].name,
                    padadhikariharu_2_pada:nextProps.padadhikariharu[i].pada,
                })
            }
            if(nextProps.padadhikariharu[i].id===3){
                this.setState({
                    padadhikariharu_3_id:nextProps.padadhikariharu[i].id,
                    padadhikariharu_3_name:nextProps.padadhikariharu[i].name,
                    padadhikariharu_3_pada:nextProps.padadhikariharu[i].pada,
                })
            }
        }
    }
    render() {
        return (
            <div id='sifaris_a4'>
                <div id="top">
                    <img src={require('../../files/emblem_logo.png').default}/>
                    <div id="title">
                        <span>थासाङ गाउँपालिका</span>
                        <span>गाउँकार्यपालिकाको कार्यालय</span>
                        <span>कोबाङ, मुस्ताङ</span>
                    </div>
                    <div id="foo">
                        <div id="left">
                            <span>पत्र संख्या :  </span>
                            <span>चलानी नं. : {this.state.aa_ba}/{this.state.letterDate.length>1 ? this.state.aa_ba+1 : null} </span>
                        </div>
                        <div id="right">
                            <span>गण्डकी प्रदेश, नेपाल</span>
                        </div>
                    </div>
                </div>
                <div id="date"> मिति : {this.state.letterDate} </div>
                <div id="office">{this.state.selectedBankOption.bank_name}, <br/>{this.state.selectedBankOption.bank_sakha},<br/>{this.state.selectedBankOption.bank_thegana}</div>
                <div id="subject">खाता संचालनको लागि सिफारिस गरिएको । </div>
                <div id="body">
                    प्रस्तुत विषयमा थासाङ गाउँपालिकाको आ.व. 077/78 को बार्षिक स्वीकृत कार्यक्रम अनुसार { this.state.aayojanako_naam} लागि
                    मिति {this.props.project.gathan_vayeko_miti} को वडा नं. {this.state.aayojana_hune_woda} को आम
                    भेलाले {this.state.padadhikariharu_1_name} ({this.state.padadhikariharu_1_na_na}) को
                    अध्यक्षामा {this.state.jamma_padadhikariharu} सदस्यीय {this.state.upabhokta_samitiko_naam} गठन
                    भई मिति {this.state.aayojana_suru_miti} मा यस कार्यालय सँग योजना सम्झौता भइसकेकोले
                    {this.state.padadhikariharu_1_id!=null ? ' श्री ' +this.state.padadhikariharu_1_name+ ' ('+ this.state.padadhikariharu_1_pada+')' : null }
                    {this.state.padadhikariharu_2_id!=null ? ',श्री ' +this.state.padadhikariharu_2_name+ ' ('+ this.state.padadhikariharu_2_pada+')' : null }
                    {this.state.padadhikariharu_3_id!=null ? 'र श्री ' +this.state.padadhikariharu_3_name+ ' ('+ this.state.padadhikariharu_3_pada+') ' : null }
                     बाट बैङ्को नाम मा संयुक्त खाता संलागन गर्न सिफारिससाथ अनुरोध छ ।
                </div>
                <div id="sign">
                    ..................................
                </div>
            </div>
        );
    }
}