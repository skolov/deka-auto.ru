import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Main from './pages/main/main';
import Amenities from './pages/amenities/amenities';
import Contacts from './pages/contacts/contacts';
import Reservation from './pages/appointment/appointment';
import Comments from './pages/comment/comment';

import Admindeka from './pages/admindeka/admindeka';

export default class App extends React.Component<any,any>{

  render(){
    return (
      <div className="App">

        <Switch>
          <Route
            exact
            path='/'
            component={Main}
          />
          <Route
            path='/amenities'
            component={Amenities}
          />
          <Route
            path='/contacts'
            component={Contacts}
          />
          <Route
            path='/appointment'
            component={Reservation}
          />
          <Route
            path='/comment'
            component={Comments}
          />
          <Route 
            path='/admindeka'
            component={Admindeka}
          />
        </Switch>
       
      </div>
    )
  }

}