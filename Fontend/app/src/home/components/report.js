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

            searchingCategory:{
                aayojana_hune_woda:'',
            },
            searchingValue:{
                upabhokta_samitiko_naam:'',
                aayojana_suru_miti:'',
                aayojana_ante_miti:'',
                aayojana_bajet_mathi:'',
                aayojana_bajet_tala:'',
                name:'',
            },
            showOption:'search',
            searchedProjects:[],
            wardOptions:[],
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
    handleCategoryChange(event){
        let value = event.target.value;
        let name = event.target.name;
        let searchingCategory= this.state.searchingCategory;
        if(name==="aayojana_hune_woda"){
            searchingCategory.aayojana_hune_woda = value;
        }
        this.setState({searchingCategory:searchingCategory});
    }
    handleUpdate(event){
        var value = event.target.value;
        var name = event.target.name;
        let searchingValue= this.state.searchingValue;
        searchingValue.upabhokta_samitiko_naam = '';
        searchingValue.name = '';
        searchingValue.aayojana_suru_miti = '';
        searchingValue.aayojana_ante_miti = '';
        searchingValue.aayojana_bajet_mathi = '';
        searchingValue.aayojana_bajet_tala = '';
        searchingValue.ppa_naam = '';
        this.setState({searchingValue:searchingValue},()=>{
            let searchingValue= this.state.searchingValue;
            if(name==="upabhokta_samitiko_naam"){
                searchingValue.upabhokta_samitiko_naam = value;
            }
            if(name==="aayojana_suru_miti"){
                searchingValue.aayojana_suru_miti = value;
            }
            if(name==="aayojana_ante_miti"){
                searchingValue.aayojana_ante_miti = value;
            }
            if(name==="aayojana_bajet_mathi"){
                searchingValue.aayojana_bajet_mathi = value;
            }
            if(name==="aayojana_bajet_tala"){
                searchingValue.aayojana_bajet_tala = value;
            }
            if(name==="name"){
                searchingValue.name = value;
            }
            this.setState({searchingValue:searchingValue});
        });
    }
    handleSearch(){
        this.setState({searchedProjects: []},()=>{
            let searchedProjects = this.state.searchedProjects;
            this.state.projects.forEach((item,index,arr)=>{
                if(this.state.searchingValue.upabhokta_samitiko_naam!=='' && parseInt(item.aayojana_hune_woda)===parseInt(this.state.searchingCategory.aayojana_hune_woda) && item.upabhokta_samitiko_naam.includes(this.state.searchingValue.upabhokta_samitiko_naam)){
                    searchedProjects.push(item);
                }
                if(this.state.searchingValue.name!=='' && parseInt(item.aayojana_hune_woda)===parseInt(this.state.searchingCategory.aayojana_hune_woda) && item.name.includes(this.state.searchingValue.name)){
                    searchedProjects.push(item);
                }
                if(this.state.searchingValue.aayojana_bajet_mathi!=='' && parseInt(item.aayojana_hune_woda)===parseInt(this.state.searchingCategory.aayojana_hune_woda) && item.lagat_anuman>=this.state.searchingValue.aayojana_bajet_mathi){
                    searchedProjects.push(item);
                }
                if(this.state.searchingValue.aayojana_bajet_tala!=='' && parseInt(item.aayojana_hune_woda)===parseInt(this.state.searchingCategory.aayojana_hune_woda) && item.lagat_anuman<=this.state.searchingValue.aayojana_bajet_tala){
                    searchedProjects.push(item);
                }
            });
            this.setState({searchedProjects: searchedProjects});
        });
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getProjects',
            data: {},
        }).then((response)=> {
            console.log(response.data);
            this.setState({projects:response.data,searchedProjects:response.data});
        }).catch((res)=>{

        });
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {options:'ward'},
        }).then((response)=> {
            let wardOptions = response.data.ward_options;
            let searchingCategory = this.state.searchingCategory;
            searchingCategory.aayojana_hune_woda = wardOptions[0].ward_number;
            this.setState({wardOptions:wardOptions,searchingCategory:searchingCategory});
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
                                <input name="upabhokta_samitiko_naam" value={this.state.searchingValue.upabhokta_samitiko_naam} onChange={this.handleUpdate} type="text" placeholder="उपभोक्ता समितिको नाम"/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको शुरु मिति</span>
                                <input name='aayojana_suru_miti' value={this.state.searchingValue.aayojana_suru_miti} onChange={this.handleUpdate}  type="text" placeholder="आयोजनाको शुरु मिति"/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको अन्त्य मिति</span>
                                <input name='aayojana_ante_miti' value={this.state.searchingValue.aayojana_ante_miti} onChange={this.handleUpdate}  type="text" placeholder="आयोजनाको अन्त्य मिति"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा माथि</span>
                                <input name='aayojana_bajet_mathi' value={this.state.searchingValue.aayojana_bajet_mathi} onChange={this.handleUpdate} type="text" placeholder="आयोजना बजेट भन्दा माथि"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा तल</span>
                                <input name='aayojana_bajet_tala' value={this.state.searchingValue.aayojana_bajet_tala} onChange={this.handleUpdate}  type="text" placeholder="आयोजना बजेट भन्दा तल"/>
                            </div>
                            <div className="item">
                                <span>अध्यक्षको नाम थर</span>
                                <input name='name' value={this.state.searchingValue.name} onChange={this.handleUpdate} type="text" placeholder="अध्यक्षको नाम थर"/>
                            </div>
                        </div>
                        <div id='searchCategory'>
                            <div className="item">
                                <select name="aayojana_hune_woda" onChange={this.handleCategoryChange}>
                                    {this.state.wardOptions.map((wardOption,index)=>{
                                        return <option key={index} value={wardOption.ward_number}>{wardOption.ward_number} नं. वडा, {wardOption.ward_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div id="controls">
                            <button onClick={this.handleSearch}><img src={require('./../../icons/search.svg').default}/> खोज्नुहोस</button>
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
                                        <td>{searchedProject.aayojana_hune_woda}</td>
                                        <td>{searchedProject.aayojana_suru_miti}</td>
                                        <td>{searchedProject.aayojana_ante_miti}</td>
                                        <td>{searchedProject.lagat_anuman}</td>
                                        <td>{searchedProject.lagat_behorne_karyalay}</td>
                                        <td>{searchedProject.lagat_behorne_upobhokta_samiti}</td>
                                        <td>{searchedProject.gathan_vayeko_miti}</td>
                                        <td>{searchedProject.name}</td>
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
                                    <td>{project.aayojana_hune_woda}</td>
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