import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Home} from "./home/components/home";
import {Project_entry} from "./home/components/project_entry";
import {Report} from "./home/components/report";
import {Sifaris} from "./home/components/sifaris";
import {OptionEntry} from "./home/components/option_entry";
import {Setting} from "./home/components/setting";
import {AgreementPrintPreview} from "./home/components/agreement_print_preview";
import {ReportPrintPreview} from "./home/components/reportPrintPreview";
import Test from "./home/components/test";
import axios from "axios";
class App extends React.Component {

  componentDidMount() {
    axios({
      method: 'post',
      url: localStorage.getItem('server')+'api/getSetting',
      data: {setting:'aa_ba'},
    }).then((response)=>{
      localStorage.setItem("aa_ba", response.data[1].option);
    }).catch(function (error) {

    });
    let bs = require('bikram-sambat');
    let english_date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    let nepali_date = bs.toBik_text(english_date);

    localStorage.setItem("nepali_date", nepali_date);
    {localStorage.setItem('server','http://127.0.0.1:8000/')}
  }
  render() {
    return(
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/agree" component={AgreementPrintPreview}/>
              <Route exact path="/project_entry" component={Project_entry}/>
              <Route exact path="/report" component={Report}/>
              <Route exact path="/sifaris" component={Sifaris}/>
              <Route exact path="/option_entry" component={OptionEntry}/>
              <Route exact path="/setting" component={Setting}/>
              <Route exact path="/test" component={Test}/>
              <Route exact path="/reportPrintPreview" component={ReportPrintPreview}/>
            </Switch>
          </HashRouter>
    )
  }
}
export default App;
