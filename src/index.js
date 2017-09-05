import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Details from './components/Details';
import Explorer from './components/Explorer';
import Films from './components/Films';
import BaseLayout from './components/Layout';
import People from './components/People';
import Starships from './components/Starships';

/* >>>>>>>>>>>>>>>>>>>>>
  Add a router components with routes to:
  Explorer. Use an exact path to "/"
  Starships
  Films
  People
  Details: Dynamic route with the following params: endpoing and id
  <<<<<<<<<<<<<<<<<<<<<<
  */
ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
         <Route path="/starships" component={Starships}/>
         <Route path="/films" component={Films}/>
         <Route path="/characters" component={People}/>
         <Route exact path="/" component={Explorer}/>
         <Route path="/details/:endpoint/:id" component={Details}/>
       </Switch>
    </BaseLayout>
   </BrowserRouter>



,document.getElementById('root'));
registerServiceWorker();
