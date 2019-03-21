import React, { Component ,Fragment} from 'react';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Admin from  './pages/admin/admin'
import Login from  './pages/login/login'
import './App.css'
class App extends Component {
  render() {
    return (
     <Fragment>
       <HashRouter>
      <Switch>
         <Redirect exact from='/' to='/admin'/>
         <Route  path="/admin" component={Admin}></Route>
         <Route exact path='/login'component={Login}></Route>
        
      </Switch>
       </HashRouter>
     </Fragment>
    );
  }
}

export default App;
