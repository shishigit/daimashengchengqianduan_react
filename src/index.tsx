import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DengluyeYemian} from "./page/dengluye/dengluye.yemian";
import {ZhuyeYemian} from "./page/zhuye.yemian";
import {browserHistory} from "./gongju/gongju";
import {Router, Switch, Redirect, Route} from 'react-router-dom';

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path='/dengluye' component={DengluyeYemian} exact={true}/>
                    <Route path='/zhuye' component={ZhuyeYemian} exact={true}/>
                    <Redirect to={'/dengluye'}/>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
