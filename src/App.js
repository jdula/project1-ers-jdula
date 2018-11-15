import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Include/bootstrap';
import './App.css';
import { AppNav } from './Components/EmployeeNav.component';
import { SignInComponent } from './Components/SignIn.component.js/SignIn.component';
import { FourOFourComponent } from './Components/404/FourOFour.componetn';
import { AllPreviousReimbursementComponent } from './Components/AllPreviousReimbursements.component/AllPreviousReimbursement.component';
import { AddNewReimbursementComponent } from './Components/AddNewReimbursement.component/AddNewReimbursement.component';
import { AllReimbursementsComponent } from './Components/AllReimbursements.component.js/AllReimbursements.component';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <>
        <AppNav />
        <div id="main-content-container">
          <Switch>
           <Route path='/sign-in' component={SignInComponent}/>
           <Route path='/user/id' component={AllPreviousReimbursementComponent}/>
           <Route path='/user/add' component={AddNewReimbursementComponent}/>
           <Route path='/user' component={AllReimbursementsComponent}/>
           <Route component={FourOFourComponent}/>
          </Switch>
        </div>
      </>
      </BrowserRouter>
    );
  }
}

export default App;
