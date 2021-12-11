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
            searchData:{
                aa_ba:'',
                aayojana_naam:'',
                aayojana_hune_woda:'',
                aayojana_suru_miti:'',
                aayojana_ante_miti:'',
                aayojana_bajet_mathi:'',
                aayojana_bajet_tala:'',
                adaxya_naam:'',
                ppa_naam:'',
            },
            showOption:'search'
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    handleUpdate(event){
        let value = event.target.value;
        let name = event.target.name;
        let searchData= this.state.searchData;
        if(name==="aa_ba"){
           searchData.aa_ba = value;
        }
        if(name==="aayojana_naam"){
            searchData.aayojana_naam= value;
        }
        if(name==="aayojana_hune_woda"){
            searchData.aayojana_hune_woda = value;
        }
        if(name==="aayojana_suru_miti"){
            searchData.aayojana_suru_miti = value;
        }
        if(name==="aayojana_ante_miti"){
            searchData.aayojana_ante_miti = value;
        }
        if(name==="aayojana_bajet_mathi"){
            searchData.aayojana_bajet_mathi = value;
        }
        if(name==="aayojana_bajet_tala"){
            searchData.aayojana_bajet_tala = value;
        }
        if(name==="adaxya_naam"){
            searchData.adaxya_naam = value;
        }
        if(name==="ppa_naam"){
            searchData.ppa_naam = value;
        }
        this.setState({searchData:searchData});
    }
    handleSearch(){
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getProjects',
            data: this.state.searchData,
        }).then((response)=> {
            console.log(response.data);
        }).catch((res)=>{

        })
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getProjects',
            data: {},
        }).then((response)=> {
            console.log(response.data);
            this.setState({projects:response.data});
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
                    </div>
                    {this.state.showOption==="search" ?
                    <div id="project">
                        <div id="search_options">
                            <div className="item">
                                <span>आ.व.</span>
                                <input name="aa_ba" value={this.state.searchData.aa_ba} type="text" onChange={this.handleUpdate} placeholder="आ.व."/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको नाम</span>
                                <input name="aayojana_naam" value={this.state.searchData.aayojana_naam} onChange={this.handleUpdate} type="text" placeholder="आयोजनाको नाम"/>
                            </div>
                            <div className="item">
                                <span>वडा नं.</span>
                                <input name="aayojana_hune_woda" value={this.state.searchData.aayojana_hune_woda} onChange={this.handleUpdate} type="text" placeholder="वडा नं."/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको शुरु मिति</span>
                                <input name='aayojana_suru_miti' value={this.state.searchData.aayojana_suru_miti} onChange={this.handleUpdate}  type="text" placeholder="आयोजनाको शुरु मिति"/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको अन्त्य मिति</span>
                                <input name='aayojana_ante_miti' value={this.state.searchData.aayojana_ante_miti} onChange={this.handleUpdate}  type="text" placeholder="आयोजनाको अन्त्य मिति"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा माथि</span>
                                <input name='aayojana_bajet_mathi' value={this.state.searchData.aayojana_bajet_mathi} onChange={this.handleUpdate} type="text" placeholder="आयोजना बजेट भन्दा माथि"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा तल</span>
                                <input name='aayojana_bajet_tala' value={this.state.searchData.aayojana_bajet_tala} onChange={this.handleUpdate}  type="text" placeholder="आयोजना बजेट भन्दा तल"/>
                            </div>
                            <div className="item">
                                <span>अध्यक्षको नाम थर</span>
                                <input name='adaxya_naam' value={this.state.searchData.adaxya_naam} onChange={this.handleUpdate} type="text" placeholder="अध्यक्षको नाम थर"/>
                            </div>
                            <div className="item">
                                <span>प्रमुख प्रशासकीय अधिकृत</span>
                                <input name='ppa_naam' value={this.state.searchData.ppa_naam} onChange={this.handleUpdate} type="text" placeholder="प्रमुख प्रशासकीय अधिकृत"/>
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
                                {this.state.projects.map((project,index)=>{
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
                            <ReportPrintPreview projects={this.state.projects} ref={el => (this.componentRef = el)}/>
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