import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";
import {browserHistory} from "./gongju/gongju";
import {Router, Switch, Redirect, Route} from 'react-router-dom';

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path='/dengluye' component={DengluyeComponent} exact={true}/>
                    <Route path='/zhuye' component={ZhuyeComponent} exact={true}/>
                    <Redirect to={'/dengluye'}/>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
