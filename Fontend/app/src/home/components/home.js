import React from "react";
import './../css/home.css';
import {Header} from "./header";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,PieChart,Pie} from "recharts";
import axios from "axios";
export class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            showSetting:false,
            nepali_date:null,
            aa_ba:{
                selected:null,
                current:null,
            },
            selectedAaba:null,
            currentAaba:null,
            barChartData:[],
            munReport:{},
            wardReport:[],
            progressReport:{
                wards:[],
                gapa:{sampanna_yojanaharu:0,jamma_yojanaharu:0},
            }
        }
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getSetting',
            data: {setting:'aa_ba'},
        }).then((response)=>{
            let aa_ba =  this.state.aa_ba;
            aa_ba.selected = response.data[1].option;
            this.setState({aa_ba:aa_ba});
        }).catch(function (error) {

        });
        let bs = require('bikram-sambat');
        let english_date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
        let nepali_date = bs.toBik_text(english_date);

        let fy_year = bs.toBik_euro(english_date);
        let year = parseInt(fy_year.substr(2, 2));
        let nextYear = parseInt(year)+1;
        let fy = year+'/'+nextYear;

        this.setState({nepaliDate:nepali_date,fy:fy});
         axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getBarChart',
            data: {},
        }).then((response)=>{
            console.log(response.data);
             let months = ['साउन', 'भाद्र', 'असोज', 'कार्तिक','मंसिर', 'पुष', 'माघ', 'फागुन', 'चैत्र', 'बैशाख', 'जेष्ठ','असार'];
             let barChartData= [...this.state.barChartData];
             response.data.forEach((item,index,arr)=>{
                 if(item[0].lagat_anuman===null){
                     barChartData.push({name: months[index] ,लागत_अनुमान_लाखमा : 0, योजनाहरु : item[0].yojanaharu});
                 }else{
                     barChartData.push({name: months[index], लागत_अनुमान_लाखमा : item[0].lagat_anuman/100000, योजनाहरु : item[0].yojanaharu});
                 }
             })
             this.setState({barChartData:barChartData});
        }).catch(function (error) {

        });

        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getMunReport',
            data: {},
        }).then((response)=>{
            this.setState({munReport:response.data[0]});
        }).catch(function (error) {

        });
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getWardReport',
            data: {},
        }).then((response)=>{
            console.log(response.data);
            this.setState({wardReport:response.data});
        }).catch(function (error) {

        });
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getDetail',
            data: {options:'progressReport',fy:'78/79'},
        }).then((response)=>{
            console.log(response.data);
            let sampanna_yojanaharu = 0;
            let jamma_yojanaharu = 0;
            response.data[1].forEach((item,index,arr)=>{
                sampanna_yojanaharu = sampanna_yojanaharu+item.yojanaharu;
                jamma_yojanaharu = jamma_yojanaharu+item.yojana_sangkhya;
            })
            let progresReport = this.state.progressReport;
            progresReport.wards = response.data[1];
            progresReport.gapa.sampanna_yojanaharu=sampanna_yojanaharu;
            progresReport.gapa.jamma_yojanaharu= jamma_yojanaharu;
            this.setState({progressReport:progresReport});
        }).catch(function (error) {

        });
    }
    render() {
        return (
            <div id='home'>
                <Header/>
                <div id="container">
                    <div id="home_header">
                        <div id="title">
                            <span>ड्यासबोर्ड, <b>योजना व्यवस्थापन सुचना प्रमाणी, आर्थिक बर्ष {this.state.aa_ba.selected} को । </b> </span>
                            <span>Project Management Information System</span>
                        </div>
                        <div id="time">
                            <span>चालु आर्थिक बर्ष : {this.state.fy},</span>
                            <span>मिति : {this.state.nepaliDate}</span>
                        </div>
                        <div id="user">
                            <img onClick={()=>this.setState({showSetting:!this.state.showSetting})} src={require('./../../icons/3-vertical-dots.svg').default}/>
                            {this.state.showSetting ?
                            <div id="setting">
                                <span onClick={()=>this.setState({showSetting:false})}>पासवर्ड परिवर्तन</span>
                                <span onClick={()=>this.setState({showSetting:false})}>लग आउट</span>
                            </div> : null }
                        </div>
                    </div>
                    <div id="report">
                        <div id="left">
                            <div id="row">
                                <div id="year_report" onChange={()=>{
                                    alert('hello world');
                                }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={this.state.barChartData}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                            allowDecimals={true}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="योजनाहरु" fill="darkgray" />
                                            <Bar dataKey="लागत_अनुमान_लाखमा" fill="green" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div id="mun_report">
                                    <b>थासाङ गाउँपालिका,<br/> गाउँकार्यापालिकाको कार्यालय,<br/> कोबाङ मुस्ताङ</b>
                                    <div id="detail">
                                        <div className="item">योजनाहरु<br/>{this.state.munReport.yojanaharu}</div>
                                        <div className="item">ला.अनुमान<br/>रु {this.state.munReport.lagat_anuman}</div>
                                        <div className="item">जनस्तरबाट<br/> रु {this.state.munReport.lagat_behorne_upobhokta_samiti}</div>
                                        <div className="item">कार्याबाट<br/> रु {this.state.munReport.lagat_behorne_karyalay}</div>
                                        <div className="item">अन्यबाट<br/> रु {this.state.munReport.lagat_behorne_anne}</div>
                                    </div>
                                </div>
                            </div>
                            <div id='ward_report'>
                                {this.state.wardReport.map((item,index)=>{
                                    return <div className="item">
                                        <div>
                                            <b>वडा नं. {item.aayojana_hune_woda} ({item.yojanaharu}) </b>
                                            <span>ला.अ. : रु {item.lagat_anuman}</span>
                                            <span>कार्यालय : रु {item.lagat_behorne_karyalay}</span>
                                            <span>जनस्तर : रु {item.lagat_behorne_upobhokta_samiti}</span>
                                            <span>अन्य : रु {item.lagat_behorne_anne}</span>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div id="right">
                            <div id='title'>योजनाहरुको प्रगति प्रतिवेद</div>
                            <div id="data">
                                <div className="item">
                                    <div id="name">गाउँपालिका ( {this.state.progressReport.gapa.sampanna_yojanaharu}/{this.state.progressReport.gapa.jamma_yojanaharu})<b> ( {((this.state.progressReport.gapa.sampanna_yojanaharu/this.state.progressReport.gapa.jamma_yojanaharu)*100).toFixed(2)} %) </b></div>
                                    <div id="bar">
                                        <div id="progress" style={{width:`${(this.state.progressReport.gapa.sampanna_yojanaharu/this.state.progressReport.gapa.jamma_yojanaharu)*100}%`}}>

                                        </div>
                                    </div>
                                </div>
                                {this.state.progressReport.wards.map((item,index)=>{
                                    return <div key={index} className="item">
                                        <div id="name"><b>वडा नं. {item.ward_number} ({item.yojanaharu}/{item.yojana_sangkhya}) ({((item.yojanaharu/item.yojana_sangkhya)*100).toFixed(2)}%)</b></div>
                                            <div id="bar">
                                                <div id="progress" style={{width:`${(item.yojanaharu/item.yojana_sangkhya)*100}%`}}>

                                                </div>
                                            </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="note">
                        दैनिक रुपमा डाटाहरुलाई डाउनलोड गरी पेनड्राइभ तथा स्टोरेज डिभाइसमा ब्याकप राख्नुहोला ।
                    </div>
                    <div id="data_control">
                        <button><img src={require('./../../icons/upload-file.svg').default}/> डाटा सर्भरमा अपलोड गर्नुहोस </button>
                        <button> <img src={require('./../../icons/file-download.svg').default}/>डाटा सर्भरबाट डाउनलोड गर्नुहोस </button>
                        <button> <img src={require('./../../icons/save-all-files.svg').default}/>डाटा ब्याककप लिनुहोस </button>
                    </div>
                </div>
            </div>
        );
    }
}