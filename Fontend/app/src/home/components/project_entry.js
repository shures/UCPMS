import React from "react";
import './../css/project_entry.css';
import './../css/agreement_print_preview.css';
import axios from 'axios';
import {Link} from "react-router-dom";

import {Header} from "./header";
import {NepaliDatePicker} from "datepicker-nepali-reactjs";
export class Project_entry extends React.Component{
    constructor() {
        super();
        this.state = {
            projectData:{
                upabhokta_samitiko_naam : 'उपभोक्ता समितिको नाम',
                upabokta_samitiko_thegana : 'उपभोक्ता समितिको ठेगाना',
                aayojanako_naam : 'योजनाको नाम',
                aayojanako_sthal : 'योजनाको स्थल',
                aayojanako_udeshya : 'आयोजनाको उदस्य',
                aayojana_suru_miti : '',
                lagat_anuman : 80000,
                lagat_behorne_karyalay :150000,
                lagat_behorne_upobhokta_samiti :320000,
                lagat_behorne_anne_option:1,
                lagat_behorne_anne : 258555,
                bastugat_anudan_sangbata_samagriko_naam :'बस्तुगत संघबाट सामाग्री',
                bastugat_anudan_sangbata_ekai :'बस्तुगत संघबाट इकाइ',
                bastugat_anudan_pradeshbata_samagriko_naam :'बस्तुगत प्रदेशबाट सामाग्री',
                bastugat_anudan_pradeshbata_ekai :'बस्तुगत प्रदेशबाट इकाइ',
                bastugat_anudan_sthaniyebata_samagriko_naam :'बस्तुगत स्थानीय सामाग्री',
                bastugat_anudan_sthaniyebata_ekai :'बस्तुगत स्थानीय इकाइ',
                bastugat_anudan_gairasarakaribata_samagriko_naam :'बस्तुगत गैरसरकारी सामाग्री',
                bastugat_anudan_gairasarakaribata_ekai :'बस्तुगत गैरसरकारी इकाइ',
                bastugat_anudan_bideshbata_samagriko_naam :'बस्तुगत विदेशबाट सामाग्री',
                bastugat_anudan_bideshbata_ekai :'बस्तुगत विदेशबाट इकाइ',
                bastugat_anudan_upobhoktasamitibata_samagriko_naam :'बस्तुगत उपभोक्ताबाट सामाग्री',
                bastugat_anudan_upokhoktasamitibata_ekai :'बस्तुगत उपभोक्ताबाट इकाइ',
                bastugat_anudan_anne_samagriko_naam :'बस्तुगत अन्य सामाग्री',
                bastugat_anudan_anne_ekai :'बस्तुगत अन्य इकाइ',
                aayojana_labhanbit_gharpariwar_sangkhya : 'घरपरियार संख्या',
                aayojana_labhanbit_janasankhya : 'जनसंख्या',
                aayojana_labhanbit_sangathit_sangkhya : 'संगठित संख्या',
                aayojana_labhanbit_anne : 'अन्य',
                gathan_vayeko_miti :'गठन भएको मिति',

                upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya :'उपस्थित लाभान्वित संख्या',
                anubhav_barsa : 'अनुभव बर्ष',
                pratham_miti : '',
                pratham_rakam : 'प्रथम रकम',
                pratham_samagriko_pariman : 'प्रथम परिमाण',
                pratham_kaifiyet : 'प्रथम कैफियत',
                dorshro_miti : '',
                dorshro_rakam : 'दोस्रो रकम',
                dorshro_samagriko_pariman : 'दोस्रो परिमाण',
                dorshro_kaifiyet : 'दोस्रो कैफियत',
                teshro_miti : '',
                teshro_rakam : 'तेस्रो रकम',
                teshro_samagriko_pariman : 'तेस्रो परिमाण',
                teshro_kaifiyet : 'तेस्रो कैफियत',
                jamma_miti : '',
                jamma_rakam : 'जम्मा रकम',
                jamma_samagriko_pariman : 'जम्मा परिमाण',
                jamma_kaifiyet : 'जम्मा कैफियत',
                yojana_marmat_jimma_line_samiti :'योजना जिम्मा लिने समिति',
                marmat_sambhabit_srot :'मर्मत स्रोत',
                janasramdan :'जनश्रमदान',
                sewa_sulka : 'शेवा शुल्क',
                dastur_chandabata : 'दस्तुर चन्दा',
                anne_kehi_vaye : 'अन्य केही भए',

                aayojana_ante_miti :'',
                aayojana_hune_woda:1,
                pramukha_prashasakiyeko_name:1,
                adaxyako_number:'9847742665',
                kaifiyet:'कैफियत',
                padadhikariharu:[],
                isEdit:true,
            },
            padadhikariharu_name:'',
            padadhikariharu_pada_id:1,
            padadhikariharu_thegana:'',
            padadhikariharu_na_na:'',
            padadhikariharu_jilla:'मु्स्ताङ',

            show_bastugat_anudan:false,
            show_kistako_biwaran:false,
            show_aayojana_marmat_sambhar:false,
            submitSuccess : false,
            submitSuccessId:null,
            submitStatus:'',
            errors:[],

            padadhikari_pada_options:[],
            lagat_behorne_srot_options:[],
            ppa_options:[],
            ward_options:[],
        }
        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTableRow = this.handleAddTableRow.bind(this);
        this.handleRemoveTableRow = this.handleRemoveTableRow.bind(this);
    }
    handleSubmit(){
        console.log(this.state.projectData.padadhikariharu);
        this.setState({submitStatus:'Submitting ...'});
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/putData',
            data: this.state.projectData,
        }).then((response)=> {
            this.setState({submitStatus:'',errors:[]});
            if(response.data[0]===1){
                this.setState({submitSuccess:true});
                this.setState({submitSuccessId:response.data[1]});
            }else if(response.data[0]===0){
                let errors = this.state.errors;
                for (let key in response.data[1]){
                    response.data[1][key].forEach((item,index,arr)=>{
                        errors.push(item);
                    });
                    this.setState({errors:errors});
                }
            }
        });
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/getOptions',
            data: {options:'all'},
        }).then((response)=> {
            if (response.data.lagat_behorne_srot_options) {
                this.setState({lagat_behorne_srot_options: response.data.lagat_behorne_srot_options})
            }
            if (response.data.padadhikari_pada_options) {
                this.setState({padadhikari_pada_options: response.data.padadhikari_pada_options, padadhikari_pada_id: response.data.padadhikari_pada_options[0].id})
            }
            if (response.data.ppa_options) {
                this.setState({ppa_options: response.data.ppa_options});
            }
            if (response.data.ward_options) {
                this.setState({ward_options: response.data.ward_options});
            }
        }).catch((res)=>{

        })
        if(this.state.projectData.isEdit){
            axios({
                method: 'post',
                url: localStorage.getItem('server')+'api/getProject',
                data:{'id': 10},
            }).then((response)=> {
                console.log(response.data);
                let projectData = this.state.projectData;
                projectData = response.data[1];
                projectData.isEdit = true;
                projectData.padadhikariharu = response.data[2];
                this.setState({projectData:projectData});
            }).catch((res) => {

            });
        }
        // if(Number.isInteger(this.props.location.id) && this.props.location.id!==''){
        //     let projectData=this.state.projectData;
        //     projectData.edit = true;
        //     this.setState({projectData:projectData});
        // }
    }
    handleRemoveTableRow(row_number){
        let padadhikariharu = this.state.projectData.padadhikariharu;
        padadhikariharu.splice(row_number, 1);
        this.setState({padadhikariharu:padadhikariharu});
    }
    handleAddTableRow(){
        let padadhikariharu = this.state.projectData.padadhikariharu;
        padadhikariharu.push({pada_id:this.state.padadhikariharu_pada_id,name:this.state.padadhikariharu_name,thegana:this.state.padadhikariharu_thegana,na_na:this.state.padadhikariharu_na_na,jilla:this.state.padadhikariharu_jilla});
        this.setState({padadhikariharu:padadhikariharu},()=>{
            this.setState({padadhikariharu_pada_id:1,padadhikariharu_name:'',padadhikariharu_na_na:''});
        });
    }
    updateText(event){
        let name = event.target.name;
        let value = event.target.value;
        let projectData = this.state.projectData;
        if(name==="upabhokta_samitiko_naam"){projectData.upabhokta_samitiko_naam = value;}
        if(name==="upabokta_samitiko_thegana"){projectData.upabokta_samitiko_thegana=value;}
        if(name==="aayojanako_naam"){projectData.aayojanako_naam=value}
        if(name==="aayojanako_sthal"){projectData.aayojanako_sthal=value}
        if(name==="aayojanako_udeshya"){projectData.aayojanako_udeshya=value}
        if(name==="aayojana_suru_miti"){projectData.aayojana_suru_miti=value}
        if(name==="lagat_anuman"){projectData.lagat_anuman=value}
        if(name==="lagat_behorne_karyalay"){projectData.lagat_behorne_karyalay=value}
        if(name==="lagat_behorne_upobhokta_samiti"){projectData.lagat_behorne_upobhokta_samiti=value}
        if(name==="lagat_behorne_anne_option"){projectData.lagat_behorne_anne_option=value}
        if(name==="lagat_behorne_anne"){projectData.lagat_behorne_anne=value}

        if(name==="bastugat_anudan_sangbata_samagriko_naam"){projectData.bastugat_anudan_sangbata_samagriko_naam=value}
        if(name==="bastugat_anudan_sangbata_ekai"){projectData.bastugat_anudan_sangbata_ekai=value}
        if(name==="bastugat_anudan_pradeshbata_samagriko_naam"){projectData.bastugat_anudan_pradeshbata_samagriko_naam=value}
        if(name==="bastugat_anudan_pradeshbata_ekai"){projectData.bastugat_anudan_pradeshbata_ekai=value}
        if(name==="bastugat_anudan_sthaniyebata_samagriko_naam"){projectData.bastugat_anudan_sthaniyebata_samagriko_naam=value}
        if(name==="bastugat_anudan_sthaniyebata_ekai"){projectData.bastugat_anudan_sthaniyebata_ekai=value}
        if(name==="bastugat_anudan_gairasarakaribata_samagriko_naam"){projectData.bastugat_anudan_gairasarakaribata_samagriko_naam=value}
        if(name==="bastugat_anudan_gairasarakaribata_ekai"){projectData.bastugat_anudan_gairasarakaribata_ekai=value}
        if(name==="bastugat_anudan_bideshbata_samagriko_naam"){projectData.bastugat_anudan_bideshbata_samagriko_naam=value}
        if(name==="bastugat_anudan_bideshbata_ekai"){projectData.bastugat_anudan_bideshbata_ekai=value}
        if(name==="bastugat_anudan_upobhoktasamitibata_samagriko_naam"){projectData.bastugat_anudan_upobhoktasamitibata_samagriko_naam=value}
        if(name==="bastugat_anudan_upokhoktasamitibata_ekai"){projectData.bastugat_anudan_upokhoktasamitibata_ekai=value}
        if(name==="bastugat_anudan_anne_samagriko_naam"){projectData.bastugat_anudan_anne_samagriko_naam=value}
        if(name==="bastugat_anudan_anne_ekai"){projectData.bastugat_anudan_anne_ekai=value}

        if(name==="aayojana_labhanbit_gharpariwar_sangkhya"){projectData.aayojana_labhanbit_gharpariwar_sangkhya=value}
        if(name==="aayojana_labhanbit_janasankhya"){projectData.aayojana_labhanbit_janasankhya=value}
        if(name==="aayojana_labhanbit_sangathit_sangkhya"){projectData.aayojana_labhanbit_sangathit_sangkhya=value}
        if(name==="aayojana_labhanbit_anne"){projectData.aayojana_labhanbit_anne=value}
        if(name==="gathan_vayeko_miti"){projectData.gathan_vayeko_miti=value}

        if(name==="upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya"){projectData.upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya=value}
        if(name==="anubhav_barsa"){projectData.anubhav_barsa=value}

        if(name==="pratham_miti"){projectData.pratham_miti=value}
        if(name==="pratham_rakam"){projectData.pratham_rakam=value}
        if(name==="pratham_samagriko_pariman") {projectData.pratham_samagriko_pariman=value}
        if(name==="pratham_kaifiyet"){projectData.pratham_kaifiyet=value}
        if(name==="dorshro_miti"){projectData.dorshro_miti=value}
        if(name==="dorshro_rakam"){projectData.dorshro_rakam=value}
        if(name==="dorshro_samagriko_pariman"){projectData.dorshro_samagriko_pariman=value}
        if(name==="dorshro_kaifiyet"){projectData.dorshro_kaifiyet=value}
        if(name==="teshro_miti"){projectData.teshro_miti=value}
        if(name==="teshro_rakam"){projectData.teshro_rakam=value}
        if(name==="teshro_samagriko_pariman"){projectData.teshro_samagriko_pariman=value}
        if(name==="teshro_kaifiyet"){projectData.teshro_kaifiyet=value}
        if(name==="jamma_miti"){projectData.jamma_miti=value}
        if(name==="jamma_rakam"){projectData.jamma_rakam=value}
        if(name==="jamma_samagriko_pariman"){projectData.jamma_samagriko_pariman=value}
        if(name==="jamma_kaifiyet"){projectData.jamma_kaifiyet=value}

        if(name==="yojana_marmat_jimma_line_samiti"){projectData.yojana_marmat_jimma_line_samiti=value}
        if(name==="marmat_sambhabit_srot"){projectData.marmat_sambhabit_srot=value}
        if(name==="janasramdan"){projectData.janasramdan=value}
        if(name==="sewa_sulka"){projectData.sewa_sulka=value}
        if(name==="dastur_chandabata"){projectData.dastur_chandabata=value}
        if(name==="anne_kehi_vaye"){projectData.anne_kehi_vaye=value}

        if(name==="aayojana_ante_miti"){projectData.aayojana_ante_miti=value}
        if(name==="aayojana_hune_woda"){projectData.aayojana_hune_woda=value}
        if(name==="pramukha_prashasakiyeko_name"){projectData.pramukha_prashasakiyeko_name=value}
        if(name==="pramukha_prashasakiyeko_number"){projectData.pramukha_prashasakiyeko_number=value}
        if(name==="adaxyako_number"){projectData.adaxyako_number=value}
        if(name==="kaifiyet"){projectData.kaifiyet=value}
        this.setState({projectData:projectData});

        if(name==="padadhikariharu_pada_id"){;this.setState({padadhikariharu_pada_id:value});}
        if(name==="padadhikariharu_name"){this.setState({padadhikariharu_name:value})}
        if(name==="padadhikariharu_thegana"){this.setState({padadhikariharu_thegana:value})}
        if(name==="padadhikariharu_na_na"){this.setState({padadhikariharu_na_na:value})}
        if(name==="padadhikariharu_jilla"){this.setState({padadhikariharu_jilla:value})}
    }
    render() {
        return (
            <div id='project_entry'>
                <Header/>
                <div id="container">
                    <div id="title">
                        योजना सम्झौता प्रविष्टि
                    </div>
                    <div id="entry">
                        <div className="title">
                            <span>१) सम्झौता गर्ने पक्ष र आयोजना </span>
                            <div className="sub_title">
                                <span>क) उपभोक्ता समितिको विवरण </span>
                                <table id="simple">
                                    <tr>
                                        <td><span>नाम : <b id="required">*</b></span></td>
                                        <td><input name="upabhokta_samitiko_naam" value={this.state.projectData.upabhokta_samitiko_naam} onChange={this.updateText} id="long_width" type="text" placeholder="उपभोक्ता समितिको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ठेगाना : <b id="required">*</b></span></td>
                                        <td><input name="upabokta_samitiko_thegana" type="text" value={this.state.projectData.upabokta_samitiko_thegana} onChange={this.updateText} placeholder=" उपभोक्ता समितिको ठेगाना"/></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="sub_title">
                                <span>ख) आयोजनाको विवरण </span>
                                <table id="simple">
                                    <tr>
                                        <td><span>नाम : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_naam" id="long_width" value={this.state.projectData.aayojanako_naam} onChange={this.updateText} type="text" placeholder="आयोजनाको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>आयोजना स्थल : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_sthal" type="text" value={this.state.projectData.aayojanako_sthal} onChange={this.updateText} placeholder="आयोजना स्थल"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>उदेश्य : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_udeshya" type="text" value={this.state.projectData.aayojanako_udeshya} onChange={this.updateText} placeholder="आयोजना उदेश्य"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>आयोजना शुरु हुने मिति : <b id="required">*</b></span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.aayojana_suru_miti = date; this.setState({projectData:projectData})}} placeholder="आयोजना शुरु हुने मिति" /></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="sub_title">
                                <span>ग) आयोजनाको लाभान्वित हुने</span>
                                <table id="simple">
                                    <tr>
                                        <td><span>घरपरियार संख्या : <b id="required">*</b></span></td>
                                        <td><input name="aayojana_labhanbit_gharpariwar_sangkhya" value={this.state.projectData.aayojana_labhanbit_gharpariwar_sangkhya} onChange={this.updateText} type="text" placeholder="घरपरियार संख्या"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>जनसंख्या : <b id="required">*</b></span></td>
                                        <td><input name="aayojana_labhanbit_janasankhya" value={this.state.projectData.aayojana_labhanbit_janasankhya} onChange={this.updateText} type="text" placeholder="उपभोक्ता समिति"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>संगठित संख्या :</span></td>
                                        <td><input name="aayojana_labhanbit_sangathit_sangkhya" value={this.state.projectData.aayojana_labhanbit_sangathit_sangkhya} onChange={this.updateText} type="text" placeholder="संगठित संख्या"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>अन्य :</span></td>
                                        <td><input name='aayojana_labhanbit_anne' value={this.state.projectData.aayojana_labhanbit_anne} onChange={this.updateText} type="text" placeholder="अन्य"/></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="title">
                            <span>२) आयोजना लागत सम्बन्धि विवरण </span>
                            <div className="sub_title">
                                <span>क) लागत अनुमान रु : <b id="required">*</b></span>
                                <input name="lagat_anuman" value={this.state.projectData.lagat_anuman} onChange={this.updateText} type="text" placeholder="लागत अनुमान रु "/>
                            </div>
                            <div className="sub_title">
                                <span>ख) लागत व्यहोर्ने स्रोतहरु</span>
                                <table id="simple">
                                    <tr>
                                        <td><span>कार्यालय : <b id="required">*</b> </span></td>
                                        <td><input name="lagat_behorne_karyalay" value={this.state.projectData.lagat_behorne_karyalay} onChange={this.updateText} type="text" placeholder="कार्यालय"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>उपभोक्ता समिति : <b id="required">*</b></span></td>
                                        <td><input name="lagat_behorne_upobhokta_samiti" value={this.state.projectData.lagat_behorne_upobhokta_samiti} onChange={this.updateText} type="text" placeholder="उपभोक्ता समिति"/></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>अन्य :
                                                <select name='lagat_behorne_anne_option' onChange={this.updateText}>
                                                    {this.state.lagat_behorne_srot_options.map((item,index)=>{
                                                        return <option selected={parseInt(this.state.projectData.lagat_behorne_anne_option)===parseInt(item.id)} value={item.id} key={index}>{item.lagat_behorne_srot}</option>
                                                    })}
                                                </select>
                                            </span>
                                        </td>
                                        <td><input name="lagat_behorne_anne" value={this.state.projectData.lagat_behorne_anne} onChange={this.updateText} type="text" placeholder="अन्य"/></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="sub_title">
                                <span id="dropdown_option" onClick={()=>{this.setState({show_bastugat_anudan:!this.state.show_bastugat_anudan})}}>ग) बस्तुगत अनुदानको विवरण</span>
                                {this.state.show_bastugat_anudan ?
                                <table id="border_collapse" border='1'>
                                    <tr>
                                        <td><span>क्र.सं. </span></td>
                                        <td><span>बस्तुगत अनुदानको विवरण</span></td>
                                        <td><span>सामाग्रीको नाम</span></td>
                                        <td><span>एकाई</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>1</span></td>
                                        <td><span>संघबाट</span></td>
                                        <td><input name='bastugat_anudan_sangbata_samagriko_naam' onChange={this.updateText} value={this.state.projectData.bastugat_anudan_sangbata_samagriko_naam} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_sangbata_ekai' value={this.state.projectData.bastugat_anudan_sangbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>2</span></td>
                                        <td><span>प्रदेशबाट</span></td>
                                        <td><input name='bastugat_anudan_pradeshbata_samagriko_naam' value={this.state.projectData.bastugat_anudan_pradeshbata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_pradeshbata_ekai' value={this.state.projectData.bastugat_anudan_pradeshbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>3</span></td>
                                        <td><span>स्थानीय तहबाट</span></td>
                                        <td><input name='bastugat_anudan_sthaniyebata_samagriko_naam' value={this.state.projectData.bastugat_anudan_sthaniyebata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_sthaniyebata_ekai' value={this.state.projectData.bastugat_anudan_sthaniyebata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>4</span></td>
                                        <td><span>गैह्रसरकारी तहबाट</span></td>
                                        <td><input name='bastugat_anudan_gairasarakaribata_samagriko_naam' value={this.state.projectData.bastugat_anudan_gairasarakaribata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_gairasarakaribata_ekai' value={this.state.projectData.bastugat_anudan_gairasarakaribata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>5</span></td>
                                        <td><span>विदेशी दातृ निकायबाट</span></td>
                                        <td><input name='bastugat_anudan_bideshbata_samagriko_naam' value={this.state.projectData.bastugat_anudan_bideshbata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_bideshbata_ekai' value={this.state.projectData.bastugat_anudan_bideshbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>6</span></td>
                                        <td><span>उपभोक्ता समितिबाट</span></td>
                                        <td><input name='bastugat_anudan_upobhoktasamitibata_samagriko_naam' value={this.state.projectData.bastugat_anudan_upobhoktasamitibata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_upokhoktasamitibata_ekai' value={this.state.projectData.bastugat_anudan_upokhoktasamitibata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>7</span></td>
                                        <td><span>अन्य निकायबाट</span></td>
                                        <td><input name='bastugat_anudan_anne_samagriko_naam' value={this.state.projectData.bastugat_anudan_anne_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_anne_ekai' value={this.state.projectData.bastugat_anudan_anne_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                </table> :null }
                            </div>
                        </div>
                        <div className="title">
                            <span>३) उपभोक्ता समिति/गैरसरकारी सघसंस्था/समुदायमा आधारित संस्था सम्बन्धि विवरण </span>
                            <div className="sub_title" style={{display:'flex',flexDirection:'row'}}>
                                <span style={{marginRight:'10px'}}>क) गठन भएको मिति : <b id="required">*</b></span>
                                <NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.gathan_vayeko_miti = date; this.setState({projectData:projectData})}} placeholder="गठन भएको मिति" />
                            </div>
                            <div className="sub_title">
                                <span>ख) पदाधिकारीहरुको नाम <b id="required">*</b></span>
                                <div className="sub_sub_title">
                                    <table border='1' id="border_collapse">
                                        <tr>
                                            <td><span>पद चयन</span></td>
                                            <td><span>क्र.सं.</span></td>
                                            <td><span>पद</span></td>
                                            <td><span>नाम,थर</span></td>
                                            <td><span>ठेगाना</span></td>
                                            <td><span>ना.प्र.प.नं.</span></td>
                                            <td><span>जिल्ला</span></td>
                                            <td><span>हटाउनुहोस</span></td>
                                        </tr>
                                        {this.state.projectData.padadhikariharu.map((item,index)=> {
                                            var padadhikariharu = this.state.projectData.padadhikariharu;
                                            return <tr key={index}>
                                                <td>
                                                    <select onChange={(event)=>{padadhikariharu[index].pada_id = event.target.value; this.setState({padadhikariharu:padadhikariharu});}}>
                                                        {this.state.padadhikari_pada_options.map((item,index)=>{
                                                            return <option value={item.id} key={index}>{item.pada}</option>
                                                        })}
                                                    </select>
                                                </td>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {this.state.padadhikari_pada_options.map((item1,index)=>{
                                                        return parseInt(item1.id)===parseInt(item.pada_id) ? item1.pada : null;
                                                    })}
                                                </td>
                                                <td><input value={item.name} onChange={(event)=>{padadhikariharu[index].name = event.target.value;this.setState({padadhikariharu:padadhikariharu});}} type="text" placeholder="नाम"/> </td>
                                                <td><input value={item.thegana} onChange={(event)=>{padadhikariharu[index].thegana = event.target.value;this.setState({padadhikariharu:padadhikariharu});}} type="text" placeholder="ठेगाना"/> </td>
                                                <td><input value={item.na_na} onChange={(event)=>{padadhikariharu[index].na_na = event.target.value;this.setState({padadhikariharu:padadhikariharu});}} type="text" placeholder="नागरिकता नं."/> </td>
                                                <td><input value={item.jilla} onChange={(event)=>{padadhikariharu[index].jilla = event.target.value;this.setState({padadhikariharu:padadhikariharu});}} type="text" placeholder="जिल्ला"/> </td>
                                                <td><img src={require('./../../icons/delete.svg').default} onClick={()=>this.handleRemoveTableRow(index)}/></td>
                                            </tr>
                                        })}
                                        <tr>
                                            <td>
                                                <select name="padadhikariharu_pada_id" onChange={this.updateText}>
                                                    {this.state.padadhikari_pada_options.map((item,index)=>{
                                                        return <option value={item.id} key={index}>{item.pada}</option>
                                                    })}
                                                </select>
                                            </td>
                                            <td>{this.state.projectData.padadhikariharu.length+1}</td>
                                            <td>
                                                {this.state.padadhikari_pada_options.map((item1,index)=>{
                                                return parseInt(item1.id)===parseInt(this.state.padadhikariharu_pada_id) ? item1.pada : null;
                                            })}
                                            </td>
                                            <td><input name="padadhikariharu_name" value={this.state.padadhikariharu_name} onChange={this.updateText} type="text" placeholder="नाम"/></td>
                                            <td><input name="padadhikariharu_thegana" value={this.state.padadhikariharu_thegana} onChange={this.updateText} type="text" placeholder="ठेगाना"/></td>
                                            <td><input name="padadhikariharu_na_na" value={this.state.padadhikariharu_na_na} onChange={this.updateText} type="text" placeholder="नागरिकता नं."/></td>
                                            <td><input name="padadhikariharu_jilla" value={this.state.padadhikariharu_jilla} onChange={this.updateText} type="text" placeholder="जिल्ला"/></td>
                                        </tr>
                                    </table>
                                    <button id="button" onClick={this.handleAddTableRow}>थप्नुहोस</button>
                                </div>
                            </div>
                            <div className="sub_title">
                                <span>ख) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या : <b id="required">*</b> </span>
                                <input name="upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya" value={this.state.projectData.upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya} onChange={this.updateText} type="text" placeholder="लाभान्वितको संख्या"/>
                            </div>
                        </div>
                        <div className="title">
                            <span>४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : <b id="required">*</b> </span>
                            <input name="anubhav_barsa" value={this.state.projectData.anubhav_barsa} onChange={this.updateText}  type="text" placeholder="अनुभव वर्ष "/>
                        </div>
                        <div className="title">
                            <span id="dropdown_option" onClick={()=>{this.setState({show_kistako_biwaran:!this.state.show_kistako_biwaran})}}>५) उपभोक्ता समिति/समुदायका आधारित संघ/गैरसरकारी संस्थाले प्राप्त गर्ने किस्ताको विवरण </span>
                            {this.state.show_kistako_biwaran ?
                            <div className="sub_title">
                                <table border='1' id="border_collapse">
                                    <tr>
                                        <td><span>किस्ताको क्रम</span></td>
                                        <td><span>मिति</span></td>
                                        <td><span>किस्ता रकम</span></td>
                                        <td><span>निर्माण सामाग्री परिमाण</span></td>
                                        <td><span>कैफियत</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>प्रथम</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.pratham_miti = date; this.setState({projectData:projectData})}} placeholder="मिति" /> </td>
                                        <td><input name="pratham_rakam" value={this.state.projectData.pratham_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="pratham_samagriko_pariman" value={this.state.projectData.pratham_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="pratham_kaifiyet" value={this.state.projectData.pratham_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>दोस्रो</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.dorshro_miti = date; this.setState({projectData:projectData})}} placeholder="मिति" /> </td>
                                        <td><input name="dorshro_rakam" value={this.state.projectData.dorshro_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="dorshro_samagriko_pariman" value={this.state.projectData.dorshro_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="dorshro_kaifiyet" value={this.state.projectData.dorshro_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>तेस्रो</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.teshro_miti = date; this.setState({projectData:projectData})}} placeholder="मिति" /> </td>
                                        <td><input name="teshro_rakam" value={this.state.projectData.teshro_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="teshro_samagriko_pariman" value={this.state.projectData.teshro_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="teshro_kaifiyet" value={this.state.projectData.teshro_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>जम्मा</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.jamma_miti = date; this.setState({projectData:projectData})}} placeholder="मिति" /> </td>
                                        <td><input name="jamma_rakam" value={this.state.projectData.jamma_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="jamma_samagriko_pariman" value={this.state.projectData.jamma_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="jamma_kaifiyet" value={this.state.projectData.jamma_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                </table>
                            </div> : null }
                        </div>
                        <div className="title">
                            <span id="dropdown_option" onClick={()=>{this.setState({show_aayojana_marmat_sambhar:!this.state.show_aayojana_marmat_sambhar})}}>६) आयोजना मर्मत सम्भार सम्बन्धि व्यवस्था </span>
                            {this.state.show_aayojana_marmat_sambhar ?
                            <div className="sub_title">
                                <table id="simple">
                                    <tr>
                                        <td><span>क) आयोजना मर्मत सम्भारको जिम्मा लिने/समिति संस्थाको नाम : </span></td>
                                        <td> <input name="yojana_marmat_jimma_line_samiti" value={this.state.projectData.yojana_marmat_jimma_line_samiti} onChange={this.updateText} type="text" placeholder="संस्थाको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ख) मर्मत सम्भारको सम्भावित श्रोत  (छ छैन खुलाउने) : </span></td>
                                        <td><input name="marmat_sambhabit_srot" value={this.state.projectData.marmat_sambhabit_srot} onChange={this.updateText} type="text" placeholder="मर्मत सम्भारको सम्भावित श्रोत"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ग) जनश्रमदान : </span></td>
                                        <td><input name="janasramdan" value={this.state.projectData.janasramdan} onChange={this.updateText} type="text" placeholder="जनश्रमदान"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>घ) सेवा शुल्क : </span></td>
                                        <td><input name="sewa_sulka" value={this.state.projectData.sewa_sulka} onChange={this.updateText} type="text" placeholder="सेवा शुल्क"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ङ) दस्तुर चन्दाबाट : </span></td>
                                        <td><input name="dastur_chandabata" value={this.state.projectData.dastur_chandabata} onChange={this.updateText} type="text" placeholder="दस्तुर चन्दाबाट"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>च) अन्य केही भए : </span></td>
                                        <td><input name="anne_kehi_vaye" value={this.state.projectData.anne_kehi_vaye} onChange={this.updateText} type="text" placeholder="अन्य केही भए"/></td>
                                    </tr>
                                </table>
                            </div> : false }
                        </div>
                        <div className="title">
                            <span>७) अन्य  </span>
                            <div className="sub_title">
                                <table id="simple">
                                    <tr>
                                        <td><span>क) प्रमुख प्रशासकीयक अधिकृतको नाम, थर : <b id="required">*</b> </span></td>
                                        <select name="pramukha_prashasakiyeko_name" onChange={this.updateText}>
                                            {this.state.ppa_options.map((item,index)=>{
                                                return <option selected={parseInt(this.state.projectData.pramukha_prashasakiyeko_name)===parseInt(item.id)} value={item.id} key={index}>{item.ppa_name}</option>
                                            })}
                                        </select>
                                    </tr>
                                    <tr>
                                        <td><span>ख) आयोजना हुने वडा नं. : <b id="required">*</b></span></td>
                                        <td>
                                            <select name="aayojana_hune_woda" onChange={this.updateText}>
                                                {this.state.ward_options.map((item,index)=>{
                                                    return <option selected={parseInt(this.state.projectData.aayojana_hune_woda)===parseInt(item.id)} value={item.id} key={index}>{item.ward_number} नं. वडा, {item.ward_name}</option>
                                                })}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>ग) आयोजनाको अन्तिम मिति. : <b id="required">*</b></span></td>
                                        <td> <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{let projectData =  this.state.projectData; projectData.aayojana_ante_miti = date; this.setState({projectData:projectData})}} placeholder=" आयोजना अन्त्य मिति" /> </td></td>
                                    </tr>
                                    <tr>
                                        <td><span>घ) समितिको अध्यक्षको सम्पर्क नं. : <b id="required">*</b></span></td>
                                        <td><input name="adaxyako_number" value={this.state.projectData.adaxyako_number} onChange={this.updateText} type="text" placeholder="अध्यक्षको सम्पर्क नं."/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ङ) कैफियत : </span></td>
                                        <td><input name="kaifiyet" value={this.state.projectData.kaifiyet} onChange={this.updateText}  type="text" placeholder="कैफियत"/></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <div id="errors">
                            {this.state.errors.map((item,index)=>{
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        <div id="submitStatus">
                            {this.state.submitStatus}
                        </div>
                        {this.state.submitSuccess ?
                            <Link to={{pathname:'/agree', id:this.state.submitSuccessId}}>प्रिन्ट गर्नुहोस</Link> : <button onClick={this.handleSubmit}>सुरक्षित गर्नुहोस</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
