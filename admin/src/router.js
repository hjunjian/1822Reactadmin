import React, { Component ,Fragment} from 'react';
import {HashRouter,Switch,Redirect,Route}from 'react-router-dom'
import Admin from  './pages/admin/admin'
import Login from  './pages/login/login'
// import Test from './test'
// 所有的路由相关的配置全在 router文件夹里
import App from './App';
class Rrouter extends Component {
  render() {
    return (
     <Fragment>
        <App>
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'/>
                    {/* <Route  path="/admin" component={Admin}></Route> */}
                    <Route path='/admin' render={()=>{
                        return(
                        <Admin>
                              <Route path='/admin/home'render={()=>{
                                    return(
                                        <div>这里是首页</div>
                                    )
                                }}></Route> 
                                <Route path='/admin/setting'render={()=>{
                                    return(
                                        <div>这里是设置</div>
                                    )
                                }}></Route>
                        </Admin>
                        )
                    }}/>
                    <Route exact path='/login'component={Login}></Route>   
                </Switch>
        </HashRouter>
        </App>
     </Fragment>
    );
  }
}

export default Rrouter;
