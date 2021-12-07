import React from 'react';
import { ROUTES } from '../constants/routes'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  
    return (
       <div className="App">
         <Switch>
           { ROUTES.map(({path, component, exact}) => (
               <Route key={String(path)} path={path} component={component} exact={exact}/>
         )) }
         </Switch>
       </div>
    );
  }
  
  export default App;
  