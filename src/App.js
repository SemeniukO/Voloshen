import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import Attorney from './components/Attorney'
import Practice__Areas from './components/Practice__Areas'
import Consultations from './components/Consultations'
import Our__Results from './components/Our__Results'
import Contact__us from './components/Contact__us '
import Footer from './components/Footer'




function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path='/attorney' component={Attorney} />
      <Route path='/practice-area' component={Practice__Areas} />
      <Route path='/consultations' component={Consultations} />
      <Route path='/our-results' component={Our__Results} />
      <Route path='/contacts' component={Contact__us} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
