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
            values:{
                projectName:'',
                bankIndex:'',
                letterDate:'',
            },
            receivedData:{
                banks:[{}],
                projects:[],
                project:{},
                projectPadadhikaris:[{}],
                projectPadadhikariVitalPosts:[],
                aa_ba:''
            },
            sendingData:{

            },
            sifaris_selected : "ao",

        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleGetProject = this.handleGetProject.bind(this);
        this.handleRemoveVitalPost = this.handleRemoveVitalPost.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {detail:'bank'},
        }).then((response)=> {
            let receivedData = this.state.receivedData;
            receivedData.banks = response.data;
            this.setState({receivedData:receivedData});
        }).catch((res)=>{

        });
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getSetting',
            data: {setting:'aa_ba'},
        }).then((response)=> {
            let receivedData = this.state.receivedData;
            receivedData.aa_ba = response.data['option'];
            this.setState({receivedData:receivedData});
        }).catch((res)=>{

        })
    }
    handleGetProject(id,aayojanako_naam,aayojanako_sthal){
        let values = this.state.values;
        values.projectName = aayojanako_naam+' '+aayojanako_sthal;

        let recevedData = this.state.receivedData;
        recevedData.projects = [];
        this.setState({values:values,recevedData:recevedData},()=>{
            axios({
                method: 'post',
                url: localStorage.getItem('server')+'api/getProject',
                data: {projectId:id},
            }).then((response)=>{
                let receivedData = this.state.receivedData;
                receivedData.project = response.data[1];
                receivedData.projectPadadhikaris = response.data[2];
                let projectPadadhikariVitalPosts = [];
                response.data[2].forEach((item,index,array)=>{
                    if(item.vitalPost){projectPadadhikariVitalPosts.push(item);}
                })
                receivedData.projectPadadhikariVitalPosts = projectPadadhikariVitalPosts;

                this.setState({receivedData:receivedData});
            }).catch(function (error) {
                console.log(error);
            });
        })
    }
    handleValueChange(event){
        let value = event.target.value;
        let name = event.target.name;
        let values = this.state.values;
        if(name==="bankIndex"){
            values.bankIndex = value;
            this.setState({values:values})
        }
        if(name==="projectName"){
            values.projectName = value;
            this.setState({values:values},()=>{
                axios({
                    method: 'post',
                    url: localStorage.getItem('server')+'api/getSearch',
                    data: {projectName:this.state.values.projectName},
                }).then((response)=>{
                    if(response.data[0]===0){

                    }else if(response.data[0]===1){
                        let receivedData = this.state.receivedData;
                        receivedData.projects = response.data[1];
                        this.setState({receivedData:receivedData});
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            });
        }
    }
    handleRemoveVitalPost(id){
        let receivedData = this.state.receivedData;
        receivedData.projectPadadhikariVitalPosts.splice(id, 1);
        this.setState({receivedData:receivedData});
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div id="sifaris">
                    <div id="title">
                        योजना सम्बन्धि विभिन्न सिफारिसहरु
                    </div>
                    <div id="container">
                        <div id="entry">
                            <div id="select_sifaris">
                                <button style={this.state.sifaris_selected === "ao" ? {color: 'white',backgroundColor: 'green'} : {}} onClick={()=>{this.setState({sifaris_selected:"ao"})}}>खाता संचालन सिफारिस</button>
                                <button style={this.state.sifaris_selected === "ac" ? {color: 'white',backgroundColor: 'green'} : {}} onClick={()=>{this.setState({sifaris_selected:"ac"})}}>खाता बन्द सिफारिस</button>
                            </div>
                            <div id="select_people">
                                {this.state.receivedData.projectPadadhikariVitalPosts.map((item,index)=>{
                                    return <React.Fragment><input key={index} type="checkbox" checked="checked" onClick={()=>{this.handleRemoveVitalPost(index)}}/> <span> {item.pada} </span></React.Fragment>
                                })}
                            </div>
                            <div id="sifaris_data">
                                <div className="item">
                                    <div id="input">
                                        <span>योजना खोज्नुहोस</span>
                                        <input name="projectName" value={this.state.values.projectName} onChange={this.handleValueChange} type="text" placeholder="योजनाको नाम "/>
                                    </div>
                                    <div id="result">
                                        {this.state.receivedData.projects.map((item,index)=>{
                                            return <span onClick={()=>{this.handleGetProject(item.id,item.aayojanako_naam,item.aayojanako_sthal)}} className="item">{item.aayojanako_naam}, {item.aayojanako_sthal}</span>
                                        })}
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>बैङ्कको नाम र ठेगाना</span>
                                        <select name='bankIndex' value={this.state.values.bankIndex} onChange={this.handleValueChange}>
                                           <option selected={true} value='' disabled={true}>---बैङ्कहरु---</option>
                                            {this.state.receivedData.banks.map((item,index)=>{
                                                return <option value={index} key={index}>{item.name+","+item.branch+","+item.addr}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>पत्रको मिति</span>
                                        <NepaliDatePicker onDateSelect={(date)=>{let values = this.state.values; values.letterDate = date;this.setState({values:values})}} className="date_picker"  defaultDate={true} placeholder="पत्रको मिति" />
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
                            <PrintPreview letterDate= {this.state.values.letterDate} bank = { this.state.values.bankIndex!=="" ? this.state.receivedData.banks[this.state.values.bankIndex] : {}} project={this.state.receivedData.project}  projectPadadhikariVitalPost={this.state.receivedData.projectPadadhikariVitalPosts} totalProjectPadadhikari={this.state.receivedData.projectPadadhikaris.length} aa_ba={this.state.receivedData.aa_ba} ref={el => (this.componentRef = el)} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
class PrintPreview extends React.PureComponent {
    constructor() {
        super();
        this.state={
            projectPadadhikaris:[{}],
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({

        });
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
                            <span>पत्र संख्या : {this.props.aa_ba} </span>
                            <span>चलानी नं. :  </span>
                        </div>
                        <div id="right">
                            <span>गण्डकी प्रदेश, नेपाल</span>
                        </div>
                    </div>
                </div>
                <div id="date"> मिति : {this.props.letterDate} </div>
                <div id="office">{this.props.bank.name}, <br/>{this.props.bank.branch},<br/>{this.props.bank.addr}</div>
                <div id="subject">खाता संचालनको लागि सिफारिस गरिएको । </div>
                <div id="body">
                    प्रस्तुत विषयमा थासाङ गाउँपालिकाको आ.व. 077/78 को बार्षिक स्वीकृत कार्यक्रम अनुसार { this.props.project.aayojanako_naam} लागि
                    मिति {this.props.project.gathan_vayeko_miti} को वडा नं. {this.props.project.wardNumber} को आम
                    भेलाले { this.props.projectPadadhikariVitalPost.length>0 ? this.props.projectPadadhikariVitalPost[0].name+''+this.props.projectPadadhikariVitalPost[0].na_na : null}) को
                    अध्यक्षामा {this.props.totalProjectPadadhikari} सदस्यीय {this.props.project.upabhokta_samitiko_naam} गठन
                    भई मिति {this.props.aayojana_suru_miti} मा यस कार्यालय सँग योजना सम्झौता भइसकेकोले
                    {this.props.projectPadadhikariVitalPost.map((item,index)=>{
                        return <span> श्री {item.name} ({item.pada}), </span>
                    })}
                     बाट बैङ्को नाम मा संयुक्त खाता संलागन गर्न सिफारिससाथ अनुरोध छ ।
                </div>
                <div id="sign">
                    ..................................
                </div>
            </div>
        );
    }
}