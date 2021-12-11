import React from "react";
import './../css/header.css';
import {Link} from "react-router-dom";
export class Header extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id="header">
                <div id="logo">
                    <img src={require('../../files/emblem_logo.png').default}/>
                </div>
                <div id="title">
                    <span>थासाङ गाउँपालिका</span>
                    <span>गाउँकार्यपालिकाको कार्यालय</span>
                    <span>कोबाङ, मु्स्ताङ </span>
                </div>
                <div id="nav">
                    <div className="item">
                        <Link to='/'>
                            <img src={require('../../icons/four-squares.svg').default}/>
                            <div id="title">ड्यासबोर्ड</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/project_entry'>
                            <img src={require('./../../icons/log-in.svg').default}/>
                            <div id="title">योजना प्रविष्टि</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/sifaris'>
                            <img src={require('./../../icons/document-give.svg').default}/>
                            <div id="title">सिफारिस पत्र</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/report'>
                            <img src={require('./../../icons/challenge-target.svg').default}/>
                            <div id="title">प्रतिवेदन</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/option_entry'>
                            <img src={require('./../../icons/document-give.svg').default}/>
                            <div id="title">विवरण प्रविष्टि</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/document_upload'>
                            <img src={require('./../../icons/document-give.svg').default}/>
                            <div id="title">अपलोड डकुमेन्ट</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}