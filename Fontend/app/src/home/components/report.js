import React from "react";
import './../css/report.css';
import {Header} from "./header";
export class Report extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id='report'>
                <Header/>
                <div id="container">
                    <div id="title">
                        योजनाहरुको प्रतिवेदन
                    </div>
                    <div id="project">
                        <div id="search_options">
                            <div className="item">
                                <span>आ.व.</span>
                                <input type="text" placeholder="आ.व."/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको नाम</span>
                                <input type="text" placeholder="आयोजनाको नाम"/>
                            </div>
                            <div className="item">
                                <span>वडा नं.</span>
                                <input type="text" placeholder="वडा नं."/>
                            </div>
                            <div className="item">
                                <span>आयोजनाको शुरु मिति</span>
                                <input type="text" placeholder="आयोजनाको शुरु मिति"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा माथि</span>
                                <input type="text" placeholder="आयोजना बजेट भन्दा माथि"/>
                            </div>
                            <div className="item">
                                <span>आयोजना बजेट भन्दा तल</span>
                                <input type="text" placeholder="आयोजना बजेट भन्दा तल"/>
                            </div>
                            <div className="item">
                                <span>अध्यक्षको नाम थर</span>
                                <input type="text" placeholder="अध्यक्षको नाम थर"/>
                            </div>
                            <div className="item">
                                <span>प्रमुख प्रशासकीय अधिकृत</span>
                                <input type="text" placeholder="प्रमुख प्रशासकीय अधिकृत"/>
                            </div>
                        </div>
                        <div id="controls">
                            <button><img src={require('./../../icons/search.svg').default}/> खोज्नुहोस</button>
                            <button><img src={require('./../../icons/print_white.svg').default}/>प्रिन्ट गर्नुहोस</button>
                            <button><img src={require('./../../icons/xls-file.svg').default}/>एक्सेलमा लैजानुहोस</button>
                        </div>
                        <div id="search_result">
                            <table>
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
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>अन्नपूर्ण पदमार्ग निर्माण,थासाङ-2, मु्स्ताङ</td>
                                    <td>5</td>
                                    <td>2077/12/13</td>
                                    <td>2077/12/13</td>
                                    <td>800000</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>2077/12/45</td>
                                    <td>लाल बहादुर रोका</td>
                                    <td>9847742665</td>
                                    <th><img src={require('./../../icons/print.svg').default}/></th>
                                    <th><img src={require('./../../icons/edit-box.svg').default}/> </th>
                                    <th><img src={require('./../../icons/delete.svg').default}/> </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}