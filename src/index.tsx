import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/dengluye/Dengluye";

export class App extends React.Component<any, any>
{
    render(): React.ReactNode
    {
        return (
            <div style={{height: '100%'}}>
                <Dengluye shuxing={'dddddddddddddddd'}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
