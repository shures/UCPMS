import React from "react";
import './../css/project_entry.css';
import './../css/agreement_print_preview.css';
import axios from 'axios';
import {Header} from "./header";
import ReactToPrint from 'react-to-print';
export class AgreementPrintPreview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            project:[]
        }
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getProject',
            data:{'id': 1},
        }).then((response)=> {
            console.log(response.data);
            this.setState({project:response.data[1]});
        }).catch((res) => {
            this.setState({status:'Something went wrong.'});
        });
    }
    render() {
        return (
            <div id="agreement_print_preview">
                <Header/>
                <div id="container">
                    <div id='title'>
                        <ReactToPrint
                            trigger={() => {
                                return <button>प्रिन्ट गर्नुहोस</button>
                            }}
                            content={() => this.componentRef}
                        />
                    </div>
                    <div id="agreement_a4" ref={el => (this.componentRef = el)}>
                        <div id="agreement_header">
                            <img src={require('./../../icons/emblem_logo.png').default}/>
                            <div id="title">
                                <span>थासाङ गाउँपालिका</span>
                                <span>गाउँकार्यपालिकाको कार्यालय</span>
                                <span>कोबाङ, मुस्ताङ</span>
                            </div>
                        </div>
                        <div id="body">
                            <div className="item">
                                <div id="name">
                                    १) सम्झौता गर्ने पक्ष र आयोजना
                                </div>
                                <div className="title">
                                    <div id="name">
                                        क) उपभोत्ता समितिको विवरण
                                    </div>
                                    <div className="sub-title">
                                        <table id="simple">
                                            <tr>
                                                <td><span>१) नाम : </span></td>
                                                <td><b>{this.state.project.upabhokta_samitiko_naam}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) ठेगाना :</span></td>
                                                <td><b>{this.state.project.upabokta_samitiko_thegana}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        ख) आयोजनाको विवरण
                                    </div>
                                    <div className="sub-title">
                                        <table id="simple">
                                            <tr>
                                                <td><span>१) नाम :</span></td>
                                                <td><b>{this.state.project.aayojanako_naam}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) आयोजना स्थल :</span></td>
                                                <td><b>{this.state.project.aayojanako_sthal}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) उदेश्य :</span></td>
                                                <td><b>{this.state.project.aayojanako_udeshya}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>४) आयोजना सुरु हुने मिति :</span></td>
                                                <td><b>{this.state.project.aayojana_suru_miti}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    २) आयोजना लागत सम्बन्धि विवरण
                                </div>
                                <div className="title">
                                    <div id="name">
                                        क) लागत अनुमान रु : <b>{this.state.project.lagat_anuman}</b>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        ख) लागत व्यहोर्ने स्रोतहरु
                                    </div>
                                    <div className="sub-title">
                                        <table id="simple">
                                            <tr>
                                                <td><span>१) कार्यलय :</span></td>
                                                <td><b>{this.state.project.lagat_behorne_karyalay}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) उपभोत्ता समिति :</span></td>
                                                <td><b>{this.state.project.lagat_behorne_upobhokta_samiti}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) अन्य</span></td>
                                                <td><b>{this.state.project.lagat_behorne_anne}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        ग) बस्तुगत अनुदानको विवरण
                                    </div>
                                    <div className="sub-title">
                                        <table border="1" id="table">
                                            <tr>
                                                <th>क्र.स.</th> <th>बस्तुगत अनुदानको विवरण</th>  <th>सामाग्रीको नाम</th>  <th>एकाई</th>
                                            </tr>
                                            <tr>
                                                <td>१</td><td>संघबाट</td><td><b>{this.state.project.bastugat_anudan_sangbata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_sangbata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>२</td><td>प्रदेशबाट</td><td><b>{this.state.project.bastugat_anudan_pradeshbata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_pradeshbata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>३</td><td>स्थानीय तहबाट</td><td><b>{this.state.project.bastugat_anudan_sthaniyebata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_sthaniyebata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>४</td><td>गैह्रसरकारी तहबाट</td><td><b>{this.state.project.bastugat_anudan_gairasarakaribata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_gairasarakaribata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>५</td><td>विदेशी दातृ निकायबाट</td><td><b>{this.state.project.bastugat_anudan_bideshbata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_bideshbata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>६</td><td>उपभोक्ता समितिबाट</td><td><b>{this.state.project.bastugat_anudan_upobhoktasamitibata_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_upokhoktasamitibata_ekai}</b></td>
                                            </tr>
                                            <tr>
                                                <td>६</td><td>अन्य निकायबाट</td><td><b>{this.state.project.bastugat_anudan_anne_samagriko_naam}</b></td><td><b>{this.state.project.bastugat_anudan_anne_ekai}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        घ ) आयोजनाको लाभान्वित हुने
                                    </div>
                                    <div className="sub-title">
                                        <table id="simple">
                                            <tr>
                                                <td><span>१) घरपरियार संख्या :</span></td>
                                                <td><b>{this.state.project.aayojana_labhanbit_gharpariwar_sangkhya}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) जनसंख्या :</span></td>
                                                <td><b>{this.state.project.aayojana_labhanbit_janasankhya}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) संगठित संख्या :</span></td>
                                                <td><b>{this.state.project.aayojana_labhanbit_sangathit_sangkhya}</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) अन्य :</span></td>
                                                <td><b>{this.state.aayojana_labhanbit_anne}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ३) उपभोत्ता समिति/गैरसरकारी सघसंस्था/समुदायमा आधारित संस्था सम्बन्धि विवरण
                                </div>
                                <div className="title">
                                    <div id="name">
                                        क) गठन भएको मिति : <b>{this.state.project.gathan_vayeko_miti}</b>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        ख) पदाघिकारीहरुको नाम
                                    </div>
                                    <div className="sub-title">
                                        <table border="1" id="table">
                                            <tr>
                                                <th>क्र.स.</th><th>पद</th> <th>नाम थर</th> <th>ठेगाना</th> <th>नना.प्र.प.नं </th> <th>जिल्ला</th>
                                            </tr>
                                            <tr>
                                                <th>१</th><td>अध्यक्ष</td><td><b>{this.state.project.adaxya_name}</b></td><td><b>{this.state.project.adaxya_thegana }</b></td><td><b>{this.state.project.adaxya_na_number}</b></td><td><b>{this.state.project.adaxya_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>२</th><td>सचिव</td><td><b>{this.state.project.sachib_name}</b></td><td><b>{this.state.project.sachib_thegana }</b></td><td><b>{this.state.project.sachib_na_number}</b></td><td><b>{this.state.project.sachib_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>३</th><td>कोषादध्क्ष</td><td><b>{this.state.project.kosha_name}</b></td><td><b>{this.state.project.kosha_thegana }</b></td><td><b>{this.state.project.kosha_na_number}</b></td><td><b>{this.state.project.kosha_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>४</th><td>सदस्य</td><td><b>{this.state.project.sadasshya1_name}</b></td><td><b>{this.state.project.sadasshya1_thegana}</b></td><td><b>{this.state.project.sadasshya1_na_number}</b></td><td><b>{this.state.project.sadasshya1_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>५</th><td>सदस्य</td><td><b>{this.state.project.sadasshya2_name}</b></td><td><b>{this.state.project.sadasshya2_thegana}</b></td><td><b>{this.state.project.sadasshya2_na_number}</b></td><td><b>{this.state.project.sadasshya2_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>६</th><td>सदस्य</td><td><b>{this.state.project.sadasshya3_name}</b></td><td><b>{this.state.project.sadasshya3_thegana}</b></td><td><b>{this.state.project.sadasshya3_na_number}</b></td><td><b>{this.state.project.sadasshya3_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>७</th><td>सदस्य</td><td><b>{this.state.project.sadasshya4_name}</b></td><td><b>{this.state.project.sadasshya4_thegana}</b></td><td><b>{this.state.project.sadasshya4_na_number}</b></td><td><b>{this.state.project.sadasshya4_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>८</th><td>सदस्य</td><td><b>{this.state.project.sadasshya5_name}</b></td><td><b>{this.state.project.sadasshya5_thegana}</b></td><td><b>{this.state.project.sadasshya5_na_number}</b></td><td><b>{this.state.project.sadasshya5_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>९</th><td>सदस्य</td><td><b>{this.state.project.sadasshya6_name}</b></td><td><b>{this.state.project.sadasshya6_thegana}</b></td><td><b>{this.state.project.sadasshya6_na_number}</b></td><td><b>{this.state.project.sadasshya6_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>१०</th><td>सदस्य</td><td><b>{this.state.project.sadasshya7_name}</b></td><td><b>{this.state.project.sadasshya7_thegana}</b></td><td><b>{this.state.project.sadasshya7_na_number}</b></td><td><b>{this.state.project.sadasshya7_jilla}</b></td>
                                            </tr>
                                            <tr>
                                                <th>११</th><td>सदस्य</td><td><b>{this.state.project.sadasshya8_name}</b></td><td><b>{this.state.project.sadasshya8_thegana}</b></td><td><b>{this.state.project.sadasshya8_na_number}</b></td><td><b>{this.state.project.sadasshya8_jilla}</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        क) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या  : <b>{this.state.project.upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : <b>{this.state.project.anubhav_barsa}</b>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ५) उपभोक्ता समिति/समुदायका आधारित संध/गैरसरकारी स‌स्थाले प्राप्त गर्ने किस्ताको विवरण ।
                                </div>
                                <div className="title">
                                    <table border="1" id="table">
                                        <tr>
                                            <th>किस्ताको क्रम</th><th>मिति</th><th>किस्ता रकम</th><th>निर्माण सामग्री परिमाण</th><th>कैफियत</th>
                                        </tr>
                                        <tr>
                                            <td>प्रथम</td><td><b>{this.state.project.pratham_miti}</b></td><td><b>{this.state.project.pratham_rakam}</b></td><td><b>{this.state.project.pratham_samagriko_pariman}</b></td><td><b>{this.state.project.pratham_kaifiyet}</b></td>
                                        </tr>
                                        <tr>
                                            <td>दोस्रो</td><td><b>{this.state.project.dorshro_miti}</b></td><td><b>{this.state.project.dorshro_rakam}</b></td><td><b>{this.state.project.dorshro_samagriko_pariman}</b></td><td><b>{this.state.project.dorshro_kaifiyet}</b></td>
                                        </tr>
                                        <tr>
                                            <td>तेस्रो</td><td><b>{this.state.project.teshro_miti}</b></td><td><b>{this.state.project.teshro_rakam}</b></td><td><b>{this.state.project.teshro_samagriko_pariman}</b></td><td><b>{this.state.project.teshro_kaifiyet}</b></td>
                                        </tr>
                                        <tr>
                                            <td>जम्मा</td><td><b>{this.state.project.jamma_miti}</b></td><td><b>{this.state.project.jamma_rakam}</b></td><td><b>{this.state.project.jamma_samagriko_pariman}</b></td><td><b>{this.state.project.jamma_kaifiyet}</b></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ६) आयोजना मर्मत सम्भार सम्बन्धि व्यवस्था
                                </div>
                                <div className="title">
                                    <table id="simple">
                                        <tr>
                                            <td><span>क ) आयोजना मर्मत सम्भारको जिम्मा लिने/समिति संस्थाको नाम :</span></td>
                                            <td><b>{this.state.project.yojana_marmat_jimma_line_samiti}</b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ख ) मर्मत सम्भारको सम्भावित श्रौत (छ छैन खुलाउने ) :</span></td>
                                            <td><b>{this.state.project.marmat_sambhabit_srot}</b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ग ) जनश्रमदान : </span></td>
                                            <td><b>{this.state.project.janasramdan}</b></td>
                                        </tr>
                                        <tr>
                                            <td><span>घ ) सेवा शुल्क : </span></td>
                                            <td><b>{this.state.project.sewa_sulka}</b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ङ ) दस्तुर चन्दाबाट : </span></td>
                                            <td><b>{this.state.project.dastur_chandabata}</b></td>
                                        </tr>
                                        <tr>
                                            <td><span> च ) अन्य केही भए : </span></td>
                                            <td><b>{this.state.project.anne_kehi_vaye}</b></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="sarta">
                            <div id="title">
                                सम्झौताका शर्तहरु
                            </div>
                            <div id="head">उपभोत्ता समितिको जिम्मेवारी तथा पालना गर्नुपर्ने शर्तहरु :</div>
                            <ol>
                                <li>आयोजना शुरु मिति <b>{this.state.project.aayojana_suru_miti}</b> देखि शुरु गरी मिति <b>{this.state.project.aayojana_ante_miti}</b> सम्ममा पुरा गर्नु पर्नेछ ।</li>
                                <li>प्राप्त रकम तथा निर्माण सामाग्री सम्बन्धित आयोजनाको उद्देश्यका लागि मात्र प्रयोग गर्नुपर्नेछ ।</li>
                                <li>नगदी, जिन्सी सामानको प्राप्ती, खर्च र बाँकी तथा आयोजनाको प्रगति विवरण राख्नु पर्नेछ ।</li>
                                <li>आम्दानी खर्चको विवरण र कार्यप्रगतिको जानकारी उपभोक्ता समूहमा छलफल गरी अर्को किस्ता माग गर्नु पर्नेछ ।</li>
                                <li>आयोजनाको कुल लागत भन्दा घटी लागतमा आयोजना सम्पन्न भएको अवस्थामा सो मुताविकनै अनुदान र श्रमदानको प्रतिशत निर्धारण गरी भुक्तानी लिनु पर्नेछ ।</li>
                                <li>उपभोक्ता समितिले प्राविधिकको राय परामर्श एवं निर्देशन अनुरुप काम गर्नु पर्नेछ । </li>
                                <li>उपभोक्ता समितिले आयोजनासंग सम्बन्धित विल, भरपाईहरु, डोर हाजिरी फारामहरु, जिन्सी नगदी खाताहरु, समिति÷समुहको निर्णय पुस्तिका आदि कागजातहरु कार्यालयले मागेको बखत उपलब्ध गराउनु पर्नेछ र त्यसको लेखापरीक्षण गराउनुपर्नेछ ।</li>
                                <li>कुनै सामाग्री खरिद गर्दा आन्तरिक राजश्व कार्यालयबाट स्थायी लेखा नम्बर र मूल्य अभिवृद्धि कर दर्ता प्रमाण पत्र प्राप्त व्यक्ति वा फर्म संस्था वा कम्पनीबाट खरिद गरी सोही अनुसारको विल भरपाई आधिकारीक व्यक्तिबाट प्रमाणित गरी पेश गर्नु पर्नेछ । </li>
                                <li>मूल्य अभिवृद्धि कर लाग्ने बस्तु तथा सेवा खरिद गर्दा रु २००००  भन्दा बढी मूल्यको सामाग्रीमा अनिवार्य रुपमा मूल्य अभिवृद्धि कर दर्ता प्रमाणपत्र प्राप्त गरेका ब्यक्ति फर्म संस्था वा कम्पनीबाट खरिद गर्नु पर्नेछ । साथै उक्त विलमा उल्लिखित मु.अ. कर बाहेकको रकममा १.५ प्रतिशत अग्रीम आयकर बापत कर कट्टी गरी बाँकी रकम मात्र सम्बन्धित सेवा प्रदायकलाई भुक्तानी हुनेछ । रु २०००० भन्दा कम मूल्यको सामाग्री खरिदमा पान नम्बर लिएको व्यक्ति वा फर्मबाट खरिद गर्नु पर्नेछ । अन्यथा खरिद गर्ने पदाधिकारी स्वयम् जिम्मेवार हुनेछ ।</li>
                                <li>डोजर रोलर लगायतका मेशिनरी सामान भाडामा लिएको एवम् घर बहालमा लिई विल भरपाई पेश भएको अवस्थामा १० प्रतिशत घर भाडा कर एवम् बहाल कर तिर्नु पर्नेछ । </li>
                                <li>रशिक्षकले पाउने पारिश्रमिक एवम् सहभागीले पाउने भत्तामा प्रचलित नियमानुसार कर लाग्नेछ । </li>
                                <li>निर्माण कार्यको हकमा शुरु लागत अनुमानका कुनै आईटमहरुमा परिवर्तन हुने भएमा अधिकार प्राप्त व्यक्ति वा कार्यालयबाट लागत अनुमान संशोधन गरे पश्चात् मात्र कार्य गराउनुपर्नेछ । यसरी लागत अनुमान संशोधन नगरी कार्य गरेमा उपभोक्ता समिति नै जिम्मेवार हुनेछ । </li>
                                <li>उपभोक्ता समितिले काम सम्पन्न गरिसकेपछि बाँकी रहन गएका खप्ने सामानहरु मर्मत सम्भार समिति गठन भएको भए सो समितिलाई र सो नभए गाउँ कार्यपालिका कार्यालयलाई बुझाउनु पर्नेछ । तर मर्मत सम्भार समितिलाई बुझाएको सामानको एक प्रति गाउँ कार्यपालिका कार्यालयलाई जानकारीको लागि बुझाउनु पर्नेछ । </li>
                                <li>सम्झौता बमोजिम आयोजना सम्पन्न भएपछि अन्तिम भुक्तानीको लागि कार्यसम्पन्न प्रतिवेदन, नापी किताब, प्रमाणित विल भरपाई, योजनाको फोटो, सम्बन्धित उपभोक्ता समितिले आयोजना सञ्चालन गर्दा भएको आय व्ययको अनुमोदन सहितको निर्णय, उपभोक्ता भेलाबाट भएको सार्वजनिक लेखा परीक्षणको निर्णयको प्रतिलिपि तथा सम्बन्धित आयोजना सञ्चालन भएको वडा कार्यालयको सिफारिश सहित अन्तिम किस्ता भुक्तानीको लागि निवेदन पेश गर्नु पर्नेछ । </li>
                                <li>आयोजना सम्पन्न भए पछि गाउँ कार्यपालिका कार्यालयबाट जाँचपास गरी फरफारकको प्रमाणपत्र लिनु पर्नेछ । साथै आयोजनाको मर्मत सम्भारको व्यवस्था सम्बन्धित उपभोक्ताहरुले नै गर्नु पर्नेछ । </li>
                                <li>आयोजना कार्यान्वयन गर्ने उपभोक्ता समितिले आयोजनाको भौतिक तथा वित्तीय प्रगति प्रतिवेदन गाउँ कार्यपालिका कार्यालयले तोके बमोजिमको ढाँचामा कार्यालयमा पेश गर्नुपर्नेछ । </li>
                                <li>आयोजनाको दिगो सञ्चालन तथा मर्मत सम्भारको व्यवस्था गर्नु पर्नेछ । </li>
                                <li>आयोजनाको सबै काम उपभोक्ता समिति ÷ समुहको निर्णयानुसार गर्नु गराउनु पर्नेछ । </li>
                                <li>आयोजनाको कुल लागत रु ३ लाख भन्दा बढी भएका आयोजनाहरुको हकमा उपभोक्ता समितिले काम शुरु गर्नु भन्दा अगावै आयोजनाकोनाम, लागत, लागत साझेदारीको अवस्था, काम शुरु र सम्पन्न गर्नु पर्ने अवधि समेत देखिने गरी गाउँ कार्यपालिका कार्यालयले तोके बमोजिमको ढाँचामा आयोजना सूचना पाटी आयोजना स्थलमा राख्नु पर्नेछ । </li>
                            </ol>
                            <div id="head">गाउँ कार्यपालिका कार्यालयको जिम्मेवारी तथा पालना गरिने शर्तहरु : </div>
                            <ol>
                                <li>आयोजनाको बजेट, उपभोक्ता समितिको काम कर्तव्य तथा अधिकार, खरिद, लेखाङ्कन, प्रतिवेदन आदि विषयमा उपभोक्ता समितिका पदाधिकारीहरुलाई अनुशिक्षण कार्यक्रम सञ्चालन गरिनेछ ।</li>
                                <li>आयोजनामा आवश्यक प्राविधिक सहयोग कार्यालयबाट उपलब्ध गराउन सकिने अवस्थामा गराईनेछ र नसकिने अवस्था भएमा स्वीकृत लागत अनुमान मा उल्लेख भए बमोजिम उपभोक्ता समितिले बाह्य बजारबाट सेवा परामर्श अन्तर्गत सेवा लिन सक्नेछ ।</li>
                                <li>आयोजनाको प्राविधिक सुपरिवेक्षणका लागि कार्यालयको तर्फबाट प्राविधिक खटाइनेछ । उपभोक्ता समितिबाट भएको कामको नियमित सुपरिवेक्षण गर्ने जिम्मेवारी निज प्राविधिकको हुनेछ ।</li>
                                <li>पेश्की लिएर लामो समयसम्म आयोजना सञ्चालन नगर्ने उपभोक्ता समितिलाई कार्यालयले नियम अनुसार कारबाही गर्नेछ ।</li>
                                <li>श्रममुलक प्रविधिबाट कार्य गराउने गरी लागत अनुमान स्वीकृत गराई सोही बमोजिम सम्झौता गरी मेशिनरी उपकरणको प्रयोगबाट कार्य गरेको पाइएमा त्यस्तो उपभोक्ता समिति सँग सम्झौता रद्ध गरी उपभोक्ता समितिलाई भुक्तानी गरिएको रकम मुल्यांकन गरी बढी भएको रकम सरकारी बाँकी सरह असुल उपर गरिनेछ ।</li>
                                <li>आयोजना सम्पन्न भएपछि कार्यालयबाट जाँच पास गरी फरफारक गर्नु पर्नेछ ।</li>
                                <li>आवश्यक कागजात संलग्न गरी भुक्तानी उपलब्ध गराउन सम्बन्धित उपभोक्ता समितिबाट अनुरोध भई आएपछि उपभोक्ता समितिको बैंक खातामा भुक्तानी दिइनेछ ।</li>
                                <li>यस सम्झौतामा उल्लेख नभएका अन्य कुराहरुमा प्रचलित कानून बमोजिम हुनेछ ।</li>
                            </ol>
                            <div id="head">माथि उल्लेखित भए बमोजिमका शर्तहरु पालना गर्न हामी निम्न पक्षहरु मन्जुर गर्दछौ ।</div>
                            <br/><br/><div id="sign">
                            <div id="left">
                                <div id="title">
                                    उपभोक्ता समितिको तर्फबाट
                                </div>
                                <table id="agree">
                                    <tr>
                                        <td>दस्तखत :</td><td></td>
                                    </tr>
                                    <tr>
                                        <td>नाम थर :</td><td><b>{this.state.project.adaxya_name}</b></td>
                                    </tr>
                                    <tr>
                                        <td>पद :</td><td><b>अध्यक्ष</b></td>
                                    </tr>
                                    <tr>
                                        <td>ठेगाना :</td><td><b>{this.state.project.adaxya_thegana}</b></td>
                                    </tr>
                                    <tr>
                                        <td>सम्पर्क नम्बर :</td><td><b>{this.state.project.adaxyako_number}</b></td>
                                    </tr>
                                    <tr>
                                        <td>मिति :</td><td><b>{this.state.project.aayojana_suru_miti}</b></td>
                                    </tr>
                                </table>
                            </div>
                            <div id="right">
                                <div id="title">
                                    गाउँकार्यपालिका कार्यालयको तर्फबाट
                                </div>
                                <table id="agree">
                                    <tr>
                                        <td>दस्तखत : </td><td></td>
                                    </tr>
                                    <tr>
                                        <td>नाम थर :</td><td><b>{this.state.project.pramukha_prashasakiyeko_name}</b></td>
                                    </tr>
                                    <tr>
                                        <td>पद :</td><td><b>प्रमुख प्रशासकीयक अधिकृत</b></td>
                                    </tr>
                                    <tr>
                                        <td>ठेगाना :</td><td><b>थासाङ-२, कोबाङ</b></td>
                                    </tr>
                                    <tr>
                                        <td>सम्पर्क नम्बर :</td><td><b>{this.state.project.pramukha_prashasakiyeko_number}</b></td>
                                    </tr>
                                    <tr>
                                        <td>मिति :</td><td><b>{this.state.project.aayojana_suru_miti}</b></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}