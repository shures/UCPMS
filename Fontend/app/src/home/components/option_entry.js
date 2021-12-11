import React, {Fragment} from "react";
import './../css/option_entry.css';
import {Header} from "./header";
import axios from "axios";
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
                selected_option:1,
                isEdit:false,
                id:''
            },

            errors:[],
            status:'',
            isRecordUpdated:true,

        }
        this.updateText=this.updateText.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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
        this.setState({data:data})
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
                    {this.state.isRecordUpdated ? <Record data={this.state.data}/> : null }
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
        }
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {},
        }).then((response)=> {
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
                                    {/*<td><span onClick={()=>{this.handleEdit('bank',index)}}>सम्पादन</span></td>*/}
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
                                <td>डिलेट गर्नहोस</td>
                            </tr>
                            {this.state.padadhikari_pada_options.map((item, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.pada}</td>
                                    <td>डिलेट गर्नहोस</td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
            </div>
        )
    }
}