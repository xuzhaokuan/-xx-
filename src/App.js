import React from 'react';
import './App.css';
import {routes} from './router'
import Admin from './component/admin'
import { withRouter,Route,Switch,Redirect } from 'react-router-dom';
import Detail from './component/detailgoods'
@withRouter
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <Admin>
        <Switch>
        {
            routes.map((item)=>{
                return <Route key={item.path} path={item.path} component={item.component} />
            })

        }
        <Route path='/detail' component={Detail} />
        <Redirect from='/' to='/home' exact />
        <Redirect to='/404' />
    </Switch>
        </Admin>
      </div>
    );
  }
}

export default App;
