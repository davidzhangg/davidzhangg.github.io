import React from 'react';
import Home from './components/pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import DataPrepExplaination from './components/pages/DataPrepExplaination'


const App = () =>  {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/dataprep' exact component={DataPrepExplaination} />
      </Switch>
    </Router>
  </>
    
  );
}

export default App;
