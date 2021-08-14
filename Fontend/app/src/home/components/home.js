import React from "react";
import './../css/home.css';
import {Header} from "./header";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,PieChart,Pie} from "recharts";
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
        name: '2078',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            showSetting:false,
        }
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
                            <span>आर्थिक बर्ष : २०७७।७८,</span>
                            <span>मिति : २०७७।१२।१३, बुघबार</span>
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
                                <div id="year_report">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="darkgray" />
                                            <Bar dataKey="uv" fill="green" />
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
                                    <b>१ नं. वडा, टुुकुचे</b>
                                    <span>योजना : 50 वटा</span>
                                    <span>ला.अ. : रु 355500</span>
                                    <span>ज. : रु 355500</span>
                                </div>
                                <div className="item">
                                    <b>२ नं. वडा, कोबाङ</b>
                                    <span>योजना : 50 वटा</span>
                                    <span>ला.अ. : रु 355500</span>
                                    <span>ज. : रु 355500</span>
                                </div>
                                <div className="item">
                                    <b>३ नं. वडा, लेते</b>
                                    <span>योजना : 50 वटा</span>
                                    <span>ला.अ. : रु 355500</span>
                                    <span>ज. : रु 355500</span>
                                </div>
                                <div className="item">
                                    <b>४ नं. वडा, घाँसा</b>
                                    <span>योजना : 50 वटा</span>
                                    <span>ला.अ. : रु 355500</span>
                                    <span>ज. : रु 355500</span>
                                </div>
                                <div className="item">
                                    <b>५ नं. वडा, कुञ्जो</b>
                                    <span>योजना : 50 वटा</span>
                                    <span>ला.अ. : रु 355500</span>
                                    <span>ज. : रु 355500</span>
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