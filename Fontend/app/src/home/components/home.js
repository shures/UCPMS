import React from "react";
import NepaliDate from 'nepali-date-converter'
import './../css/home.css';
import {Header} from "./header";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,PieChart,Pie} from "recharts";
import axios from "axios";
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];
const data = [
    {
        name: 'श्रावण',
        योजनाहरु: 4,
        लागत_अनुमान : 20,
    },
    {
        name: 'असोज',
        योजनाहरु: 12,
        लागत_अनुमान : 36,
    },
    {
        name: 'कार्तिक',
        योजनाहरु: 12,
        लागत_अनुमान : 7,
    },
    {
        name: 'मंसिर',
        योजनाहरु: 25,
        लागत_अनुमान : 8,
    },
    {
        name: 'पुष',
        योजनाहरु: 4,
        लागत_अनुमान : 42,
    },
    {
        name: 'माघ',
        योजनाहरु: 2,
        लागत_अनुमान : 200,
    },
    {
        name: 'फागुन',
        योजनाहरु: 4,
        लागत_अनुमान : 2,
    },
    {
        name: 'चैत्र',
        योजनाहरु: 14,
        लागत_अनुमान : 2,
    },
    {
        name: 'बैशाख',
        योजनाहरु: 12,
        लागत_अनुमान : 2,
    },
    {
        name: 'जेष्ठ',
        योजनाहरु: 4,
        लागत_अनुमान : 0,
    },
    {
        name: 'असार',
        योजनाहरु: 4,
        लागत_अनुमान : 0,
    },
];

export class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            showSetting:false,
            nepaliDate:null,
            aa_ba:null,
            barChartData:[

            ],
        }
    }
    componentDidMount() {
        // var bs = require('bikram-sambat');
        // const current = new Date();
        // let date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
        // let dateNepali = bs.toBik_text(date);
        // this.setState({nepaliDate:dateNepali});
        // // barChartData.push({name: 'असार', योजनाहरु : 5, लागत_अनुमान : 12});
        // // this.setState({barChartData:barChartData});
         axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getBarChart',
            data: {},
        }).then( (response)=>{
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
    }
    render() {
        return (
            <div id='home'>
                <Header/>
                <div id="container">
                    <div id="home_header">
                        <div id="title">
                            <span>ड्यासबोर्ड, योजना व्यवस्थापन सुचना प्रमाणी</span>
                            <span>Project Management Information System</span>
                        </div>
                        <div id="time">
                            <span>आर्थिक बर्ष : {this.state.aa_ba},</span>
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
                                        <div className="item">योजनाहरु<br/>50 वटा</div>
                                        <div className="item">ला.अनुमान<br/>रु 355500</div>
                                        <div className="item">जनस्तरबाट<br/> रु 355500</div>
                                        <div className="item">कार्याबाट<br/> रु 355500</div>
                                        <div className="item">भौ. पूर्वाधारबाट<br/> रु 3555</div>
                                        <div className="item">अन्यबाट<br/> रु 355500</div>
                                    </div>
                                </div>
                            </div>
                            <div id='ward_report'>
                                <div className="item">
                                    <div>
                                        <b>१ नं. वडा, टुुकुचे</b>
                                        <span>योजना : 50 वटा</span>
                                        <span>ला.अ. : रु 355500</span>
                                        <span>ज. : रु 355500</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <b>१ नं. वडा, टुुकुचे</b>
                                        <span>योजना : 50 वटा</span>
                                        <span>ला.अ. : रु 355500</span>
                                        <span>ज. : रु 355500</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <b>१ नं. वडा, टुुकुचे</b>
                                        <span>योजना : 50 वटा</span>
                                        <span>ला.अ. : रु 355500</span>
                                        <span>ज. : रु 355500</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <b>१ नं. वडा, टुुकुचे</b>
                                        <span>योजना : 50 वटा</span>
                                        <span>ला.अ. : रु 355500</span>
                                        <span>ज. : रु 355500</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <b>१ नं. वडा, टुुकुचे</b>
                                        <span>योजना : 50 वटा</span>
                                        <span>ला.अ. : रु 355500</span>
                                        <span>ज. : रु 355500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="right">
                            <div id="foo">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie dataKey="value" isAnimationActive={true} data={data01} cx="50%" cy="50%" outerRadius={60} fill="green" label/>
                                        <Pie dataKey="value" isAnimationActive={true} data={data02} cx="50%" cy="50%"  outerRadius={40} fill="darkgray" label />
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
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