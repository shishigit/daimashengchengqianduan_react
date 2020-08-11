import React from "react";
import {Route, Switch} from 'react-router-dom';

class RouterConfig extends React.Component<any, any>
{
    render()
    {
        return (
            <Switch>
                <Route path='/' exact component={Page1}/>
                // main嵌套路由 ，不使用可以去掉
                <Route path="/main" render={() =>
                    <Main>
                        <Route exact path="/main" component={Page1}/>
                        <Route path="/main/Page2" component={Page2}/>

                    </Main>
                }/>
                <Route path='/login' exact component={Login}/>
            </Switch>
        )
    }
}

export default RouterConfig;