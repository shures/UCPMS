import React from "react";
import './../css/project_entry.css';
import './../css/agreement_print_preview.css';
import axios from 'axios';

import {Header} from "./header";
import {NepaliDatePicker} from "datepicker-nepali-reactjs";
export class Project_entry extends React.Component{
    constructor() {
        super();
        this.state = {
            upabhokta_samitiko_naam : 'उपभोक्ता समितिको नाम',
            upabokta_samitiko_thegana : 'उपभोक्ता समितिको ठेगाना',
            aayojanako_naam : 'योजनाको नाम',
            aayojanako_sthal : 'योजनाको स्थल',
            aayojanako_udeshya : 'आयोजनाको उदस्य',
            aayojana_suru_miti : '',
            lagat_anuman : 80000,
            lagat_behorne_karyalay :150000,
            lagat_behorne_upobhokta_samiti :320000,
            lagat_behorne_anne :258555,
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
            adaxya_name: 'अध्यक्ष नाम',
            adaxya_thegana : 'अध्यक्ष ठेगाना',
            adaxya_na_number : 'अध्यक्ष ना न',
            adaxya_jilla : 'अध्यक्ष जिल्ला',
            sachib_name: 'सचिव नाम',
            sachib_thegana : 'सचिव ठेगाना',
            sachib_na_number : 'सचिव ना न',
            sachib_jilla : 'सचिव मुस्ताङ',
            kosha_name: 'कोष नाम',
            kosha_thegana : 'कोष ठेगाना',
            kosha_na_number : 'कोष ना न',
            kosha_jilla : 'कोष मुस्ताङ',
            sadasshya1_name: 'सदस्य 1 नाम',
            sadasshya1_thegana : 'सदस्य 4 ठेगाना',
            sadasshya1_na_number : 'सदस्य 1 ना न',
            sadasshya1_jilla : 'सदस्य 1 मुस्ताङ',
            sadasshya2_name: 'सदस्य 2 नाम',
            sadasshya2_thegana : 'सदस्य 2 ठेगाना',
            sadasshya2_na_number : 'सदस्य 2 ना न',
            sadasshya2_jilla : 'सदस्य 2 मुस्ताङ',
            sadasshya3_name: 'सदस्य 3 नाम',
            sadasshya3_thegana : 'सदस्य 3 ठेगाना',
            sadasshya3_na_number : 'सदस्य 3 ना न',
            sadasshya3_jilla : 'सदस्य 3 मुस्ताङ',
            sadasshya4_name: 'सदस्य 4 नाम',
            sadasshya4_thegana : 'सदस्य 4 ठेगाना',
            sadasshya4_na_number : 'सदस्य 4 ना न',
            sadasshya4_jilla : 'सदस्य 4 मुस्ताङ',
            sadasshya5_name: 'सदस्य 5 नाम',
            sadasshya5_thegana : 'सदस्य 5 ठेगाना',
            sadasshya5_na_number : 'सदस्य 5 ना न',
            sadasshya5_jilla : 'सदस्य 5 मुस्ताङ',
            sadasshya6_name: 'सदस्य 6 नाम',
            sadasshya6_thegana : 'सदस्य 6 ठेगाना',
            sadasshya6_na_number : 'सदस्य 6 ना न',
            sadasshya6_jilla : 'सदस्य 6 मुस्ताङ',
            sadasshya7_name: 'सदस्य 7 नाम ',
            sadasshya7_thegana : 'सदस्य 7 ठेगाना',
            sadasshya7_na_number : 'सदस्य 7 ना न',
            sadasshya7_jilla : 'सदस्य 7 मुस्ताङ',
            sadasshya8_name: 'सदस्य 8 नाम',
            sadasshya8_thegana : 'सदस्य 8 ठेगाना',
            sadasshya8_na_number : 'सदस्य 8 ना न',
            sadasshya8_jilla : 'सदस्य 8 मुस्ताङ',
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

            aayojana_ante_miti :'अन्य मिति',
            aayojana_hune_woda:'वडा',
            pramukha_prashasakiyeko_name:'प्रमुख प्रशासकीय नाम',
            pramukha_prashasakiyeko_number:'प्रमुख प्रशासकीय नं.',
            adaxyako_number:'अध्यक्षको नं.',
            kaifiyet:'कैफियत',

            show_bastugat_anudan:false,
            show_kistako_biwaran:false,
            show_aayojana_marmat_sambhar:false
        }
        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateText(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name==="upabhokta_samitiko_naam"){this.setState({upabhokta_samitiko_naam:value});}
        if(name==="upabokta_samitiko_thegana"){this.setState({upabokta_samitiko_thegana:value});}
        if(name==="aayojanako_naam"){this.setState({aayojanako_naam:value});}
        if(name==="aayojanako_sthal"){this.setState({aayojanako_sthal:value});}
        if(name==="aayojanako_udeshya"){this.setState({aayojanako_udeshya:value});}
        if(name==="aayojana_suru_miti"){
            alert(value);
            // this.setState({aayojana_suru_miti:value});
        }
        if(name==="lagat_anuman"){this.setState({lagat_anuman:value});}
        if(name==="lagat_behorne_karyalay"){this.setState({lagat_behorne_karyalay:value});}
        if(name==="lagat_behorne_karyalay_purbadhar"){this.setState({lagat_behorne_karyalay_purbadhar:value});}
        if(name==="lagat_behorne_karyalay_sanchit"){this.setState({lagat_behorne_karyalay_sanchit:value});}
        if(name==="lagat_behorne_upobhokta_samiti"){this.setState({lagat_behorne_upobhokta_samiti:value});}
        if(name==="lagat_behorne_anne"){this.setState({lagat_behorne_anne:value});}

        if(name==="bastugat_anudan_sangbata_samagriko_naam"){this.setState({bastugat_anudan_sangbata_samagriko_naam:value});}
        if(name==="bastugat_anudan_sangbata_ekai"){this.setState({bastugat_anudan_sangbata_ekai:value});}
        if(name==="bastugat_anudan_pradeshbata_samagriko_naam"){this.setState({bastugat_anudan_pradeshbata_samagriko_naam:value});}
        if(name==="bastugat_anudan_pradeshbata_ekai"){this.setState({bastugat_anudan_pradeshbata_ekai:value});}
        if(name==="bastugat_anudan_sthaniyebata_samagriko_naam"){this.setState({bastugat_anudan_sthaniyebata_samagriko_naam:value});}
        if(name==="bastugat_anudan_sthaniyebata_ekai"){this.setState({bastugat_anudan_sthaniyebata_ekai:value});}
        if(name==="bastugat_anudan_gairasarakaribata_samagriko_naam"){this.setState({bastugat_anudan_gairasarakaribata_samagriko_naam:value});}
        if(name==="bastugat_anudan_gairasarakaribata_ekai"){this.setState({bastugat_anudan_gairasarakaribata_ekai:value});}
        if(name==="bastugat_anudan_bideshbata_samagriko_naam"){this.setState({bastugat_anudan_bideshbata_samagriko_naam:value});}
        if(name==="bastugat_anudan_bideshbata_ekai"){this.setState({bastugat_anudan_bideshbata_ekai:value});}
        if(name==="bastugat_anudan_upobhoktasamitibata_samagriko_naam"){this.setState({bastugat_anudan_upobhoktasamitibata_samagriko_naam:value});}
        if(name==="bastugat_anudan_upokhoktasamitibata_ekai"){this.setState({bastugat_anudan_upokhoktasamitibata_ekai:value});}
        if(name==="bastugat_anudan_anne_samagriko_naam"){this.setState({bastugat_anudan_anne_samagriko_naam:value});}
        if(name==="bastugat_anudan_anne_ekai"){this.setState({bastugat_anudan_anne_ekai:value});}

        if(name==="aayojana_labhanbit_gharpariwar_sangkhya"){this.setState({aayojana_labhanbit_gharpariwar_sangkhya:value});}
        if(name==="aayojana_labhanbit_janasankhya"){this.setState({aayojana_labhanbit_janasankhya:value});}
        if(name==="aayojana_labhanbit_sangathit_sangkhya"){this.setState({aayojana_labhanbit_sangathit_sangkhya:value});}
        if(name==="aayojana_labhanbit_anne"){this.setState({aayojana_labhanbit_anne:value});}
        if(name==="gathan_vayeko_miti"){this.setState({gathan_vayeko_miti:value});}

        if(name==="adaxya_name"){this.setState({adaxya_name:value});}
        if(name==="adaxya_thegana"){this.setState({adaxya_thegana:value});}
        if(name==="adaxya_na_number"){this.setState({adaxya_na_number:value});}
        if(name==="adaxya_jilla"){this.setState({adaxya_jilla:value});}
        if(name==="sachib_name"){this.setState({sachib_name:value});}
        if(name==="sachib_thegana"){this.setState({sachib_thegana:value});}
        if(name==="sachib_na_number"){this.setState({sachib_na_number:value});}
        if(name==="sachib_jilla"){this.setState({sachib_jilla:value});}
        if(name==="kosha_name"){this.setState({kosha_name:value});}
        if(name==="kosha_thegana"){this.setState({kosha_thegana:value});}
        if(name==="kosha_na_number"){this.setState({kosha_na_number:value});}
        if(name==="kosha_jilla"){this.setState({kosha_jilla:value});}
        if(name==="sadasshya1_name"){this.setState({sadasshya1_name:value});}
        if(name==="sadasshya1_thegana"){this.setState({sadasshya1_thegana:value});}
        if(name==="sadasshya1_na_number"){this.setState({sadasshya1_na_number:value});}
        if(name==="sadasshya1_jilla"){this.setState({sadasshya1_jilla:value});}
        if(name==="sadasshya2_name"){this.setState({sadasshya2_name:value});}
        if(name==="sadasshya2_thegana"){this.setState({sadasshya2_thegana:value});}
        if(name==="sadasshya2_na_number"){this.setState({sadasshya2_na_number:value});}
        if(name==="sadasshya2_jilla"){this.setState({sadasshya2_jilla:value});}
        if(name==="sadasshya3_name"){this.setState({sadasshya3_name:value});}
        if(name==="sadasshya3_thegana"){this.setState({sadasshya3_thegana:value});}
        if(name==="sadasshya3_na_number"){this.setState({sadasshya3_na_number:value});}
        if(name==="sadasshya3_jilla"){this.setState({sadasshya3_jilla:value});}
        if(name==="sadasshya4_name"){this.setState({sadasshya4_name:value});}
        if(name==="sadasshya4_thegana"){this.setState({sadasshya4_thegana:value});}
        if(name==="sadasshya4_na_number"){this.setState({sadasshya4_na_number:value});}
        if(name==="sadasshya4_jilla"){this.setState({sadasshya4_jilla:value});}
        if(name==="sadasshya5_name"){this.setState({sadasshya5_name:value});}
        if(name==="sadasshya5_thegana"){this.setState({sadasshya5_thegana:value});}
        if(name==="sadasshya5_na_number"){this.setState({sadasshya5_na_number:value});}
        if(name==="sadasshya5_jilla"){this.setState({sadasshya5_jilla:value});}
        if(name==="sadasshya6_name"){this.setState({sadasshya6_name:value});}
        if(name==="sadasshya6_thegana"){this.setState({sadasshya6_thegana:value});}
        if(name==="sadasshya6_na_number"){this.setState({sadasshya6_na_number:value});}
        if(name==="sadasshya6_jilla"){this.setState({sadasshya6_jilla:value});}
        if(name==="sadasshya7_name"){this.setState({sadasshya7_name:value});}
        if(name==="sadasshya7_thegana"){this.setState({sadasshya7_thegana:value});}
        if(name==="sadasshya7_na_number"){this.setState({sadasshya7_na_number:value});}
        if(name==="sadasshya7_jilla"){this.setState({sadasshya7_jilla:value});}
        if(name==="sadasshya8_name"){this.setState({sadasshya8_name:value});}
        if(name==="sadasshya8_thegana"){this.setState({sadasshya8_thegana:value});}
        if(name==="sadasshya8_na_number"){this.setState({sadasshya8_na_number:value});}
        if(name==="sadasshya8_jilla"){this.setState({sadasshya8_jilla:value});}

        if(name==="upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya"){this.setState({upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya:value});}
        if(name==="anubhav_barsa"){this.setState({anubhav_barsa:value});}

        if(name==="pratham_miti"){this.setState({pratham_miti:value});}
        if(name==="pratham_rakam"){this.setState({pratham_rakam:value});}
        if(name==="pratham_samagriko_pariman") {this.setState({pratham_samagriko_pariman:value});}
        if(name==="pratham_kaifiyet"){this.setState({pratham_kaifiyet:value});}
        if(name==="dorshro_miti"){this.setState({dorshro_miti:value});}
        if(name==="dorshro_rakam"){this.setState({dorshro_rakam:value});}
        if(name==="dorshro_samagriko_pariman"){this.setState({dorshro_samagriko_pariman:value});}
        if(name==="dorshro_kaifiyet"){this.setState({dorshro_kaifiyet:value});}
        if(name==="teshro_miti"){this.setState({teshro_miti:value});}
        if(name==="teshro_rakam"){this.setState({teshro_rakam:value});}
        if(name==="teshro_samagriko_pariman"){this.setState({teshro_samagriko_pariman:value});}
        if(name==="teshro_kaifiyet"){this.setState({teshro_kaifiyet:value});}
        if(name==="jamma_miti"){this.setState({jamma_miti:value});}
        if(name==="jamma_rakam"){this.setState({jamma_rakam:value});}
        if(name==="jamma_samagriko_pariman"){this.setState({jamma_samagriko_pariman:value});}
        if(name==="jamma_kaifiyet"){this.setState({jamma_kaifiyet:value});}

        if(name==="yojana_marmat_jimma_line_samiti"){this.setState({yojana_marmat_jimma_line_samiti:value});}
        if(name==="marmat_sambhabit_srot"){this.setState({marmat_sambhabit_srot:value});}
        if(name==="janasramdan"){this.setState({janasramdan:value});}
        if(name==="sewa_sulka"){this.setState({sewa_sulka:value});}
        if(name==="dastur_chandabata"){this.setState({dastur_chandabata:value});}
        if(name==="anne_kehi_vaye"){this.setState({anne_kehi_vaye:value});}

        if(name==="aayojana_ante_miti"){this.setState({aayojana_ante_miti:value});}
        if(name==="aayojana_hune_woda"){this.setState({aayojana_hune_woda:value});}
        if(name==="pramukha_prashasakiyeko_name"){this.setState({pramukha_prashasakiyeko_name:value});}
        if(name==="pramukha_prashasakiyeko_number"){this.setState({pramukha_prashasakiyeko_number:value});}
        if(name==="adaxyako_number"){this.setState({adaxyako_number:value});}
        if(name==="kaifiyet"){this.setState({kaifiyet:value});}
    }
    handleSubmit(){
        axios({
            method: 'post',
            url: localStorage.getItem('server')+'api/putData',
            data: this.state,
        }).then(function (response) {
            console.log(response.data);
        });
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
                                        <td><input name="upabhokta_samitiko_naam" value={this.state.upabhokta_samitiko_naam} onChange={this.updateText} id="long_width" type="text" placeholder="उपभोक्ता समितिको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ठेगाना : <b id="required">*</b></span></td>
                                        <td><input name="upabokta_samitiko_thegana" type="text" value={this.state.upabokta_samitiko_thegana} onChange={this.updateText} placeholder=" उपभोक्ता समितिको ठेगाना"/></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="sub_title">
                                <span>ख) आयोजनाको विवरण </span>
                                <table id="simple">
                                    <tr>
                                        <td><span>नाम : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_naam" id="long_width" value={this.state.aayojanako_naam} onChange={this.updateText} type="text" placeholder="आयोजनाको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>आयोजना स्थल : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_sthal" type="text" value={this.state.aayojanako_sthal} onChange={this.updateText} placeholder="आयोजना स्थल"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>उदेश्य : <b id="required">*</b></span></td>
                                        <td><input name="aayojanako_udeshya" type="text" value={this.state.aayojanako_udeshya} onChange={this.updateText} placeholder="आयोजना उदेश्य"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>आयोजना शुरु हुने मिति : <b id="required">*</b></span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({aayojana_suru_miti:date})}} placeholder="आयोजना शुरु हुने मिति" /></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="sub_title">
                                <span>ग) आयोजनाको लाभान्वित हुने</span>
                                <table id="simple">
                                    <tr>
                                        <td><span>घरपरियार संख्या : <b id="required">*</b></span></td>
                                        <td><input name="aayojana_labhanbit_gharpariwar_sangkhya" value={this.state.aayojana_labhanbit_gharpariwar_sangkhya} onChange={this.updateText} type="text" placeholder="घरपरियार संख्या"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>जनसंख्या : <b id="required">*</b></span></td>
                                        <td><input name="aayojana_labhanbit_janasankhya" value={this.state.aayojana_labhanbit_janasankhya} onChange={this.updateText} type="text" placeholder="उपभोक्ता समिति"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>संगठित संख्या :</span></td>
                                        <td><input name="aayojana_labhanbit_sangathit_sangkhya" value={this.state.aayojana_labhanbit_sangathit_sangkhya} onChange={this.updateText} type="text" placeholder="संगठित संख्या"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>अन्य :</span></td>
                                        <td><input name='aayojana_labhanbit_anne' value={this.state.aayojana_labhanbit_anne} onChange={this.updateText} type="text" placeholder="अन्य"/></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="title">
                            <span>२) आयोजना लागत सम्बन्धि विवरण </span>
                            <div className="sub_title">
                                <span>क) लागत अनुमान रु : <b id="required">*</b></span>
                                <input name="lagat_anuman" value={this.state.lagat_anuman} onChange={this.updateText} type="text" placeholder="लागत अनुमान रु "/>
                            </div>
                            <div className="sub_title">
                                <span>ख) लागत व्यहोर्ने स्रोतहरु</span>
                                <table id="simple">
                                    <tr>
                                        <td><span>कार्यालय : <b id="required">*</b> </span></td>
                                        <td><input name="lagat_behorne_karyalay" value={this.state.lagat_behorne_karyalay} onChange={this.updateText} type="text" placeholder="कार्यालय"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>उपभोक्ता समिति : <b id="required">*</b></span></td>
                                        <td><input name="lagat_behorne_upobhokta_samiti" value={this.state.lagat_behorne_upobhokta_samiti} onChange={this.updateText} type="text" placeholder="उपभोक्ता समिति"/></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>अन्य :
                                                <select>
                                                    <option>अन्य</option>
                                                    <option>प्रदेश साझेदारीबाट</option>
                                                    <option>पहिलाको बाँकी रकमबाट</option>
                                                </select>
                                            </span>
                                        </td>
                                        <td><input name="lagat_behorne_anne" value={this.state.lagat_behorne_anne} onChange={this.updateText} type="text" placeholder="अन्य"/></td>
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
                                        <td><input name='bastugat_anudan_sangbata_samagriko_naam' onChange={this.updateText} value={this.state.bastugat_anudan_sangbata_samagriko_naam} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_sangbata_ekai' value={this.state.bastugat_anudan_sangbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>2</span></td>
                                        <td><span>प्रदेशबाट</span></td>
                                        <td><input name='bastugat_anudan_pradeshbata_samagriko_naam' value={this.state.bastugat_anudan_pradeshbata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_pradeshbata_ekai' value={this.state.bastugat_anudan_pradeshbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>3</span></td>
                                        <td><span>स्थानीय तहबाट</span></td>
                                        <td><input name='bastugat_anudan_sthaniyebata_samagriko_naam' value={this.state.bastugat_anudan_sthaniyebata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_sthaniyebata_ekai' value={this.state.bastugat_anudan_sthaniyebata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>4</span></td>
                                        <td><span>गैह्रसरकारी तहबाट</span></td>
                                        <td><input name='bastugat_anudan_gairasarakaribata_samagriko_naam' value={this.state.bastugat_anudan_gairasarakaribata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_gairasarakaribata_ekai' value={this.state.bastugat_anudan_gairasarakaribata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>5</span></td>
                                        <td><span>विदेशी दातृ निकायबाट</span></td>
                                        <td><input name='bastugat_anudan_bideshbata_samagriko_naam' value={this.state.bastugat_anudan_bideshbata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_bideshbata_ekai' value={this.state.bastugat_anudan_bideshbata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>6</span></td>
                                        <td><span>उपभोक्ता समितिबाट</span></td>
                                        <td><input name='bastugat_anudan_upobhoktasamitibata_samagriko_naam' value={this.state.bastugat_anudan_upobhoktasamitibata_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_upokhoktasamitibata_ekai' value={this.state.bastugat_anudan_upokhoktasamitibata_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>7</span></td>
                                        <td><span>अन्य निकायबाट</span></td>
                                        <td><input name='bastugat_anudan_anne_samagriko_naam' value={this.state.bastugat_anudan_anne_samagriko_naam} onChange={this.updateText} type="text" placeholder="सामाग्रीको नाम"/> </td>
                                        <td><input name='bastugat_anudan_anne_ekai' value={this.state.bastugat_anudan_anne_ekai} onChange={this.updateText} type="text" placeholder="एकाई"/> </td>
                                    </tr>
                                </table> :null }
                            </div>
                        </div>
                        <div className="title">
                            <span>३) उपभोक्ता समिति/गैरसरकारी सघसंस्था/समुदायमा आधारित संस्था सम्बन्धि विवरण </span>
                            <div className="sub_title" style={{display:'flex',flexDirection:'row'}}>
                                <span style={{marginRight:'10px'}}>क) गठन भएको मिति : <b id="required">*</b></span>
                                <NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({gathan_vayeko_miti:date})}} placeholder="गठन भएको मिति" />
                            </div>
                            <div className="sub_title">
                                <span>ख) पदाधिकारीहरुको नाम <b id="required">*</b></span>
                                <div className="sub_sub_title">
                                    <table border='1' id="border_collapse">
                                        <tr>
                                            <td><span>क्र.सं.</span></td>
                                            <td><span>पद</span></td>
                                            <td><span>नाम,थर</span></td>
                                            <td><span>ठेगाना</span></td>
                                            <td><span>ना.प्र.प.नं.</span></td>
                                            <td><span>जिल्ला</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>1</span></td>
                                            <td><span>अध्यक्ष</span></td>
                                            <td><input name='adaxya_name' value={this.state.adaxya_name} onChange={this.updateText} type="text" placeholder="अध्यक्षको नाम,थर"/></td>
                                            <td><input name='adaxya_thegana' value={this.state.adaxya_thegana} onChange={this.updateText} type="text" placeholder="अध्यक्षको ठेगाना"/></td>
                                            <td><input name='adaxya_na_number' value={this.state.adaxya_na_number} onChange={this.updateText} type="text" placeholder="अध्यक्षको नागरिता नं."/></td>
                                            <td><input name='adaxya_jilla' value={this.state.adaxya_jilla} onChange={this.updateText} type="text" placeholder="अध्यक्षको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>2</span></td>
                                            <td><span>सचिव</span></td>
                                            <td><input type="text" name="sachib_name" value={this.state.sachib_name} onClick={this.updateText} placeholder="सचिवको नाम,थर"/></td>
                                            <td><input type="text" name="sachib_thegana" value={this.state.sachib_thegana} onClick={this.updateText} placeholder="सचिवको ठेगाना"/></td>
                                            <td><input type="text" name="sachib_na_number" value={this.state.sachib_na_number} onClick={this.updateText} placeholder="सचिवको ना.प्र.प.नं."/></td>
                                            <td><input type="text" name="sachib_jilla" value={this.state.sachib_jilla} onClick={this.updateText} placeholder="सचिवको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>3</span></td>
                                            <td><span>कोषादध्य</span></td>
                                            <td><input name="kosha_name" value={this.state.kosha_name} onClick={this.updateText} type="text" placeholder="कोषादध्यको नाम,थर"/></td>
                                            <td><input name="kosha_thegana" value={this.state.kosha_thegana} onClick={this.updateText} type="text" placeholder="कोषादध्यको ठेगाना"/></td>
                                            <td><input name="kosha_na_number" value={this.state.kosha_na_number} onClick={this.updateText} type="text" placeholder="कोषादध्यको ना.प्र.प.नं."/></td>
                                            <td><input name="kosha_jilla" value={this.state.kosha_jilla} onClick={this.updateText} type="text" placeholder="कोषादध्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>4</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya1_name" value={this.state.sadasshya1_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya1_thegana" value={this.state.sadasshya1_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya1_na_number" value={this.state.sadasshya1_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya1_jilla" value={this.state.sadasshya1_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>5</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya2_name" value={this.state.sadasshya2_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya2_thegana" value={this.state.sadasshya2_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya2_na_number" value={this.state.sadasshya2_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya2_jilla" value={this.state.sadasshya2_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>6</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya3_name" value={this.state.sadasshya3_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya3_thegana" value={this.state.sadasshya3_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya3_na_number" value={this.state.sadasshya3_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya3_jilla" value={this.state.sadasshya3_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>7</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya4_name" value={this.state.sadasshya4_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya4_thegana" value={this.state.sadasshya4_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya4_na_number" value={this.state.sadasshya4_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya4_jilla" value={this.state.sadasshya4_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>8</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya5_name" value={this.state.sadasshya5_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya5_thegana" value={this.state.sadasshya5_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya5_na_number" value={this.state.sadasshya5_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya5_jilla" value={this.state.sadasshya5_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>9</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya6_name" value={this.state.sadasshya6_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya6_thegana" value={this.state.sadasshya6_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya6_na_number" value={this.state.sadasshya6_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya6_jilla" value={this.state.sadasshya6_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>10</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya7_name" value={this.state.sadasshya7_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya7_thegana" value={this.state.sadasshya7_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya7_na_number" value={this.state.sadasshya7_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya7_jilla" value={this.state.sadasshya7_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                        <tr>
                                            <td><span>11</span></td>
                                            <td><span>सदस्य</span></td>
                                            <td><input name="sadasshya8_name" value={this.state.sadasshya8_name} onChange={this.updateText} type="text" placeholder="सदस्यको नाम,थर"/></td>
                                            <td><input name="sadasshya8_thegana" value={this.state.sadasshya8_thegana} onChange={this.updateText} type="text" placeholder="सदस्यको ठेगाना"/></td>
                                            <td><input name="sadasshya8_na_number" value={this.state.sadasshya8_na_number} onChange={this.updateText} type="text" placeholder="सदस्यको ना.प्र.प.नं."/></td>
                                            <td><input name="sadasshya8_jilla" value={this.state.sadasshya8_jilla} onChange={this.updateText} type="text" placeholder="सदस्यको जिल्ला"/></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="sub_title">
                                <span>ख) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या : <b id="required">*</b> </span>
                                <input name="upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya" value={this.state.upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya} onChange={this.updateText} type="text" placeholder="लाभान्वितको संख्या"/>
                            </div>
                        </div>
                        <div className="title">
                            <span>४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : <b id="required">*</b> </span>
                            <input name="anubhav_barsa" value={this.state.anubhav_barsa} onChange={this.updateText}  type="text" placeholder="अनुभव वर्ष "/>
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
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({pratham_miti:date})}} placeholder="मिति" /> </td>
                                        <td><input name="pratham_rakam" value={this.state.pratham_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="pratham_samagriko_pariman" value={this.state.pratham_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="pratham_kaifiyet" value={this.state.pratham_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>दोस्रो</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({dorshro_miti:date})}} placeholder="मिति" /> </td>
                                        <td><input name="dorshro_rakam" value={this.state.dorshro_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="dorshro_samagriko_pariman" value={this.state.dorshro_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="dorshro_kaifiyet" value={this.state.dorshro_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>तेस्रो</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({teshro_miti:date})}} placeholder="मिति" /> </td>
                                        <td><input name="teshro_rakam" value={this.state.teshro_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="teshro_samagriko_pariman" value={this.state.teshro_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="teshro_kaifiyet" value={this.state.teshro_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
                                    </tr>
                                    <tr>
                                        <td><span>जम्मा</span></td>
                                        <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({jamma_miti:date})}} placeholder="मिति" /> </td>
                                        <td><input name="jamma_rakam" value={this.state.jamma_rakam} onChange={this.updateText} type="text" placeholder="रकम"/> </td>
                                        <td><input name="jamma_samagriko_pariman" value={this.state.jamma_samagriko_pariman} onChange={this.updateText} type="text" placeholder="परिमाण"/> </td>
                                        <td><input name="jamma_kaifiyet" value={this.state.jamma_kaifiyet} onChange={this.updateText} type="text" placeholder="कैफियत"/> </td>
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
                                        <td> <input name="yojana_marmat_jimma_line_samiti" value={this.state.yojana_marmat_jimma_line_samiti} onChange={this.updateText} type="text" placeholder="संस्थाको नाम"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ख) मर्मत सम्भारको सम्भावित श्रोत  (छ छैन खुलाउने) : </span></td>
                                        <td><input name="marmat_sambhabit_srot" value={this.state.marmat_sambhabit_srot} onChange={this.updateText} type="text" placeholder="मर्मत सम्भारको सम्भावित श्रोत"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ग) जनश्रमदान : </span></td>
                                        <td><input name="janasramdan" value={this.state.janasramdan} onChange={this.updateText} type="text" placeholder="जनश्रमदान"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>घ) सेवा शुल्क : </span></td>
                                        <td><input name="sewa_sulka" value={this.state.sewa_sulka} onChange={this.updateText} type="text" placeholder="सेवा शुल्क"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ङ) दस्तुर चन्दाबाट : </span></td>
                                        <td><input name="dastur_chandabata" value={this.state.dastur_chandabata} onChange={this.updateText} type="text" placeholder="दस्तुर चन्दाबाट"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>च) अन्य केही भए : </span></td>
                                        <td><input name="anne_kehi_vaye" value={this.state.anne_kehi_vaye} onChange={this.updateText} type="text" placeholder="अन्य केही भए"/></td>
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
                                        <td><input name="pramukha_prashasakiyeko_name" value={this.state.pramukha_prashasakiyeko_name} onChange={this.updateText} type="text" placeholder="नाम, थर"/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ख) प्रमुख प्रशासकीयक अधिकृतको सम्पर्क नं. : <b id="required">*</b></span></td>
                                        <td><input name="pramukha_prashasakiyeko_number" value={this.state.pramukha_prashasakiyeko_number} onChange={this.updateText} type="text" placeholder="सम्पर्क नं."/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ग) आयोजनाको अन्तिम मिति. : <b id="required">*</b></span></td>
                                        <td> <td><NepaliDatePicker defaultDate={true} onDateSelect={(date)=>{this.setState({aayojana_ante_miti:date})}} placeholder=" आयोजना अन्त्य मिति" /> </td></td>
                                    </tr>
                                    <tr>
                                        <td><span>घ) आयोजना हुने वडा नं. : <b id="required">*</b></span></td>
                                        <td><input name="aayojana_hune_woda" value={this.state.aayojana_hune_woda} onChange={this.updateText} type="text" placeholder="वडा नं."/></td>
                                    </tr>
                                    <tr>
                                        <td><span>ङ) समितिको अध्यक्षको सम्पर्क नं. : <b id="required">*</b></span></td>
                                        <td><input name="adaxyako_number" value={this.state.adaxyako_number} onChange={this.updateText} type="text" placeholder="अध्यक्षको सम्पर्क नं."/></td>
                                    </tr>
                                    <tr>
                                        <td><span>च) कैफियत : </span></td>
                                        <td><input name="kaifiyet" value={this.state.kaifiyet} onChange={this.updateText}  type="text" placeholder="कैफियत"/></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <button onClick={this.handleSubmit}>सुरक्षित गर्नुहोस</button>
                    </div>
                </div>
            </div>
        );
    }
}
// export class AgreementPrintPreview extends React.Component{
//     render() {
//         return (
//             <div id="agreement_print_preview">
//                 <Header/>
//                 <div id="container">
//                     <div id='title'>
//                        <button>प्रिन्ट गर्नुहोस</button>
//                     </div>
//                     <div id="agreement_a4">
//                         <div id="agreement_header">
//                             <img src={require('./../files/emblem_logo.png').default}/>
//                             <div id="title">
//                                 <span>थासाङ गाउँपालिका</span>
//                                 <span>गाउँकार्यपालिकाको कार्यालय</span>
//                                 <span>कोबाङ, मुस्ताङ</span>
//                             </div>
//                         </div>
//                         <div id="body">
//                             <div className="item">
//                                 <div id="name">
//                                     १) सम्झौता गर्ने पक्ष र आयोजना
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         क) उपभोत्ता समितिको विवरण
//                                     </div>
//                                     <div className="sub-title">
//                                         <table id="simple">
//                                             <tr>
//                                                 <td><span>१) नाम : </span></td>
//                                                 <td><b>अन्नपूर्ण हिमाल पदमार्ग निर्माण उपभोक्ता समिति</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>२) ठेगाना :</span></td>
//                                                 <td><b>थासाङ-2, कोबाङ</b></td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         ख) आयोजनाको विवरण
//                                     </div>
//                                     <div className="sub-title">
//                                         <table id="simple">
//                                             <tr>
//                                                 <td><span>१) नाम :</span></td>
//                                                 <td><b>जन आदर्शमा वाल निर्माण तथा समक्षण </b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>२) आयोजना स्थल :</span></td>
//                                                 <td><b>थासाङ-2, कोबाङ</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>३) उदेश्य :</span></td>
//                                                 <td><b>जन आदर्शमा बाल निर्माण तथा समंक्षण गर्ने</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>४) आयोजना सुरु हुने मिति :</span></td>
//                                                 <td><b>२०३३/२४/५</b></td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div id="name">
//                                     २) आयोजना लागत सम्बन्धि विवरण
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         क) लागत अनुमान रु : <b>१२३४५६</b>
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         ख) लागत व्यहोर्ने स्रोतहरु
//                                     </div>
//                                     <div className="sub-title">
//                                         <table id="simple">
//                                             <tr>
//                                                 <td><span>१) कार्यलय :</span></td>
//                                                 <td><b>३५३४५३५४</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>२) उपभोत्ता समिति :</span></td>
//                                                 <td><b>३४३४३४३४</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>३) अन्य</span></td>
//                                                 <td><b></b></td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         ग) बस्तुगत अनुदानको विवरण
//                                     </div>
//                                     <div className="sub-title">
//                                         <table border="1" id="table">
//                                             <tr>
//                                                 <th>क्र.स.</th> <th>बस्तुगत अनुदानको विवरण</th>  <th>सामाग्रीको नाम</th>  <th>एकाई</th>
//                                             </tr>
//                                             <tr>
//                                                 <td>१</td><td>संघबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>२</td><td>प्रदेशबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>३</td><td>स्थानीय तहबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>४</td><td>गैह्रसरकारी तहबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>५</td><td>विदेशी दातृ निकायबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>६</td><td>उपभोक्ता समितिबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td>६</td><td>अन्य निकायबाट</td><td><b></b></td><td><b></b></td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         घ ) आयोजनाको लाभान्वित हुने
//                                     </div>
//                                     <div className="sub-title">
//                                         <table id="simple">
//                                             <tr>
//                                                 <td><span>१) घरपरियार संख्या :</span></td>
//                                                 <td><b>६७</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>२) जनसंख्या :</span></td>
//                                                 <td><b>४५६</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>३) संगठित संख्या :</span></td>
//                                                 <td><b>8</b></td>
//                                             </tr>
//                                             <tr>
//                                                 <td><span>३) अन्य :</span></td>
//                                                 <td><b></b></td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div id="name">
//                                     ३) उपभोत्ता समिति/गैरसरकारी सघसंस्था/समुदायमा आधारित संस्था सम्बन्धि विवरण
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         क) गठन भएको मिति : <b>२०१२/२३/३४</b>
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         ख) पदाघिकारीहरुको नाम
//                                     </div>
//                                     <div className="sub-title">
//                                         {/*<table border="1">*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>क्र.स.</th><td>पद</td> <td>नाम थर</td> <td>ठेगाना</td> <td>नना.प्र.प.नं </td> <td>जिल्ला</td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>१</th><td>अध्यक्ष</td><td><b>{this.state.data[3].adaxya_name}</b></td><td><b>{this.state.data[3].adaxya_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].adaxya_thegana }</b></td><td><b>{this.state.data[3].adaxya_na_number}</b></td><td><b>{this.state.data[3].adaxya_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>२</th><td>सचिव</td><td><b>{this.state.data[3].sachib_name}</b></td><td><b>{this.state.data[3].sachib_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sachib_thegana }</b></td><td><b>{this.state.data[3].sachib_na_number}</b></td><td><b>{this.state.data[3].sachib_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>३</th><td>कोषादध्क्ष</td><td><b>{this.state.data[3].kosha_name}</b></td><td><b>{this.state.data[3].kosha_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].kosha_thegana }</b></td><td><b>{this.state.data[3].kosha_na_number}</b></td><td><b>{this.state.data[3].kosha_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>४</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya1_name}</b></td><td><b>{this.state.data[3].sadasshya1_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya1_thegana}</b></td><td><b>{this.state.data[3].sadasshya1_na_number}</b></td><td><b>{this.state.data[3].sadasshya1_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>५</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya2_name}</b></td><td><b>{this.state.data[3].sadasshya2_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya2_thegana}</b></td><td><b>{this.state.data[3].sadasshya2_na_number}</b></td><td><b>{this.state.data[3].sadasshya2_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>६</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya3_name}</b></td><td><b>{this.state.data[3].sadasshya3_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya3_thegana}</b></td><td><b>{this.state.data[3].sadasshya3_na_number}</b></td><td><b>{this.state.data[3].sadasshya3_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//                                         {/*    <tr>*/}
//                                         {/*        <th>७</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya4_name}</b></td><td><b>{this.state.data[3].sadasshya4_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya4_thegana}</b></td><td><b>{this.state.data[3].sadasshya4_na_number}</b></td><td><b>{this.state.data[3].sadasshya4_jilla}</b></td>*/}
//                                         {/*    </tr>*/}
//
//                                         {/*    {this.state.data[3].sadasshya5_name!=="" ?*/}
//                                         {/*        <tr>*/}
//                                         {/*            <th>८</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya5_name}</b></td><td><b>{this.state.data[3].sadasshya5_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya5_thegana}</b></td><td><b>{this.state.data[3].sadasshya5_na_number}</b></td><td><b>{this.state.data[3].sadasshya5_jilla}</b></td>*/}
//                                         {/*        </tr> : null}*/}
//
//                                         {/*    {this.state.data[3].sadasshya6_name!=="" ?*/}
//                                         {/*        <tr>*/}
//                                         {/*            <th>९</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya6_name}</b></td><td><b>{this.state.data[3].sadasshya6_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya6_thegana}</b></td><td><b>{this.state.data[3].sadasshya6_na_number}</b></td><td><b>{this.state.data[3].sadasshya6_jilla}</b></td>*/}
//                                         {/*        </tr> : null}*/}
//
//                                         {/*    {this.state.data[3].sadasshya7_name!=="" ?*/}
//                                         {/*        <tr>*/}
//                                         {/*            <th>१०</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya7_name}</b></td><td><b>{this.state.data[3].sadasshya7_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya7_thegana}</b></td><td><b>{this.state.data[3].sadasshya7_na_number}</b></td><td><b>{this.state.data[3].sadasshya1_jilla}</b></td>*/}
//                                         {/*        </tr> : null}*/}
//
//                                         {/*    {this.state.data[3].sadasshya8_name!=="" ?*/}
//                                         {/*        <tr>*/}
//                                         {/*            <th>११</th><td>सदस्य</td><td><b>{this.state.data[3].sadasshya8_name}</b></td><td><b>{this.state.data[3].sadasshya8_thegana==="" ? this.state.data[0].upabokta_samitiko_thegana  : this.state.data[3].sadasshya8_thegana}</b></td><td><b>{this.state.data[3].sadasshya8_na_number}</b></td><td><b>{this.state.data[3].sadasshya8_jilla}</b></td>*/}
//                                         {/*        </tr>:null}*/}
//                                         {/*</table>*/}
//                                     </div>
//                                 </div>
//                                 <div className="title">
//                                     <div id="name">
//                                         क) उपभोक्ता समिति गठन गर्दा उपस्थित लाभान्वितको संख्या  : <b>२३</b>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div id="name">
//                                     ४) आयोजना संचालन सम्बन्धि अनुभव वर्ष : <b>३</b>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div id="name">
//                                     ५) उपभोक्ता समिति/समुदायका आधारित संध/गैरसरकारी स‌स्थाले प्राप्त गर्ने किस्ताको विवरण ।
//                                 </div>
//                                 <div className="title">
//                                     {/*<table border="1">*/}
//                                     {/*    <tr>*/}
//                                     {/*        <th>किस्ताको क्रम</th><th>मिति</th><th>किस्ता रकम</th><th>निर्माण सामग्री परिमाण</th><th>कैफियत</th>*/}
//                                     {/*    </tr>*/}
//                                     {/*    <tr>*/}
//                                     {/*        <td>प्रथम</td><td><b>{this.state.data[1].pratham_miti}</b></td><td><b>{this.state.data[1].pratham_kistarakam}</b></td><td><b>{this.state.data[1].pratham_pariman}</b></td><td><b>{this.state.data[1].pratham_kaifiyet}</b></td>*/}
//                                     {/*    </tr>*/}
//                                     {/*    <tr>*/}
//                                     {/*        <td>दोस्रो</td><td><b>{this.state.data[1].dorshro_miti}</b></td><td><b>{this.state.data[1].dorshro_kistarakam}</b></td><td><b>{this.state.data[1].dorshro_pariman}</b></td><td><b>{this.state.data[1].dorshro_kaifiyet}</b></td>*/}
//                                     {/*    </tr>*/}
//                                     {/*    <tr>*/}
//                                     {/*        <td>तेस्रो</td><td><b>{this.state.data[1].teshro_miti}</b></td><td><b>{this.state.data[1].teshro_kistarakam}</b></td><td><b>{this.state.data[1].teshro_pariman}</b></td><td><b>{this.state.data[1].teshro_kaifiyet}</b></td>*/}
//                                     {/*    </tr>*/}
//                                     {/*    <tr>*/}
//                                     {/*        <td>जम्मा</td><td><b>{this.state.data[1].jamma_miti}</b></td><td><b>{this.state.data[1].jamma_kistarakam}</b></td><td><b>{this.state.data[1].jamma_pariman}</b></td><td><b>{this.state.data[1].jamma_kaifiyet}</b></td>*/}
//                                     {/*    </tr>*/}
//                                     {/*</table>*/}
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div id="name">
//                                     ६) आयोजना मर्मत सम्भार सम्बन्धि व्यवस्था
//                                 </div>
//                                 <div className="title">
//                                     <table id="simple">
//                                         <tr>
//                                             <td><span>क ) आयोजना मर्मत सम्भारको जिम्मा लिने/समिति संस्थाको नाम :</span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>ख ) मर्मत सम्भारको सम्भावित श्रौत (छ छैन खुलाउने ) :</span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>ग ) जनश्रमदान : </span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>घ ) सेवा शुल्क : </span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span>ङ ) दस्तुर चन्दाबाट : </span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                         <tr>
//                                             <td><span> च ) अन्य केही भए : </span></td>
//                                             <td><b></b></td>
//                                         </tr>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                         <div id="sarta">
//                             <div id="title">
//                                 सम्झौताका शर्तहरु
//                             </div>
//                             <div id="head">उपभोत्ता समितिको जिम्मेवारी तथा पालना गर्नुपर्ने शर्तहरु :</div>
//                             <ol>
//                                 <li>आयोजना शुरु मिति <b></b> देखि शुरु गरी मिति <b></b> सम्ममा पुरा गर्नु पर्नेछ ।</li>
//                                 <li>प्राप्त रकम तथा निर्माण सामाग्री सम्बन्धित आयोजनाको उद्देश्यका लागि मात्र प्रयोग गर्नुपर्नेछ ।</li>
//                                 <li>नगदी, जिन्सी सामानको प्राप्ती, खर्च र बाँकी तथा आयोजनाको प्रगति विवरण राख्नु पर्नेछ ।</li>
//                                 <li>आम्दानी खर्चको विवरण र कार्यप्रगतिको जानकारी उपभोक्ता समूहमा छलफल गरी अर्को किस्ता माग गर्नु पर्नेछ ।</li>
//                                 <li>आयोजनाको कुल लागत भन्दा घटी लागतमा आयोजना सम्पन्न भएको अवस्थामा सो मुताविकनै अनुदान र श्रमदानको प्रतिशत निर्धारण गरी भुक्तानी लिनु पर्नेछ ।</li>
//                                 <li>उपभोक्ता समितिले प्राविधिकको राय परामर्श एवं निर्देशन अनुरुप काम गर्नु पर्नेछ । </li>
//                                 <li>उपभोक्ता समितिले आयोजनासंग सम्बन्धित विल, भरपाईहरु, डोर हाजिरी फारामहरु, जिन्सी नगदी खाताहरु, समिति÷समुहको निर्णय पुस्तिका आदि कागजातहरु कार्यालयले मागेको बखत उपलब्ध गराउनु पर्नेछ र त्यसको लेखापरीक्षण गराउनुपर्नेछ ।</li>
//                                 <li>कुनै सामाग्री खरिद गर्दा आन्तरिक राजश्व कार्यालयबाट स्थायी लेखा नम्बर र मूल्य अभिवृद्धि कर दर्ता प्रमाण पत्र प्राप्त व्यक्ति वा फर्म संस्था वा कम्पनीबाट खरिद गरी सोही अनुसारको विल भरपाई आधिकारीक व्यक्तिबाट प्रमाणित गरी पेश गर्नु पर्नेछ । </li>
//                                 <li>मूल्य अभिवृद्धि कर लाग्ने बस्तु तथा सेवा खरिद गर्दा रु २००००  भन्दा बढी मूल्यको सामाग्रीमा अनिवार्य रुपमा मूल्य अभिवृद्धि कर दर्ता प्रमाणपत्र प्राप्त गरेका ब्यक्ति फर्म संस्था वा कम्पनीबाट खरिद गर्नु पर्नेछ । साथै उक्त विलमा उल्लिखित मु.अ. कर बाहेकको रकममा १.५ प्रतिशत अग्रीम आयकर बापत कर कट्टी गरी बाँकी रकम मात्र सम्बन्धित सेवा प्रदायकलाई भुक्तानी हुनेछ । रु २०००० भन्दा कम मूल्यको सामाग्री खरिदमा पान नम्बर लिएको व्यक्ति वा फर्मबाट खरिद गर्नु पर्नेछ । अन्यथा खरिद गर्ने पदाधिकारी स्वयम् जिम्मेवार हुनेछ ।</li>
//                                 <li>डोजर रोलर लगायतका मेशिनरी सामान भाडामा लिएको एवम् घर बहालमा लिई विल भरपाई पेश भएको अवस्थामा १० प्रतिशत घर भाडा कर एवम् बहाल कर तिर्नु पर्नेछ । </li>
//                                 <li>रशिक्षकले पाउने पारिश्रमिक एवम् सहभागीले पाउने भत्तामा प्रचलित नियमानुसार कर लाग्नेछ । </li>
//                                 <li>निर्माण कार्यको हकमा शुरु लागत अनुमानका कुनै आईटमहरुमा परिवर्तन हुने भएमा अधिकार प्राप्त व्यक्ति वा कार्यालयबाट लागत अनुमान संशोधन गरे पश्चात् मात्र कार्य गराउनुपर्नेछ । यसरी लागत अनुमान संशोधन नगरी कार्य गरेमा उपभोक्ता समिति नै जिम्मेवार हुनेछ । </li>
//                                 <li>उपभोक्ता समितिले काम सम्पन्न गरिसकेपछि बाँकी रहन गएका खप्ने सामानहरु मर्मत सम्भार समिति गठन भएको भए सो समितिलाई र सो नभए गाउँ कार्यपालिका कार्यालयलाई बुझाउनु पर्नेछ । तर मर्मत सम्भार समितिलाई बुझाएको सामानको एक प्रति गाउँ कार्यपालिका कार्यालयलाई जानकारीको लागि बुझाउनु पर्नेछ । </li>
//                                 <li>सम्झौता बमोजिम आयोजना सम्पन्न भएपछि अन्तिम भुक्तानीको लागि कार्यसम्पन्न प्रतिवेदन, नापी किताब, प्रमाणित विल भरपाई, योजनाको फोटो, सम्बन्धित उपभोक्ता समितिले आयोजना सञ्चालन गर्दा भएको आय व्ययको अनुमोदन सहितको निर्णय, उपभोक्ता भेलाबाट भएको सार्वजनिक लेखा परीक्षणको निर्णयको प्रतिलिपि तथा सम्बन्धित आयोजना सञ्चालन भएको वडा कार्यालयको सिफारिश सहित अन्तिम किस्ता भुक्तानीको लागि निवेदन पेश गर्नु पर्नेछ । </li>
//                                 <li>आयोजना सम्पन्न भए पछि गाउँ कार्यपालिका कार्यालयबाट जाँचपास गरी फरफारकको प्रमाणपत्र लिनु पर्नेछ । साथै आयोजनाको मर्मत सम्भारको व्यवस्था सम्बन्धित उपभोक्ताहरुले नै गर्नु पर्नेछ । </li>
//                                 <li>आयोजना कार्यान्वयन गर्ने उपभोक्ता समितिले आयोजनाको भौतिक तथा वित्तीय प्रगति प्रतिवेदन गाउँ कार्यपालिका कार्यालयले तोके बमोजिमको ढाँचामा कार्यालयमा पेश गर्नुपर्नेछ । </li>
//                                 <li>आयोजनाको दिगो सञ्चालन तथा मर्मत सम्भारको व्यवस्था गर्नु पर्नेछ । </li>
//                                 <li>आयोजनाको सबै काम उपभोक्ता समिति ÷ समुहको निर्णयानुसार गर्नु गराउनु पर्नेछ । </li>
//                                 <li>आयोजनाको कुल लागत रु ३ लाख भन्दा बढी भएका आयोजनाहरुको हकमा उपभोक्ता समितिले काम शुरु गर्नु भन्दा अगावै आयोजनाकोनाम, लागत, लागत साझेदारीको अवस्था, काम शुरु र सम्पन्न गर्नु पर्ने अवधि समेत देखिने गरी गाउँ कार्यपालिका कार्यालयले तोके बमोजिमको ढाँचामा आयोजना सूचना पाटी आयोजना स्थलमा राख्नु पर्नेछ । </li>
//                             </ol>
//                             <div id="head">गाउँ कार्यपालिका कार्यालयको जिम्मेवारी तथा पालना गरिने शर्तहरु : </div>
//                             <ol>
//                                 <li>आयोजनाको बजेट, उपभोक्ता समितिको काम कर्तव्य तथा अधिकार, खरिद, लेखाङ्कन, प्रतिवेदन आदि विषयमा उपभोक्ता समितिका पदाधिकारीहरुलाई अनुशिक्षण कार्यक्रम सञ्चालन गरिनेछ ।</li>
//                                 <li>आयोजनामा आवश्यक प्राविधिक सहयोग कार्यालयबाट उपलब्ध गराउन सकिने अवस्थामा गराईनेछ र नसकिने अवस्था भएमा स्वीकृत लागत अनुमान मा उल्लेख भए बमोजिम उपभोक्ता समितिले बाह्य बजारबाट सेवा परामर्श अन्तर्गत सेवा लिन सक्नेछ ।</li>
//                                 <li>आयोजनाको प्राविधिक सुपरिवेक्षणका लागि कार्यालयको तर्फबाट प्राविधिक खटाइनेछ । उपभोक्ता समितिबाट भएको कामको नियमित सुपरिवेक्षण गर्ने जिम्मेवारी निज प्राविधिकको हुनेछ ।</li>
//                                 <li>पेश्की लिएर लामो समयसम्म आयोजना सञ्चालन नगर्ने उपभोक्ता समितिलाई कार्यालयले नियम अनुसार कारबाही गर्नेछ ।</li>
//                                 <li>श्रममुलक प्रविधिबाट कार्य गराउने गरी लागत अनुमान स्वीकृत गराई सोही बमोजिम सम्झौता गरी मेशिनरी उपकरणको प्रयोगबाट कार्य गरेको पाइएमा त्यस्तो उपभोक्ता समिति सँग सम्झौता रद्ध गरी उपभोक्ता समितिलाई भुक्तानी गरिएको रकम मुल्यांकन गरी बढी भएको रकम सरकारी बाँकी सरह असुल उपर गरिनेछ ।</li>
//                                 <li>आयोजना सम्पन्न भएपछि कार्यालयबाट जाँच पास गरी फरफारक गर्नु पर्नेछ ।</li>
//                                 <li>आवश्यक कागजात संलग्न गरी भुक्तानी उपलब्ध गराउन सम्बन्धित उपभोक्ता समितिबाट अनुरोध भई आएपछि उपभोक्ता समितिको बैंक खातामा भुक्तानी दिइनेछ ।</li>
//                                 <li>यस सम्झौतामा उल्लेख नभएका अन्य कुराहरुमा प्रचलित कानून बमोजिम हुनेछ ।</li>
//                             </ol>
//                             <div id="head">माथि उल्लेखित भए बमोजिमका शर्तहरु पालना गर्न हामी निम्न पक्षहरु मन्जुर गर्दछौ ।</div>
//                             <br/><br/><div id="sign">
//                             <div id="left">
//                                 <div id="title">
//                                     उपभोक्ता समितिको तर्फबाट
//                                 </div>
//                                 <table id="agree">
//                                     <tr>
//                                         <td>दस्तखत :</td><td></td>
//                                     </tr>
//                                     <tr>
//                                         <td>नाम थर :</td><td>श्री हेलम्बु तामाङ</td>
//                                     </tr>
//                                     <tr>
//                                         <td>पद :</td><td>अध्यक्ष</td>
//                                     </tr>
//                                     <tr>
//                                         <td>ठेगाना :</td><td>थासाङ-६, जोमसोम</td>
//                                     </tr>
//                                     <tr>
//                                         <td>सम्पर्क नम्बर :</td><td>७७५५४४६४३६५४६</td>
//                                     </tr>
//                                     <tr>
//                                         <td>मिति :</td><td>४५५४/५४५/५४/</td>
//                                     </tr>
//                                 </table>
//                             </div>
//                             <div id="right">
//                                 <div id="title">
//                                     गाउँकार्यपालिका कार्यालयको तर्फबाट
//                                 </div>
//                                 <table id="agree">
//                                     <tr>
//                                         <td>दस्तखत : </td><td></td>
//                                     </tr>
//                                     <tr>
//                                         <td>नाम थर :</td><td>श्री सन्तोष कुमार खत्री</td>
//                                     </tr>
//                                     <tr>
//                                         <td>पद :</td><td><b>प्रमुख प्रशासकीयक अधिकृत</b></td>
//                                     </tr>
//                                     <tr>
//                                         <td>ठेगाना :</td><td>थासाङ-२, कोबाङ</td>
//                                     </tr>
//                                     <tr>
//                                         <td>सम्पर्क नम्बर :</td><td>९८७६६७७७७७७</td>
//                                     </tr>
//                                     <tr>
//                                         <td>मिति :</td><td>५४५४३५/५४३५/५४३५४</td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }