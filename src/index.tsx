import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";
import {BrowserRouter, Redirect, Route, Switch, Router} from 'react-router-dom';
import {Zhuye} from "./page/zhuye/zhuye";
import {browserHistory} from "./gongju/gongju";

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <div style={{height: '100%'}}>
                <BrowserRouter basename='/'>
                    <Router history={browserHistory}>
                        <Switch>
                            <Route path='/dengluye'>
                                <Dengluye/>
                            </Route>
                            <Route path='/zhuye'>
                                <Zhuye/>
                            </Route>
                            <Route path={'/'}>
                                <Redirect to={'/dengluye'}/>
                            </Route>
                        </Switch>
                    </Router>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
