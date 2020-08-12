import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";
import {BrowserRouter} from 'react-router-dom';
import {Luyou} from "./luyou";

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <div style={{height: '100%'}}>
                <Dengluye shuxing={'dddddddddddddddd'}/>
                <BrowserRouter>
                    <Luyou/>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
