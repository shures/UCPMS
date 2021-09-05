import React, {Fragment} from "react";
import './../css/option_entry.css';
import {Header} from "./header";
import axios from "axios";
export class OptionEntry extends React.Component{
    constructor() {
        super();
        this.state = {
            selected_option:1,
        }
        this.updateText=this.updateText.bind(this);
    }
    updateText(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name==="select"){
            this.setState({selected_option:parseInt(value)})
        }
    }
    render() {
        return (
            <div id='option_entry'>
                <Header/>
                <div id="container">
                    <div id="title">
                        विवरणहरु अध्यावधिक गर्नुहोस
                    </div>
                    <div id="entry">
                        <div id="select_item">
                            <select name="select" onChange={this.updateText}>
                                <option value="1">बैङ्क सम्बन्धि विवरण</option>
                                <option value="2">प्रमुख प्रशासकीय अधिकृत सम्बन्धि विवरण</option>
                                <option value="3">लागत व्यहोर्ने स्रोतहरु</option>
                            </select>
                        </div>
                        {this.state.selected_option===1 ? <BankOption/> : null }
                        {this.state.selected_option===2 ? <PPAOption/> : null }
                        {this.state.selected_option===3 ? <LagatBehorneSrot/> : null }
                    </div>
                </div>
            </div>
        );
    }
}
class BankOption extends React.Component{
    constructor() {
        super();
        this.state={
            bank_name:'प्रभु बैङ्क',
            bank_thegana:'थासाङ-3, कोबाङ',
            bank_sakha:'थासाङ',

            errors:[],
            status:''
        }
        this.updateText=this.updateText.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({status:'adding ... '});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/put_option_bank',
            data: this.state,
        }).then((response)=> {
            this.setState({errors:[]});
            this.setState({status:''});
            if(response.data[0]===0){
                let errors = this.state.errors;
                response.data.forEach(obj => {
                    Object.entries(obj).forEach(([key, value]) => {
                        for(let i=0;i<=value.length;i++){
                            errors.push(value[i]);
                        }
                    });
                });
                this.setState({errors:errors});
            }else if (response.data[0]===1){
                this.setState({status:response.data[1]});
            }else{
                this.setState({status:'Something went wrong.'});
            }
        }).catch((res) => {
            this.setState({status:'Something went wrong.'});
        });
    }
    updateText(event){
        this.setState({status:''});
        let name = event.target.name;
        let value = event.target.value;
        if(name==="bank_name"){this.setState({bank_name:value})}
        if(name==="bank_thegana"){this.setState({bank_thegana:value})}
        if(name==="bank_sakha"){this.setState({bank_sakha:value})}
    }
    render() {
        return <Fragment>
            <div className="item">
                <div id="input">
                    <span>बैङ्कको नाम</span>
                    <input name="bank_name" value={this.state.bank_name} onChange={this.updateText} type="text" placeholder="बैङ्क नाम"/>
                </div>
            </div>
            <div className='item'>
                <div id="input">
                    <span>शाखा कार्यालय</span>
                    <input name="bank_sakha" value={this.state.bank_sakha} onChange={this.updateText} type="text" placeholder="बैङ्कको ठेगाना"/>
                </div>
            </div>
            <div className='item'>
                <div id="input">
                    <span>बैङ्कको ठेगाना</span>
                    <input name="bank_thegana" value={this.state.bank_thegana} onChange={this.updateText} type="text" placeholder="बैङ्कको ठेगाना"/>
                </div>
            </div>
            <div id="control">
                <div id="error">
                    {this.state.errors.map((error,index)=>{
                        return <span key={index}>{error}</span>
                    })}
                </div>
                <div id="status">
                    <span>{this.state.status}</span>
                </div>
                <button onClick={this.handleSubmit}>थप्नुहोस</button>
            </div>
        </Fragment>
    }
}
class PPAOption extends React.Component{
    constructor() {
        super();
        this.state= {
            ppa_name: '',
            ppa_number: '',
            errors:[],
            status:''
        }
        this.updateText=this.updateText.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({status:'adding ... '});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/put_option_ppa',
            data: this.state,
        }).then((response)=> {
            this.setState({errors:[]});
            this.setState({status:''});
            if(response.data[0]===0){
                let errors = this.state.errors;
                response.data.forEach(obj => {
                    Object.entries(obj).forEach(([key, value]) => {
                        for(let i=0;i<=value.length;i++){
                            errors.push(value[i]);
                        }
                    });
                });
                this.setState({errors:errors});
            }else if (response.data[0]===1){
                this.setState({status:response.data[1]});
            }else{
                this.setState({status:'Something went wrong.'});
            }
        }).catch((res) => {
            this.setState({status:'Something went wrong.'});
        });
    }
    updateText(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name==="ppa_name"){
            this.setState({ppa_name:value})
        }
        if(name==="ppa_number"){
            this.setState({ppa_number:value})
        }
    }
    render() {
        return <Fragment>
            <div className="item">
                <div id="input">
                    <span>प्रमुख प्रशासकीय अधिकृतको नाम, थर</span>
                    <input name="ppa_name" value={this.state.ppa_name} onChange={this.updateText} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको नाम, थर"/>
                </div>
            </div>
            <div className='item'>
                <div id="input">
                    <span>प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं.</span>
                    <input name="ppa_number" value={this.state.ppa_number} onChange={this.updateText} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं."/>
                </div>
            </div>

        </Fragment>
    }
}
class LagatBehorneSrot extends React.Component{
    constructor() {
        super();
        this.state={
            lagat_behorne_srot:'',
            errors:[],
            status:''
        }
        this.updateText=this.updateText.bind(this);
    }
    handleSubmit(){
        this.setState({status:'adding ... '});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/lagat_behorne_srot',
            data: this.state,
        }).then((response)=> {
            this.setState({errors:[]});
            this.setState({status:''});
            if(response.data[0]===0){
                let errors = this.state.errors;
                response.data.forEach(obj => {
                    Object.entries(obj).forEach(([key, value]) => {
                        for(let i=0;i<=value.length;i++){
                            errors.push(value[i]);
                        }
                    });
                });
                this.setState({errors:errors});
            }else if (response.data[0]===1){
                this.setState({status:response.data[1]});
            }else{
                this.setState({status:'Something went wrong.'});
            }
        }).catch((res) => {
            this.setState({status:'Something went wrong.'});
        });
    }
    updateText(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name==="lagat_behorne_srot"){
            this.setState({lagat_behorne_srot:value})
        }
    }
    render() {
        return <Fragment>
            <div className="item">
                <div id="input">
                    <span>लागत व्यहोर्ने स्रोत</span>
                    <input name="lagat_behorne_srot" value={this.state.lagat_behorne_srot} onChange={this.updateText} type="text" placeholder="लागत व्यहोर्ने स्रोत"/>
                </div>
            </div>
        </Fragment>
    }
}