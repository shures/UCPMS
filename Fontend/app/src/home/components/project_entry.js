import React from "react";
import './../css/project_entry.css';
import './../css/agreement_print_preview.css';
import {Header} from "./header";
// export class Project_entry extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             upabhokta_samitiko_naam : '',
//             upabokta_samitiko_thegana : '',
//             aayojanako_naam : '',
//             aayojanako_sthal : '',
//             aayojanako_udeshya : '',
//             aayojana_suru_miti : '',
//             lagat_anuman : '',
//             lagat_behorne_karyalay :'',
//             lagat_behorne_upobhokta_samiti :'',
//             lagat_behorne_anne :'',
//             bastugat_anudan_sangbata_samagriko_naam :' ',
//             bastugat_anudan_sangbata_ekai :'',
//             bastugat_anudan_pradeshbata_samagriko_naam :' ',
//             bastugat_anudan_pradeshbata_ekai :'',
//             bastugat_anudan_sthaniyebata_samagriko_naam :'',
//             bastugat_anudan_sthaniyebata_ekai :'',
//             bastugat_anudan_gairasarakaribata_samagriko_naam :'',
//             bastugat_anudan_gairasarakaribata_ekai :'',
//             bastugat_anudan_bideshbata_samagriko_naam :'',
//             bastugat_anudan_bideshbata_ekai :'',
//             bastugat_anudan_upobhoktasamitibata_samagriko_naam :'',
//             bastugat_anudan_upokhoktasamitibata_ekai :'',
//             bastugat_anudan_anne_samagriko_naam :'',
//             bastugat_anudan_anne_ekai :'',
//             aayojana_labhanbit_gharpariwar_sangkhya : '',
//             aayojana_labhanbit_janasankhya : '',
//             aayojana_labhanbit_sangathit_sangkhya : '',
//             aayojana_labhanbit_anne : '',
//             gathan_vayeko_miti :'',
//             adaxya_name: '',
//             adaxya_thegana : '',
//             adaxya_na_number : '',
//             adaxya_jilla : 'मुस्ताङ',
//             sachib_name: '',
//             sachib_thegana : '',
//             sachib_na_number : '',
//             sachib_jilla : 'मुस्ताङ',
//             kosha_name: '',
//             kosha_thegana : '',
//             kosha_na_number : '',
//             kosha_jilla : 'मुस्ताङ',
//             sadasshya1_name: '',
//             sadasshya1_thegana : '',
//             sadasshya1_na_number : '',
//             sadasshya1_jilla : 'मुस्ताङ',
//             sadasshya2_name: '',
//             sadasshya2_thegana : '',
//             sadasshya2_na_number : '',
//             sadasshya2_jilla : 'मुस्ताङ',
//             sadasshya3_name: '',
//             sadasshya3_thegana : '',
//             sadasshya3_na_number : '',
//             sadasshya3_jilla : 'मुस्ताङ',
//             sadasshya4_name: '',
//             sadasshya4_thegana : '',
//             sadasshya4_na_number : '',
//             sadasshya4_jilla : 'मुस्ताङ',
//             sadasshya5_name: '',
//             sadasshya5_thegana : '',
//             sadasshya5_na_number : '',
//             sadasshya5_jilla : 'मुस्ताङ',
//             sadasshya6_name: '',
//             sadasshya6_thegana : '',
//             sadasshya6_na_number : '',
//             sadasshya6_jilla : 'मुस्ताङ',
//             sadasshya7_name: '',
//             sadasshya7_thegana : '',
//             sadasshya7_na_number : '',
//             sadasshya7_jilla : 'मुस्ताङ',
//             sadasshya8_name: '',
//             sadasshya8_thegana : '',
//             sadasshya8_na_number : '',
//             sadasshya8_jilla : 'मुस्ताङ',
//             upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya :'',
//             anubhav_barsa : '',
//             pratham_miti : '',
//             pratham_rakam : '',
//             pratham_samagriko_pariman : '',
//             pratham_kaifiyet : '',
//             dorshro_miti : '',
//             dorshro_rakam : '',
//             dorshro_samagriko_pariman : '',
//             dorshro_kaifiyet : '',
//             teshro_miti : '',
//             teshro_rakam : '',
//             teshro_samagriko_pariman : '',
//             teshro_kaifiyet : '',
//             jamma_miti : '',
//             jamma_rakam : '',
//             jamma_samagriko_pariman : '',
//             jamma_kaifiyet : '',
//             yojana_marmat_jimma_line_samiti :'',
//             marmat_sambhabit_srot :'',
//             janasramdan :'',
//             sewa_sulka : '',
//             dastur_chandabata : '',
//             anne_kehi_vaye : '',
//
//             aayojana_ante_miti :'',
//             aayojana_hune_woda:'',
//             pramukha_prashasakiyeko_name:'',
//             pramukha_prashasakiyeko_number:'',
//             adaxyako_number:'',
//             kaifiyet:'',
//         }
//     }
//     render() {
//         return (
//             <div id='project_entry'>
//                 <Header/>
//                 <div id="container">
//                     <div id="title">
//                         योजना सम्झौता प्रविष्टि
//                     </div>
//                     <div id="entry">
//                         <div className="title">
//                             <span>१) सम्झौता गर्ने पक्ष र आयोजना </span>
//                             <div className="sub_title">
//                                 <span>क) उपभोक्ता समितिको विवरण </span>
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>नाम : </span></td>
//                                         <td><input id="long_width" type="text" placeholder="नाम"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ठेगाना :</span></td>
//                                         <td><input type="text" placeholder="ठेगाना"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ख) आयोजनाको विवरण </span>
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>नाम : </span></td>
//                                         <td><input id="long_width" type="text" placeholder="नाम"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>आयोजना स्थल :</span></td>
//                                         <td><input type="text" placeholder="आयोजना स्थल"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>उदेश्य :</span></td>
//                                         <td><input type="text" placeholder="उदेश्य"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ग) आयोजनाको लाभान्वित हुने</span>
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>घरपरियार संख्या : </span></td>
//                                         <td><input type="text" placeholder="कार्यालय"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>जनसंख्या :</span></td>
//                                         <td><input type="text" placeholder="उपभोक्ता समिति"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>संगठित संख्या :</span></td>
//                                         <td><input type="text" placeholder="अन्य"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>अन्य :</span></td>
//                                         <td><input type="text" placeholder="अन्य"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                         <div className="title">
//                             <span>२) आयोजना लागत सम्बन्धि विवरण </span>
//                             <div className="sub_title">
//                                 <span>क) लागत अनुमान रु : </span>
//                                 <input type="text" placeholder="लागत अनुमान रु "/>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ख) लागत व्यहोर्ने स्रोतहरु</span>
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>कार्यालय : </span></td>
//                                         <td><input type="text" placeholder="कार्यालय"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>उपभोक्ता समिति :</span></td>
//                                         <td><input type="text" placeholder="उपभोक्ता समिति"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>अन्य :</span></td>
//                                         <td><input type="text" placeholder="अन्य"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ग) बस्तुगत अनुदानको विवरण</span>
//                                 {/*<table id="border_collapse" border='1'>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>क्र.सं. </span></td>*/}
//                                 {/*        <td><span>बस्तुगत अनुदानको विवरण</span></td>*/}
//                                 {/*        <td><span>सामाग्रीको नाम</span></td>*/}
//                                 {/*        <td><span>एकाई</span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>1</span></td>*/}
//                                 {/*        <td><span>संघबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>2</span></td>*/}
//                                 {/*        <td><span>प्रदेशबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>3</span></td>*/}
//                                 {/*        <td><span>स्थानीय तहबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>4</span></td>*/}
//                                 {/*        <td><span>गैह्रसरकारी तहबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>5</span></td>*/}
//                                 {/*        <td><span>विदेशी दातृ निकायबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>6</span></td>*/}
//                                 {/*        <td><span>उपभोक्ता समितिबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*    <tr>*/}
//                                 {/*        <td><span>7</span></td>*/}
//                                 {/*        <td><span>अन्य निकायबाट</span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*        <td><span></span></td>*/}
//                                 {/*    </tr>*/}
//                                 {/*</table>*/}
//                             </div>
//                         </div>
//                         <div className="title">
//                             <span>३) उपभोक्ता समिति/गैरसरकारी सघसंस्था/समुदायमा आधारित संस्था सम्बन्धि विवरण </span>
//                             <div className="sub_title">
//                                 <span>क) गठन भएको मिति : </span>
//                                 <input type="text" placeholder="गठन भएको मिति"/>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ख) पदाधिकारीहरुको नाम </span>
//                                 <div className="sub_sub_title">
//                                     <table border='1' id="border_collapse">
//                                         <tr>
//                                             <td><span>क्र.सं.</span></td>
//                                             <td><span>पद</span></td>
//                                             <td><span>नाम,थर</span></td>
//                                             <td><span>ठेगाना</span></td>
//                                             <td><span>ना.प्र.प.नं.</span></td>
//                                             <td><span>जिल्ला</span></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>1</span></td>
//                                             <td><span>अध्यक्ष</span></td>
//                                             <td><input type="text" placeholder="अध्यक्षको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="अध्यक्षको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="अध्यक्षको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="अध्यक्षको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>2</span></td>
//                                             <td><span>सचिव</span></td>
//                                             <td><input type="text" placeholder="सचिवको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="सचिवको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="सचिवको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="सचिवको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>3</span></td>
//                                             <td><span>कोषादध्य</span></td>
//                                             <td><input type="text" placeholder="कोषादध्यको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="कोषादध्यको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="कोषादध्यको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="कोषादध्यको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>4</span></td>
//                                             <td><span>सदस्य</span></td>
//                                             <td><input type="text" placeholder="सदस्यको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="सदस्यको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>5</span></td>
//                                             <td><span>सदस्य</span></td>
//                                             <td><input type="text" placeholder="सदस्यको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="सदस्यको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>6</span></td>
//                                             <td><span>सदस्य</span></td>
//                                             <td><input type="text" placeholder="सदस्यको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="सदस्यको जिल्ला"/></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>7</span></td>
//                                             <td><span>सदस्य</span></td>
//                                             <td><input type="text" placeholder="सदस्यको नाम,थर"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ठेगाना"/></td>
//                                             <td><input type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
//                                             <td><input type="text" placeholder="सदस्यको जिल्ला"/></td>
//                                         </tr>
//                                     </table>
//                                 </div>
//                             </div>
//                             <div className="sub_title">
//                                 <span>ख) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या : </span>
//                                 <input type="text" placeholder="नाम"/>
//                             </div>
//                         </div>
//                         <div className="title">
//                             <span>४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : </span>
//                             <input type="text" placeholder="नाम"/>
//                         </div>
//                         <div className="title">
//                             <span>५) उपभोक्ता समिति/समुदायका आधारित संघ/गैरसरकारी संस्थाले प्राप्त गर्ने किस्ताको विवरण </span>
//                             {/*<div className="sub_title">*/}
//                             {/*    <table border='1' id="border_collapse">*/}
//                             {/*        <tr>*/}
//                             {/*            <td><span>किस्ताको क्रम</span></td>*/}
//                             {/*            <td><span>मिति</span></td>*/}
//                             {/*            <td><span>किस्ता रकम</span></td>*/}
//                             {/*            <td><span>निर्माण सामाग्री परिमाण</span></td>*/}
//                             {/*            <td><span>कैफियत</span></td>*/}
//                             {/*        </tr>*/}
//                             {/*        <tr>*/}
//                             {/*            <td><span>प्रथम</span></td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*        </tr>*/}
//                             {/*        <tr>*/}
//                             {/*            <td><span>दोस्रो</span></td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*        </tr>*/}
//                             {/*        <tr>*/}
//                             {/*            <td><span>तेस्रो</span></td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*        </tr>*/}
//                             {/*        <tr>*/}
//                             {/*            <td><span>जम्मा</span></td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*            <td><input type="text"/> </td>*/}
//                             {/*        </tr>*/}
//                             {/*    </table>*/}
//                             {/*</div>*/}
//                         </div>
//                         <div className="title">
//                             <span>६) आयोजना मर्मत सम्भार सम्बन्धि व्यवस्था </span>
//                             <div className="sub_title">
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>क) आयोजना मर्मत सम्भारको जिम्मा लिने/समिति संस्थाको नाम : </span></td>
//                                         <td> <input type="text" placeholder="संस्थाको नाम"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ख) मर्मत सम्भारको सम्भावित श्रोत  (छ छैन खुलाउने) : </span></td>
//                                         <td><input type="text" placeholder="मर्मत सम्भारको सम्भावित श्रोत"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ग) जनश्रमदान : </span></td>
//                                         <td><input type="text" placeholder="जनश्रमदान"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>घ) सेवा शुल्क : </span></td>
//                                         <td><input type="text" placeholder="सेवा शुल्क"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ङ) दस्तुर चन्दाबाट : </span></td>
//                                         <td><input type="text" placeholder="दस्तुर चन्दाबाट"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>च) अन्य केही भए : </span></td>
//                                         <td><input type="text" placeholder="अन्य केही भए"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                         <div className="title">
//                             <span>७) अन्य  </span>
//                             <div className="sub_title">
//                                 <table id="simple">
//                                     <tr>
//                                         <td><span>क) प्रमुख प्रशासकीयक अधिकृतको नाम, थर : </span></td>
//                                         <td><input type="text" placeholder="नाम, थर"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ख) प्रमुख प्रशासकीयक अधिकृतको सम्पर्क नं. : </span></td>
//                                         <td><input type="text" placeholder="सम्पर्क नं."/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ग) आयोजनाको अन्तिम मिति. : </span></td>
//                                         <td><input type="text" placeholder="मिति"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>घ) आयोजना हुने वडा नं. : </span></td>
//                                         <td><input type="text" placeholder="जस्तै 5"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>ङ) समितिको अध्यक्षको सम्पर्क नं. </span></td>
//                                         <td><input type="text" placeholder="जस्तै 9847742665"/></td>
//                                     </tr>
//                                     <tr>
//                                         <td><span>च) कैफियत : </span></td>
//                                         <td><input type="text" placeholder="कैफियत"/></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="controls">
//                         <button>सुरक्षित गर्नुहोस</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export class AgreementPrintPreview extends React.Component{
    render() {
        return (
            <div id="agreement_print_preview">
                <Header/>
                <div id="container">
                    <div id='title'>
                       <button>प्रिन्ट गर्नुहोस</button>
                    </div>
                    <div id="agreement_a4">
                        <div id="agreement_header">
                            <img src={require('./../files/emblem_logo.png').default}/>
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
                                                <td><b>अन्नपूर्ण हिमाल पदमार्ग निर्माण उपभोक्ता समिति</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) ठेगाना :</span></td>
                                                <td><b>थासाङ-2, कोबाङ</b></td>
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
                                                <td><b>जन आदर्शमा वाल निर्माण तथा समक्षण </b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) आयोजना स्थल :</span></td>
                                                <td><b>थासाङ-2, कोबाङ</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) उदेश्य :</span></td>
                                                <td><b>जन आदर्शमा बाल निर्माण तथा समंक्षण गर्ने</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>४) आयोजना सुरु हुने मिति :</span></td>
                                                <td><b>२०३३/२४/५</b></td>
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
                                        क) लागत अनुमान रु : <b>१२३४५६</b>
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
                                                <td><b>३५३४५३५४</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) उपभोत्ता समिति :</span></td>
                                                <td><b>३४३४३४३४</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) अन्य</span></td>
                                                <td><b></b></td>
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
                                                <td>१</td><td>संघबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>२</td><td>प्रदेशबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>३</td><td>स्थानीय तहबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>४</td><td>गैह्रसरकारी तहबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>५</td><td>विदेशी दातृ निकायबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>६</td><td>उपभोक्ता समितिबाट</td><td><b></b></td><td><b></b></td>
                                            </tr>
                                            <tr>
                                                <td>६</td><td>अन्य निकायबाट</td><td><b></b></td><td><b></b></td>
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
                                                <td><b>६७</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>२) जनसंख्या :</span></td>
                                                <td><b>४५६</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) संगठित संख्या :</span></td>
                                                <td><b>8</b></td>
                                            </tr>
                                            <tr>
                                                <td><span>३) अन्य :</span></td>
                                                <td><b></b></td>
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
                                        क) गठन भएको मिति : <b>२०१२/२३/३४</b>
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        ख) पदाघिकारीहरुको नाम
                                    </div>
                                    <div className="sub-title">
                                        {/*<table border="1">*/}
                                        {/*    <tr>*/}
                                        {/*        <th>क्र.स.</th><td>पद</td> <td>नाम थर</td> <td>ठेगाना</td> <td>नना.प्र.प.नं </td> <td>जिल्ला</td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>१</th><td>अध्यक्ष</td><td><b>{this.state.data[3].adaxya_name}</b></td><td><b>{this.state.data[3].adaxya_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].adaxya_thegana }</b></td><td><b>{this.state.data[3].adaxya_na_number}</b></td><td><b>{this.state.data[3].adaxya_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>२</th><td>सचिव</td><td><b>{this.state.data[3].sachib_name}</b></td><td><b>{this.state.data[3].sachib_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sachib_thegana }</b></td><td><b>{this.state.data[3].sachib_na_number}</b></td><td><b>{this.state.data[3].sachib_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>३</th><td>कोषादध्क्ष</td><td><b>{this.state.data[3].kosha_name}</b></td><td><b>{this.state.data[3].kosha_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].kosha_thegana }</b></td><td><b>{this.state.data[3].kosha_na_number}</b></td><td><b>{this.state.data[3].kosha_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>४</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya1_name}</b></td><td><b>{this.state.data[3].sadasshya1_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya1_thegana}</b></td><td><b>{this.state.data[3].sadasshya1_na_number}</b></td><td><b>{this.state.data[3].sadasshya1_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>५</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya2_name}</b></td><td><b>{this.state.data[3].sadasshya2_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya2_thegana}</b></td><td><b>{this.state.data[3].sadasshya2_na_number}</b></td><td><b>{this.state.data[3].sadasshya2_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>६</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya3_name}</b></td><td><b>{this.state.data[3].sadasshya3_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya3_thegana}</b></td><td><b>{this.state.data[3].sadasshya3_na_number}</b></td><td><b>{this.state.data[3].sadasshya3_jilla}</b></td>*/}
                                        {/*    </tr>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>७</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya4_name}</b></td><td><b>{this.state.data[3].sadasshya4_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya4_thegana}</b></td><td><b>{this.state.data[3].sadasshya4_na_number}</b></td><td><b>{this.state.data[3].sadasshya4_jilla}</b></td>*/}
                                        {/*    </tr>*/}

                                        {/*    {this.state.data[3].sadasshya5_name!=="" ?*/}
                                        {/*        <tr>*/}
                                        {/*            <th>८</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya5_name}</b></td><td><b>{this.state.data[3].sadasshya5_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya5_thegana}</b></td><td><b>{this.state.data[3].sadasshya5_na_number}</b></td><td><b>{this.state.data[3].sadasshya5_jilla}</b></td>*/}
                                        {/*        </tr> : null}*/}

                                        {/*    {this.state.data[3].sadasshya6_name!=="" ?*/}
                                        {/*        <tr>*/}
                                        {/*            <th>९</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya6_name}</b></td><td><b>{this.state.data[3].sadasshya6_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya6_thegana}</b></td><td><b>{this.state.data[3].sadasshya6_na_number}</b></td><td><b>{this.state.data[3].sadasshya6_jilla}</b></td>*/}
                                        {/*        </tr> : null}*/}

                                        {/*    {this.state.data[3].sadasshya7_name!=="" ?*/}
                                        {/*        <tr>*/}
                                        {/*            <th>१०</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya7_name}</b></td><td><b>{this.state.data[3].sadasshya7_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya7_thegana}</b></td><td><b>{this.state.data[3].sadasshya7_na_number}</b></td><td><b>{this.state.data[3].sadasshya1_jilla}</b></td>*/}
                                        {/*        </tr> : null}*/}

                                        {/*    {this.state.data[3].sadasshya8_name!=="" ?*/}
                                        {/*        <tr>*/}
                                        {/*            <th>११</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya8_name}</b></td><td><b>{this.state.data[3].sadasshya8_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya8_thegana}</b></td><td><b>{this.state.data[3].sadasshya8_na_number}</b></td><td><b>{this.state.data[3].sadasshya8_jilla}</b></td>*/}
                                        {/*        </tr>:null}*/}
                                        {/*</table>*/}
                                    </div>
                                </div>
                                <div className="title">
                                    <div id="name">
                                        क) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या  : <b>२३</b>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : <b>३</b>
                                </div>
                            </div>
                            <div className="item">
                                <div id="name">
                                    ५) उपभोक्ता समिति/समुदायका आधारित संध/गैरसरकारी स‌स्थाले प्राप्त गर्ने किस्ताको विवरण ।
                                </div>
                                <div className="title">
                                    {/*<table border="1">*/}
                                    {/*    <tr>*/}
                                    {/*        <th>किस्ताको क्रम</th><th>मिति</th><th>किस्ता रकम</th><th>निर्माण सामग्री परिमाण</th><th>कैफियत</th>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <td>प्रथम</td><td><b>{this.state.data[1].pratham_miti}</b></td><td><b>{this.state.data[1].pratham_kistarakam}</b></td><td><b>{this.state.data[1].pratham_pariman}</b></td><td><b>{this.state.data[1].pratham_kaifiyet}</b></td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <td>दोस्रो</td><td><b>{this.state.data[1].doshro_miti}</b></td><td><b>{this.state.data[1].doshro_kistarakam}</b></td><td><b>{this.state.data[1].doshro_pariman}</b></td><td><b>{this.state.data[1].doshro_kaifiyet}</b></td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <td>तेस्रो</td><td><b>{this.state.data[1].teshro_miti}</b></td><td><b>{this.state.data[1].teshro_kistarakam}</b></td><td><b>{this.state.data[1].teshro_pariman}</b></td><td><b>{this.state.data[1].teshro_kaifiyet}</b></td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <td>जम्मा</td><td><b>{this.state.data[1].jamma_miti}</b></td><td><b>{this.state.data[1].jamma_kistarakam}</b></td><td><b>{this.state.data[1].jamma_pariman}</b></td><td><b>{this.state.data[1].jamma_kaifiyet}</b></td>*/}
                                    {/*    </tr>*/}
                                    {/*</table>*/}
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
                                            <td><b></b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ख ) मर्मत सम्भारको सम्भावित श्रौत (छ छैन खुलाउने ) :</span></td>
                                            <td><b></b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ग ) जनश्रमदान : </span></td>
                                            <td><b></b></td>
                                        </tr>
                                        <tr>
                                            <td><span>घ ) सेवा शुल्क : </span></td>
                                            <td><b></b></td>
                                        </tr>
                                        <tr>
                                            <td><span>ङ ) दस्तुर चन्दाबाट : </span></td>
                                            <td><b></b></td>
                                        </tr>
                                        <tr>
                                            <td><span> च ) अन्य केही भए : </span></td>
                                            <td><b></b></td>
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
                                <li>आयोजना शुरु मिति <b></b> देखि शुरु गरी मिति <b></b> सम्ममा पुरा गर्नु पर्नेछ ।</li>
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
                                        <td>नाम थर :</td><td>श्री हेलम्बु तामाङ</td>
                                    </tr>
                                    <tr>
                                        <td>पद :</td><td>अध्यक्ष</td>
                                    </tr>
                                    <tr>
                                        <td>ठेगाना :</td><td>थासाङ-६, जोमसोम</td>
                                    </tr>
                                    <tr>
                                        <td>सम्पर्क नम्बर :</td><td>७७५५४४६४३६५४६</td>
                                    </tr>
                                    <tr>
                                        <td>मिति :</td><td>४५५४/५४५/५४/</td>
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
                                        <td>नाम थर :</td><td>श्री सन्तोष कुमार खत्री</td>
                                    </tr>
                                    <tr>
                                        <td>पद :</td><td><b>प्रमुख प्रशासकीयक अधिकृत</b></td>
                                    </tr>
                                    <tr>
                                        <td>ठेगाना :</td><td>थासाङ-२, कोबाङ</td>
                                    </tr>
                                    <tr>
                                        <td>सम्पर्क नम्बर :</td><td>९८७६६७७७७७७</td>
                                    </tr>
                                    <tr>
                                        <td>मिति :</td><td>५४५४३५/५४३५/५४३५४</td>
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