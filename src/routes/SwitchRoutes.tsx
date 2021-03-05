import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from '../pages/Home';
import home from "../pages/Home";
import Login from '../pages/Login';

interface route {
    name: string,
    path: string,
    exact: boolean,
    page: React.FC
}

// const routes : Array<route> = [
//     {
//         name: "home",
//         path: "/",
//         exact: true,
//         page: home
//     },
//     {
//         name: "login",
//         path: "/login",
//         exact: false,
//         page: Login
//     },
//     {
//         name: "loginCallback",
//         path: "/login/:oauthProvider?code=:code",
//         exact: true,
//         page: Login
//     }
// ]

const SwitchRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path = "/" component={Home} exact/>
            <Route path = "/login" component={Login}/>
        </Switch>
    </BrowserRouter>
)

export default SwitchRoutes;