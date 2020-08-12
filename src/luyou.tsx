import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Dengluye} from "./page/dengluye/Dengluye";

export class Luyou extends React.Component<any, any>
{
    render()
    {
        return (
            <Switch>
                <Route path='/dengluye' exact component={Dengluye}/>
                {/*<Route path="/main" render={() =>*/}
                {/*    <Main>*/}
                {/*        <Route exact path="/main" component={Page1}/>*/}
                {/*        <Route path="/main/Page2" component={Page2}/>*/}

                {/*    </Main>*/}
                {/*}/>*/}
                {/*<Route path='/login' exact component={Login}/>*/}
            </Switch>
        )
    }
}
