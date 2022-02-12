import React, {Fragment} from "react";
import './../css/report.css';
import './../css/reportPrintPreview.css'
import {Header} from "./header";
import axios from "axios";
import {Link} from "react-router-dom";
import ReactToPrint from "react-to-print";
export class Report extends React.Component{
    constructor() {
        super();
        this.state = {
            projects:[],
            searchingValue:{
                upabhokta_samitiko_naam:'',
                projectpadadhikariName:'',
                wardNumber:'',
            },
            sendingData:{
                aa_ba:'aa_ba'
            },
            showOption:'search',
            searchedProjects:[],
            wards:[],
        }
        this.handleValueChange=this.handleValueChange.bind(this);
    }
    handleValueChange(event){
        var value = event.target.value;
        var name = event.target.name;
        let searchingValue= this.state.searchingValue;
        if(name==="upabhokta_samitiko_naam"){
            searchingValue.upabhokta_samitiko_naam = value;
        }
        if(name==="projectpadadhikariName"){
            searchingValue.projectpadadhikariName = value;
        }
        if(name==="wardNumber"){
            searchingValue.wardNumber = value;
        }
        if(name==="aa_ba"){
            let sendingData=this.state.sendingData;
            sendingData.aa_ba = value;
            this.setState({sendingData:sendingData},()=>{
                axios({
                    method: 'post',
                    url: localStorage.getItem('server')+'api/getProjects',
                    data: {aa_ba:this.state.sendingData.aa_ba},
                }).then((response)=> {
                    let searchingValue = this.state.searchingValue;
                    for (let key in searchingValue){
                        searchingValue[key]='';
                    }
                    this.setState({projects:response.data,searchedProjects:response.data,searchingValue:searchingValue});
                }).catch((res)=>{

                });
            });
        }
        this.setState({searchingValue: searchingValue, searchedProjects:[]},()=>{
            let searchingItem = [];
            for (let key in this.state.searchingValue){
                if(this.state.searchingValue[key]!==''){
                    searchingItem.push(key);
                }
            }
            let searchedProjects = this.state.searchedProjects;
            this.state.projects.forEach((item,index,arr)=> {
                if(searchingItem.length===1){
                    if (item[searchingItem[0]].includes(this.state.searchingValue[searchingItem[0]])) {
                        searchedProjects.push(item);
                    }
                }
                if(searchingItem.length===2){
                    if (item[searchingItem[0]].includes(this.state.searchingValue[searchingItem[0]]) && item[searchingItem[1]].includes(this.state.searchingValue[searchingItem[1]])) {
                        searchedProjects.push(item);
                    }
                }
                if(searchingItem.length===3){
                    if (item[searchingItem[0]].includes(this.state.searchingValue[searchingItem[0]]) && item[searchingItem[1]].includes(this.state.searchingValue[searchingItem[1]]) && item[searchingItem[2]].includes(this.state.searchingValue[searchingItem[2]])) {
                        searchedProjects.push(item);
                    }
                }
                this.setState({searchedProjects:searchedProjects});
            });
        });
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getProjects',
            data: {aa_ba:this.state.sendingData.aa_ba},
        }).then((response)=> {
            console.log(response.data);
            this.setState({projects:response.data,searchedProjects:response.data});
        }).catch((res)=>{

        });
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {detail:'ward'},
        }).then((response)=> {
            let wards = response.data;
            this.setState({wards:wards});
        }).catch((res)=>{

        })
    }
    render() {
        return (
            <div id='report'>
                <Header/>
                <div id="container">
                    <div id="title">
                        योजनाहरुको प्रतिवेदन
                        {this.context.aarthik_barsa}
                    </div>
                    {this.state.showOption==="search" ?
                    <div id="project">
                        <div id="search_options">
                            <div className="item">
                                <span>उपभोक्ता समितिको नाम</span>
                                <input name="upabhokta_samitiko_naam" value={this.state.searchingValue.upabhokta_samitiko_naam} onChange={this.handleValueChange} type="text" placeholder="उपभोक्ता समितिको नाम"/>
                            </div>
                            <div className="item">
                                <span>अध्यक्षको नाम थर</span>
                                <input name='projectpadadhikariName' value={this.state.searchingValue.projectpadadhikariName} onChange={this.handleValueChange} type="text" placeholder="अध्यक्षको नाम थर"/>
                            </div>
                        </div>
                        <div id='searchCategory'>
                            <div className="item">
                                <select name="aa_ba" value={this.state.sendingData.aa_ba} onChange={this.handleValueChange}>
                                    <option value='aa_ba'>आ.व. अनुसार</option>
                                    <option value='all'>सबै</option>
                                </select>
                            </div>
                            <div className="item">
                                <select name="wardNumber" value={this.state.searchingValue.wardNumber} onChange={this.handleValueChange}>
                                    <option selected={true} value='' disabled={true}>---वडा अन्तर्गत---</option>
                                    {this.state.wards.map((ward,index)=>{
                                        return <option key={index} value={ward.number}>{ward.number} नं. वडा, {ward.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div id="controls">
                            <button onClick={()=>{this.setState({showOption:'print'})}}>प्रिन्ट प्रेभिउ</button>
                            <button><img src={require('./../../icons/xls-file.svg').default}/>एक्सेलमा लैजानुहोस</button>
                        </div>
                        <div id="search_result">
                            <table >
                                <tr>
                                    <th>क्र.सं.</th>
                                    <th>आयोजनाको नाम, स्थल</th>
                                    <th>वडा</th>
                                    <th>आयोजना शुरु मिति</th>
                                    <th>आयोजना अन्य मिति</th>
                                    <th>लागत अनुमान रु</th>
                                    <th>कार्याबाट</th>
                                    <th>उपभोक्ता समितिबाट</th>
                                    <th>गठन भएको मिति</th>
                                    <th>अध्यक्षको नाम,थर</th>
                                    <th>अध्यक्षको सम्पर्क नं.</th>
                                    <th>प्रिन्ट</th>
                                    <th>सम्पादन</th>
                                    <th>डिलेट</th>
                                </tr>
                                {this.state.searchedProjects.map((searchedProject,index)=>{
                                    return <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{searchedProject.upabhokta_samitiko_naam},{searchedProject.upabokta_samitiko_thegana} </td>
                                        <td>{searchedProject.number}</td>
                                        <td>{searchedProject.aayojana_suru_miti}</td>
                                        <td>{searchedProject.aayojana_ante_miti}</td>
                                        <td>{searchedProject.lagat_anuman}</td>
                                        <td>{searchedProject.lagat_behorne_karyalay}</td>
                                        <td>{searchedProject.lagat_behorne_upobhokta_samiti}</td>
                                        <td>{searchedProject.gathan_vayeko_miti}</td>
                                        <td>{searchedProject.projectpadadhikariName}</td>
                                        <td>{searchedProject.adaxyako_number}</td>
                                        <th><img src={require('./../../icons/print.svg').default}/></th>
                                        <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                        <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                    </tr>
                                })}
                            </table>
                        </div>
                    </div> : null }
                    {this.state.showOption==="print" ?
                        <Fragment>
                            <div id="controls">
                                <ReactToPrint trigger={() => {return <button>प्रिन्ट गर्नुहोस </button>}} content={() => this.componentRef}/>
                                <button onClick={()=>{this.setState({showOption:'search'})}}>रद्ध गर्नुहोस</button>
                            </div>
                            <ReportPrintPreview projects={this.state.searchedProjects} ref={el => (this.componentRef = el)}/>
                        </Fragment>
                    : null }
                </div>
            </div>
        );
    }
}
class ReportPrintPreview extends React.Component{
    constructor() {
        super();
        this.state = {
            projects:[],
        }
    }
    componentDidMount() {
        // this.setState({projects:this.props.location.projects});
    }
    render() {
        return (
            <div id='reportPrintPreview'>
                <div id="projects">
                    <div id="report_header" >
                        <img src={require('../../files/emblem_logo.png').default}/>
                        <div id="title">
                            <span>थासाङ गाउँपालिका, गाउँकार्यपालिकाको कार्यालय</span>
                            <span>कोबाङ, मुस्ताङ</span>
                            <span>योजना प्रतिवेदन</span>
                        </div>
                    </div>
                    <div id="search_result" >
                        <table border='1' >
                            <tr>
                                <th>क्र.सं.</th>
                                <th>आयोजनाको नाम, स्थल</th>
                                <th>वडा</th>
                                <th>आयोजना शुरु मिति</th>
                                <th>आयोजना अन्य मिति</th>
                                <th>लागत अनुमान रु</th>
                                <th>कार्याबाट</th>
                                <th>उपभोक्ता समितिबाट</th>
                                <th>गठन भएको मिति</th>
                                <th>अध्यक्षको नाम,थर</th>
                                <th>अध्यक्षको सम्पर्क नं.</th>
                            </tr>
                            {this.props.projects.map((project,index)=>{
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{project.upabhokta_samitiko_naam},{project.upabokta_samitiko_thegana} </td>
                                    <td>{project.wardId}</td>
                                    <td>{project.aayojana_suru_miti}</td>
                                    <td>{project.aayojana_ante_miti}</td>
                                    <td>{project.lagat_anuman}</td>
                                    <td>{project.lagat_behorne_karyalay}</td>
                                    <td>{project.lagat_behorne_upobhokta_samiti}</td>
                                    <td>{project.gathan_vayeko_miti}</td>
                                    <td>{project.name}</td>
                                    <td>{project.adaxyako_number}</td>
                                </tr>
                            })}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}