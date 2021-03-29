import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import List from '../pages/Lists';
import SignIn from '../pages/SignIn';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
            <Route path="/signin" exact component={SignIn} />
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;