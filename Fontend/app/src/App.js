import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Home} from "./home/components/home";
import {Project_entry} from "./home/components/project_entry";
import {Report} from "./home/components/report";
import {Sifaris} from "./home/components/sifaris";
import {AgreementPrintPreview} from "./home/components/project_entry";
import Test from "./home/components/test";

class App extends React.Component {
  constructor() {
    super();
    this.state={};
  }
  render() {
    {localStorage.setItem('server','http://127.0.0.1:8000/')}
    return(
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/*<Route exact path="/project_entry" component={Project_entry}/>*/}
            <Route exact path="/project_entry" component={Project_entry}/>
            <Route exact path="/report" component={Report}/>
            <Route exact path="/sifaris" component={Sifaris}/>
            <Route exact path="/test" component={Test}/>
          </Switch>
        </HashRouter>
    )
  }
}
export default App;
