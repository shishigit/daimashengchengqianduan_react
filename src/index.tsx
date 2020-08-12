import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";
import {Redirect, Route, Switch, Router} from 'react-router-dom';
import {Zhuye} from "./page/zhuye/zhuye";
import {browserHistory} from "./gongju/gongju";

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path='/dengluye' >
                        <Dengluye/>
                    </Route>
                    <Route path='/zhuye'>
                        <Zhuye/>
                    </Route>
                    <Redirect to={'/dengluye'}/>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
