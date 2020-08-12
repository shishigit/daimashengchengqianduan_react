import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/dengluye";
import {Zhuye} from "./page/zhuye/zhuye";
import {browserHistory} from "./gongju/gongju";
import {Router, Switch, Redirect, Route} from 'react-router-dom';

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path='/dengluye' component={Dengluye} exact={true}/>
                    <Route path='/zhuye' component={Zhuye} exact={true}/>
                    <Redirect to={'/dengluye'}/>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
