import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dengluye} from "./page/Dengluye";

function App()
{
    return (
        <div>
            <Dengluye shuxing={'dddddddddddddddd'}/>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);