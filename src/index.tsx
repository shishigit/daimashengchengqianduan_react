import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Zhuye} from "./page/zhuye/zhuye";

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <div style={{height: '100%'}}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/dengluye'>
                            <Dengluye/>
                        </Route>
                        <Route path='/zhuye'>
                            <Zhuye/>
                        </Route>
                        <Redirect to={'/dengluye'}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
