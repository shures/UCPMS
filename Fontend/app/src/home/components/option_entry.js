import {handleError} from "./helperFuntion";
import React, {Fragment} from "react";
import './../css/option_entry.css';
import {Header} from "./header";
import axios from "axios";
let bs = require('bikram-sambat');


export class OptionEntry extends React.Component{
    constructor() {
        super();
        this.state = {
            biwaran:{
                selectedBiwaran:'',
                bank:{
                    name:'',
                    addr:'',
                    branch:'',
                },
                ppa:{
                    name:'santosh',
                    phone:'45545454',
                },
                lagatBehorneSrot:{
                    name:'hello srot'
                },
                padadhikariPada:{
                    pada:'',
                    level:'',
                },
                ward:{
                    name:'',
                    number:'',
                },
                totalWardProject:{
                    wardId:'',
                    total:'',
                }
            },
            dataReceived:{
                wards:[],
            },

            errors:[],
            message:'',

            isDetailUpdated:true,
            aaBaList:[],

        }
        this.handleValueChange=this.handleValueChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {detail:'ward'},
        }).then((response)=> {
            let dataReceived = this.state.dataReceived;
            dataReceived.wards = response.data;
            this.setState({dataReceived:dataReceived});
        }).catch((res) => {

        });

        var currentAaba = parseInt(localStorage.getItem('currentAaBa'));
        var aaBaList = this.state.aaBaList;
        for(let i=0;i<=5;i++){
            aaBaList.push(currentAaba+i+'/'+(currentAaba+1+i).toString().substr(2,2));
        }
        this.setState({aaBaList:aaBaList});

    }
    handleValueChange(event){
        this.setState({errors:[]});
        this.setState({message:''});
        let name = event.target.name;
        let value = event.target.value;
        let biwaran = this.state.biwaran;
        if(name==="selectedBiwaran"){biwaran.selectedBiwaran=value}
        if(name==="bankName"){biwaran.bank.name=value;}
        if(name==="bankAddr"){biwaran.bank.addr=value}
        if(name==="bankBranch"){biwaran.bank.branch=value;}
        if(name==="ppaName"){biwaran.ppa.name=value;}
        if(name==="ppaPhone"){biwaran.ppa.phone=value;}
        if(name==="lagatBehorneSrotName"){biwaran.lagatBehorneSrot.name=value;}
        if(name==="padadhikariPadaName"){biwaran.padadhikariPada.pada=value;}
        if(name==="padadhikariPadaLevel"){biwaran.padadhikariPada.level=value;}
        if(name==="wardName"){biwaran.ward.name=value;}
        if(name==="wardNumber"){biwaran.ward.number=value;}
        if(name==="totalWardProjectTotal"){biwaran.totalWardProject.total=value;}
        if(name==="totalWardProjectWardId"){biwaran.totalWardProject.wardId=value;}
        this.setState({biwaran:biwaran});
    }
    handleSubmit(){
        this.setState({errors:[],message:'Wait a moment !'});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/put_option',
            data:this.state.biwaran,
        }).then((response)=> {
            this.setState({isDetailUpdated:false},()=>{this.setState({isDetailUpdated:true});});
            this.setState({message:''});
            if(response.data[0]===0){
                this.setState({errors:handleError(response.data[1])})
            }else if (response.data[0]===1) {
                this.setState({message:'Completed !'});
            }else {
                this.setState({message:'Something went wrong !'});
            }
        }).catch((res) => {this.setState({message:'Something went wrong !'});});

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
                            <select name="selectedBiwaran" onChange={this.handleValueChange}>
                                <option selected={true} disabled={true}>--विवरणहरु--</option>
                                <option value="bank">बैङ्क सम्बन्धि विवरण</option>
                                <option value="ppa">प्रमुख प्रशासकीय अधिकृत सम्बन्धि विवरण</option>
                                <option value="lagatBehorneSrot">लागत व्यहोर्ने स्रोतहरु</option>
                                <option value="padadhikariPada">पदाधिकारी पद</option>
                                <option value="ward">वडा विवरण</option>
                                <option value="totalWardProject">योजना विवरण</option>
                            </select>
                        </div>
                        {this.state.biwaran.selectedBiwaran==="bank" ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>बैङ्कको नाम</span>
                                    <input name="bankName" value={this.state.biwaran.bank.name} onChange={this.handleValueChange} type="text" placeholder="नाम"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>शाखा कार्यालय</span>
                                    <input name="bankBranch" value={this.state.biwaran.bank.branch} onChange={this.handleValueChange} type="text" placeholder="शाखा"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>बैङ्कको ठेगाना</span>
                                    <input name="bankAddr" value={this.state.biwaran.bank.addr} onChange={this.handleValueChange} type="text" placeholder="ठेगाना"/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.biwaran.selectedBiwaran==="ppa" ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>प्रमुख प्रशासकीय अधिकृतको नाम, थर</span>
                                    <input name="ppaName" value={this.state.biwaran.ppa.ppaName} onChange={this.handleValueChange} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको नाम, थर"/>
                                </div>
                            </div>
                            <div className='item'>
                                <div id="input">
                                    <span>प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं.</span>
                                    <input name="ppaPhone" value={this.state.biwaran.ppa.ppaPhone} onChange={this.handleValueChange} type="text" placeholder="प्रमुख प्रशासकीय अधिकृतको सम्पर्क नं."/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.biwaran.selectedBiwaran==="lagatBehorneSrot" ?
                        <Fragment>
                            <div className="item">
                                <div id="input">
                                    <span>लागत व्यहोर्ने स्रोत</span>
                                    <input name="lagatBehorneSrotName" value={this.state.biwaran.lagatBehorneSrotName} onChange={this.handleValueChange} type="text" placeholder="लागत व्यहोर्ने स्रोत"/>
                                </div>
                            </div>
                        </Fragment> : null }
                        {this.state.biwaran.selectedBiwaran==="padadhikariPada" ?
                            <Fragment>
                                <div className="item">
                                    <div id="input">
                                        <span>पद</span>
                                        <input name="padadhikariPadaName" value={this.state.biwaran.padadhikariPada.pada} onChange={this.handleValueChange} type="text" placeholder="पदाधिकारी पद"/>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="input">
                                        <span>पदाधिकारी स्तर</span>
                                        <input name="padadhikariPadaLevel" value={this.state.biwaran.padadhikariPada.level} onChange={this.handleValueChange} type="text" placeholder="पदाधिकारी स्तर"/>
                                    </div>
                                </div>
                            </Fragment> : null }
                        {this.state.biwaran.selectedBiwaran==="ward" ?
                            <Fragment>
                                <div className="item">
                                    <div id="input">
                                        <span>वडा नम्बर</span>
                                        <input name="wardNumber" value={this.state.biwaran.ward.number} onChange={this.handleValueChange} type="text" placeholder="वडा नं."/>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div id="input">
                                        <span>वडा नाम</span>
                                        <input name="wardName" value={this.state.biwaran.ward.name} onChange={this.handleValueChange} type="text" placeholder="वडाको नाम"/>
                                    </div>
                                </div>
                            </Fragment> : null }
                        {this.state.biwaran.selectedBiwaran==="totalWardProject"?
                            <Fragment>
                                <div className="item">
                                    <span>वार्ड नं. </span>
                                    <select name="totalWardProjectWardId" onChange={this.handleValueChange}>
                                        <option selected={true} disabled={true} >-- वडाहरु --</option>
                                        {this.state.dataReceived.wards.map((ward,index)=>{
                                            return <option key={index} value={ward.id}>वार्ड नं. {ward.number}, {ward.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className='item'>
                                    <div id="input">
                                        <span>योजना संख्या</span>
                                        <input name="totalWardProjectTotal" value={this.state.biwaran.totalWardProject.total} onChange={this.handleValueChange} type="text" placeholder="संख्या"/>
                                    </div>
                                </div>
                            </Fragment> : null }
                        <div id="control">
                            <div id="errors">
                                {this.state.errors.map((error,index)=>{
                                    return <span id="error" key={index}>{error}</span>
                                })}
                            </div>
                            <div id="messages">
                                <span id='message'>{this.state.message}</span>
                            </div>
                            <button onClick={this.handleSubmit}>अपडेट</button>
                        </div>
                    </div>
                    {this.state.isDetailUpdated ? <Detail  biwaran={this.state.biwaran}/> : null }
                </div>
            </div>
        );
    }
}
class Detail extends React.Component{
    constructor() {
        super();
        this.state={
            receivedDetail:{
                banks:[],
                ppas:[],
                lagatBehorneSrots:[],
                wards:[],
                totalWardProjects:[],
                padadhikariPadas:[]
            },
            sendingData:{
                id:null,
                detail:'',
            }
        }
        this.handleDataDelete = this.handleDataDelete.bind(this);
    }
    handleDataDelete(detail,id,index){
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/deleteDetail',
            data: {detail:detail,id:id},
        }).then((response)=> {
            console.log(response.data);
            let receivedDetail = this.state.receivedDetail;
            receivedDetail[detail+'s'].splice(index, 1);
            this.setState({receivedDetail:receivedDetail});
        }).catch((res)=>{

        })
    }
    componentWillMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {detail:'all'},
        }).then((response)=> {
            console.log(response.data);
            let receivedDetail=this.state.receivedDetail;
            receivedDetail = response.data;
            this.setState({receivedDetail: receivedDetail});
        }).catch((res)=>{

        })
    }
    render(){
        return(
            <div id="record">
                {this.props.biwaran.selectedBiwaran==="bank" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>नाम</td><td>शाखा</td><td>ठेगाना</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.banks.map((bank, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{bank.name}</td>
                                    <td>{bank.branch}</td>
                                    <td>{bank.addr}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,bank.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null}
                {this.props.biwaran.selectedBiwaran==="ppa" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>प्रमुख प्रशासकीय अधिकृतको नाम, थर</td><td>प्रमुख प्रशासकीय अधिकृतको फोन</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.ppas.map((ppa, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{ppa.name}</td>
                                    <td>{ppa.phone}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,ppa.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.biwaran.selectedBiwaran==="lagatBehorneSrot" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>लागत व्यहोर्ने स्रोतको नाम</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.lagatBehorneSrots.map((lagatBehorneSrot, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{lagatBehorneSrot.name}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,lagatBehorneSrot.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.biwaran.selectedBiwaran==="padadhikariPada" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>पदाधिकारी पदको नाम</td><td>पदाधिकारी पदको स्तर</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.padadhikariPadas.map((padadhikariPada, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{padadhikariPada.pada}</td>
                                    <td>{padadhikariPada.level}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,padadhikariPada.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.biwaran.selectedBiwaran==="ward" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>वडा नाम</td><td>वडा नम्बर</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.wards.map((ward, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{ward.name}</td>
                                    <td>{ward.number}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,ward.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
                {this.props.biwaran.selectedBiwaran==="totalWardProject" ?
                    <Fragment>
                        <table>
                            <tr>
                                <td>क्र.सं.</td><td>वडा नाम</td><td>वडा नम्बर</td><td>जम्मा योजनाहरु</td><td>हजाउनुहोस</td>
                            </tr>
                            {this.state.receivedDetail.totalWardProjects.map((totalWardProject, index)=>{
                                return  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{totalWardProject.name}</td>
                                    <td>{totalWardProject.number}</td>
                                    <td>{totalWardProject.total}</td>
                                    <td><img onClick={()=>this.handleDataDelete(this.props.biwaran.selectedBiwaran,totalWardProject.id,index)} src={require('./../../icons/delete.svg').default}/></td>
                                </tr>
                            })}
                        </table>
                    </Fragment> : null }
            </div>
        )
    }
}