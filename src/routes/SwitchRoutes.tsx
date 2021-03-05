import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import home from "../pages/Home";
import Login from '../pages/Login';

interface route {
    name: string,
    path: string,
    exact: boolean,
    page: React.FC
}

const routes : Array<route> = [
    {
        name: "home",
        path: "/",
        exact: true,
        page: home
    },
    {
        name: "login",
        path: "/login",
        exact: true,
        page: Login
    }
]

const SwitchRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {routes.map(({name, path, exact, page} : route) => 
                <Route
                    exact={exact} 
                    path={path} 
                    component={page}/>)}
        </Switch>
    </BrowserRouter>
)

export default SwitchRoutes;