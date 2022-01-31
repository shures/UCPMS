import React, {Fragment} from "react";
import './../css/option_entry.css';
import {Header} from "./header";
import axios from "axios";
let bs = require('bikram-sambat');
export class OptionEntry extends React.Component{
    constructor() {
        super();
        this.state = {
            data:{
                bank_name:'प्रभु बैङ्क',
                bank_thegana:'थासाङ-3, कोबाङ',
                bank_sakha:'थासाङ',

                ppa_name: '',
                ppa_number: '',

                lagat_behorne_srot:'',

                padadhikari_pada:'',
                padadhikari_level:'',

                ward_number:'',
                ward_name:'',

                aa_ba : '',
                yojana_sangkhya : '',
                yojana_sangkhya_ward_number:'1',

                selected_option:1,
                isEdit:false,
                id:'',
            },

            errors:[],
            status:'',
            isRecordUpdated:true,
            ward_options:[],
            aa_ba_list:[],

        }
        this.updateText=this.updateText.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {options:'ward',fy:this.state.aa_ba},
        }).then((response)=> {
            console.log(response.data.ward_options);
            this.setState({ward_options:response.data.ward_options});
        }).catch((res) => {

        });


        let english_date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
        let fy_year = bs.toBik_euro(english_date);
        let year = parseInt(fy_year.substr(2, 2));
        let nextYear = parseInt(year)+1;
        let fy = year+'/'+nextYear;

        let aa_ba_list = this.state.aa_ba_list;
        for(let i=0;i<=5;i++){
            aa_ba_list.push(year-i+'/'+parseInt(nextYear-i));
        }
        this.setState({aa_ba_list:aa_ba_list});
    }
    handleEdit(option,index){
        // let data = this.state.data;
        // if(option==='bank'){
        //     data.bank_name = this.state.bank_options[index].bank_name;
        //     data.bank_sakha = this.state.bank_options[index].bank_sakha;
        //     data.bank_thegana = this.state.bank_options[index].bank_thegana;
        //     data.id = this.state.bank_options[index].id;
        //     data.isEdit = true;
        // }
        // this.setState({data:data});
    }
    updateText(event){
        this.setState({errors:[]});
        this.setState({status:''});
        let name = event.target.name;
        let value = event.target.value;
        let data = this.state.data;
        if(name==="select"){data.selected_option=parseInt(value)}
        if(name==="bank_name"){data.bank_name=value;}
        if(name==="bank_thegana"){data.bank_thegana=value}
        if(name==="bank_sakha"){data.bank_sakha=value;}
        if(name==="ppa_name"){data.ppa_name=value;}
        if(name==="ppa_number"){data.ppa_number=value;}
        if(name==="lagat_behorne_srot"){data.lagat_behorne_srot=value;}
        if(name==="padadhikari_pada"){data.padadhikari_pada=value;}
        if(name==="padadhikari_level"){data.padadhikari_level=value;}
        if(name==="ward_name"){data.ward_name=value;}
        if(name==="ward_number"){data.ward_number=value;}
        if(name==="aarthik_barsa"){data.aarthik_barsa=value;}
        if(name==="yojana_sangkhya"){data.yojana_sangkhya=value;}
        if(name==="yojana_sangkhya_ward_number"){data.yojana_sangkhya_ward_number=value;}
        this.setState({data:data});
    }
    handleSubmit(){
        this.setState({status:'adding ... '});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/put_option',
            data: this.state.data,
        }).then((response)=> {
            console.log(response.data);
            this.setState({errors:[]});
            this.setState({status:''});
            this.setState({isRecordUpdated:false},()=>{
                this.setState({isRecordUpdated:true});
            });
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
            }else if (response.data[0]===1){this.setState({status:response.data[1]});
            }else{this.setState({status:'Something went wrong.'});}
        }).catch((res) => {this.setState({status:'Something went wrong.'});});
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
                                <option value="4">पदाधिकारी पद</option>
                                <option value="5">वडा विवरण</option>
                                <option value="6">योजना विवरण</option>
                            </select>
                        </div>
                        {this.state.data.selected_option===1 ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>बैङ्कको नाम</span>
                                    <input name="bank_name" value={this.state.data.bank_name} onChange={this.updateText} type="text" placeholder="बैङ्क नाम"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>शाखा कार्यालय</span>
                                    <input name="bank_sakha" value={this.state.data.bank_sakha} onChange={this.updateText} type="text" placeholder="बैङ्कको ठेगाना"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>बैङ्कको ठेगाना</span>
                                    <input name="bank_thegana" value={this.state.data.bank_thegana} onChange={this.updateText} type="text" placeholder="बैङ्कको ठेगाना"/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.data.selected_option===2 ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>प्रमुख प्रशासकीय अधिकृतको नाम, थर</span>
                                    <input name="ppa_name" value={this.state.data.ppa_name} onChange={this.updateText} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको नाम, थर"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं.</span>
                                    <input name="ppa_number" value={this.state.data.ppa_number} onChange={this.updateText} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं."/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.data.selected_option===3 ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>लागत व्यहोर्ने स्रोत</span>
                                    <input name="lagat_behorne_srot" value={this.state.data.lagat_behorne_srot} onChange={this.updateText} type="text" placeholder="लागत व्यहोर्ने स्रोत"/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.data.selected_option===4 ?
                            <Fragment>
                                <div className="item">
                                    <div id="input">
                                        <span>पदाधिकारी पद</span>
                                        <input name="padadhikari_pada" value={this.state.data.padadhikari_pada} onChange={this.updateText} type="text" placeholder="पदाधिकारी पद"/>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>पदाधिकारी स्तर</span>
                                        <input name="padadhikari_level" value={this.state.data.padadhikari_level} onChange={this.updateText} type="text" placeholder="पदाधिकारी स्तर"/>
                                    </div>
                                </div>
                            </Fragment> : null }
                        {this.state.data.selected_option===5 ?
                            <Fragment>
                                <div className="item">
                                    <div id="input">
                                        <span>वडा नम्बर</span>
                                        <input name="ward_number" value={this.state.data.ward_number} onChange={this.updateText} type="text" placeholder="वडा नं."/>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div id="input">
                                        <span>वडाको नाम</span>
                                        <input name="ward_name" value={this.state.data.ward_name} onChange={this.updateText} type="text" placeholder="वडाको नाम"/>
                                    </div>
                                </div>
                            </Fragment> : null }
                        {this.state.data.selected_option===6 ?
                            <Fragment>
                                <div className="item">
                                    <span>आर्थिक बर्ष</span>
                                    <select name="aarthik_barsa" onChange={this.updateText}>
                                        {this.state.aa_ba_list.map((item,index)=>{
                                            return <option key={index} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="item">
                                    <span>वार्ड नं. </span>
                                    <select name="yojana_sangkhya_ward_number" onChange={this.updateText}>
                                        {this.state.ward_options.map((item,index)=>{
                                            return <option key={index} value={item.ward_number}>वार्ड नं. {item.ward_number}, {item.ward_name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className='item'>
                                    <div id="input">
                                        <span>योजना संख्या</span>
                                        <input name="yojana_sangkhya" value={this.state.data.yojana_sankhya} onChange={this.updateText} type="text" placeholder="संख्या"/>
                                    </div>
                                </div>
                            </Fragment> : null }
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
                    </div>
                    {this.state.isRecordUpdated ? <Record  data={this.state.data}/> : null }
                </div>
            </div>
        );
    }
}
class Record extends React.Component{
    constructor() {
        super();
        this.state={
            padadhikari_pada_options:[],
            lagat_behorne_srot_options:[],
            ppa_options:[],
            bank_options:[],
            ward_options:[],
            yojana_sangkhya:[],
        }
    }
    componentWillMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {options:'all',fy:localStorage.getItem('aa_ba')},
        }).then((response)=> {
            console.log(response.data);
            if (response.data.lagat_behorne_srot_options) {
                this.setState({lagat_behorne_srot_options: response.data.lagat_behorne_srot_options})
            }
            if (response.data.padadhikari_pada_options) {
                this.setState({padadhikari_pada_options: response.data.padadhikari_pada_options})
            }
            if (response.data.ppa_options) {
                this.setState({ppa_options: response.data.ppa_options});
            }
            if (response.data.bank_options) {
                this.setState({bank_options: response.data.bank_options});
            }
            if (response.data.ward_options) {
                this.setState({ward_options: response.data.ward_options});
            }
            if (response.data.yojana_sangkhya) {
                this.setState({yojana_sangkhya: response.data.yojana_sangkhya});
            }
        }).catch((res)=>{

        })
    }
    render(){
        return(
            <div id="record">
                {this.props.data.selected_option===1 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>बैङ्क नाम</td>
                                <td>बैङ्क शाखा</td>
                                <td>बैङ्क ठेगाना</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.bank_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.bank_name}</td>
                                    <td>{item.bank_sakha}</td>
                                    <td>{item.bank_thegana}</td>
                                    <td><span>सम्पादन</span></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.data.selected_option===2 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>प्रमुख प्रशासकीय अधिकृतको नाम, थर</td>
                                <td>प्रमुख प्रशासकीय अधिकृतको</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.ppa_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.ppa_name}</td>
                                    <td>{item.ppa_number}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.data.selected_option===3 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>लागत व्यहोर्ने स्रोत (अन्य)</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.lagat_behorne_srot_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.lagat_behorne_srot}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.data.selected_option===4 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>पदाधिकारीको पद</td>
                                <td>पदाधिकारीको स्तर</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.padadhikari_pada_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.pada}</td>
                                    <td>{item.level}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.data.selected_option===5 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>वडा नम्बर</td>
                                <td>वडाको नाम</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.ward_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.ward_number}</td>
                                    <td>{item.ward_name}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.data.selected_option===6 ?
                    <Fragment>
                        <div id="title">

                        </div>
                        <table>
                            <tr>
                                <td>क्र.सं.</td>
                                <td>वडा नम्बर</td>
                                <td>योजना संख्या</td>
                                <td>आर्थिक बर्ष</td>
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.yojana_sangkhya.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.ward_number}</td>
                                    <td>{item.yojana_sangkhya}</td>
                                    <td>{item.fy}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
            </div>
        )
    }
}