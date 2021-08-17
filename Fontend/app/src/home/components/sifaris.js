import React from "react";
import './../css/sifaris.css';
import {Header} from "./header";
import ReactToPrint from 'react-to-print';
import { NepaliDatePicker } from "datepicker-nepali-reactjs";
export class Sifaris extends React.Component{
    constructor() {
        super();
        this.state = {
            sifaris_selected : "ao",
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
                                        <input type="text" placeholder="योजनाको नाम "/>
                                    </div>
                                    {/*<div id="result">*/}
                                    {/*    <span className="item">अन्नपूर्ण हिमाल जाने पदमार्ग निर्माण, थासाङ-2, कोबाङ</span>*/}
                                    {/*    <span className="item">अन्नपूर्ण हिमाल जाने पदमार्ग निर्माण, थासाङ-2, कोबाङ</span>*/}
                                    {/*    <span className="item">अन्नपूर्ण हिमाल जाने पदमार्ग निर्माण, थासाङ-2, कोबाङ</span>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>बैङ्कको नाम र ठेगाना</span>
                                        <select>
                                            <option>श्री प्रभु बैङ्क, थासाङ शाखा, मुस्ताङ</option>
                                            <option>श्री प्रभु बैङ्क, जोमसोम शाखा, मुस्ताङ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>पत्रको मिति</span>
                                        <NepaliDatePicker onDateSelect={(date)=>{}} className="date_picker"  defaultDate={false} placeholder="पत्रको मिति" />
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
                            <SifarisPrint ref={el => (this.componentRef = el)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class SifarisPrint extends React.PureComponent {
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
                            <span>पत्र संख्या : 2077/78</span>
                            <span>चलानी नं. : </span>
                        </div>
                        <div id="right">
                            <span>गण्डकी प्रदेश, नेपाल</span>
                        </div>
                    </div>
                </div>
                <div id="date"> मिति : 2078/04/25 </div>
                <div id="office">श्री प्रभु बैङ्क, <br/> थासाङ शाखा कार्यालय,<br/> मुस्ताङ ।</div>
                <div id="subject">खाता संचालनको लागि सिफारिस गरिएको । </div>
                <div id="body">
                    प्रस्तुत विषयमा थासाङ गाउँपालिकाको आ.व. 077/78 को बार्षिक स्वीकृत कार्यक्रम अनसार
                    सिरकुङमा ओखरखेति ताबारको लागि मिति 2077/0528 को वडा नं. 2 को आम भेलाले
                    पूर्ण प्रसाद मगर (ना.प्र.प.नं. 49854755) को अध्यक्षामा ७ सदस्यीय सिरकुङमा ओखरखेति तरबार उपभोक्ता समिति वठन
                    भई मिति 2077/09/27 मा यस कार्यालय सँग योजना सम्झौता भइसकेकोले श्री पु अनुरोध छ ।
                </div>
                <div id="sign">
                    ..................................
                </div>
            </div>
        );
    }
}