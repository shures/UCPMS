import React, {Fragment} from "react";
import './../css/setting.css';
import {Header} from "./header";
import axios from "axios";
export class Setting extends React.Component{
    constructor() {
        super();
        this.state = {
            data:{
                aa_ba:'78/79',
                status:'',
                currentAaba : ''
            }
        }
        this.sendData = this.sendData.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.getAaba = this.getAaba.bind(this);
    }
    getAaba(){
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getSetting',
            data: {setting:'aa_ba'},
        }).then((response)=>{
            this.setState({currentAaba:response.data[1].option},()=>{
                localStorage.setItem('aa_ba',response.data[1].option)
            });
        }).catch(function (error) {

        });
    }
    componentDidMount(){
        this.getAaba();
    }
    handleUpdate(event){
        let name = event.target.name;
        let value = event.target.value;
        let data = this.state.data;
        if(name==="aa_ba"){data.aa_ba=value;}
        this.setState({data:data});
    }
    sendData(){
        this.setState({status:'Processing ...'});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/putSetting',
            data: this.state.data,
        }).then((response)=>{
            switch (response.data[0]) {
                case 0:
                    this.setState({status:'Error ... !'});
                    break;
                case 1:
                    this.setState({status:'Success ... !'});
                    this.getAaba();
                    break;
                default:
                    this.setState({status:'Something went error ... !'});
            }
        }).catch(function (error) {

        });
    }
    render() {
        return (
            <div id='setting'>
                <Header/>
                <div id="container">
                    <div id="title">
                        सेटिङ मिलाउनुहोस ।
                    </div>
                    <div id="item_list">
                        <div className='item'>
                            <table>
                                <tr>
                                    <td>आर्थिक बर्ष : </td>
                                    <td>
                                        <select name="aa_ba" onChange={this.handleUpdate}>
                                            <option value='78/79'>78/79</option>
                                            <option value='79/80'>79/80</option>
                                            <option value='80/81'>80/81</option>
                                            <option value='81/82'>81/82</option>
                                            <option value='82/83'>82/83</option>
                                            <option value='83/84'>83/84</option>
                                            <option value='84/85'>84/85</option>
                                            <option value='85/86'>85/86</option>
                                            <option value='86/87'>86/87</option>
                                            <option value='87/88'>87/88</option>
                                        </select>
                                    </td>
                                    <td> &nbsp; &nbsp; सेट गरिएको आ.व. {this.state.currentAaba}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div id="status">
                        {this.state.status}
                    </div>
                    <button onClick={this.sendData}>अपडेट गर्नुहोस </button>
                </div>
            </div>
        );
    }
}