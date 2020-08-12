import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";
import {Zhuye} from "./page/zhuye/zhuye";
import {browserHistory} from "./gongju/gongju";
import {Router, Switch, Route, Redirect} from 'react-router-dom';

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path='/dengluye'>
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
