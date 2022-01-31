import React from "react";
import './../css/reportPrintPreview.css';
import {Header} from "./header";
import ReactToPrint from "react-to-print";
export class ReportPrintPreview extends React.Component{
    constructor() {
        super();
        this.state = {
            searchedProjects:[],
        }
    }
    componentDidMount() {
        this.setState({searchedProjects:this.props.location.searchedProjects});
    }
    render() {
        return (
            <div id='reportPrintPreview'>
                <Header/>
                <div id="container">
                    <div id="title">
                        योजनाहरुको प्रतिवेदन / प्रिन्ट प्रेभिउ
                    </div>
                    <div id='controls'>
                        <ReactToPrint
                            trigger={() => {
                                return <button>प्रिन्ट गर्नुहोस</button>
                            }}
                            content={() => this.componentRef}
                        />
                    </div>
                    <div id="projects" ref={el => (this.componentRef = el)}>
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
                                    </tr>
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}