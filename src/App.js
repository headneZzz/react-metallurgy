import React from 'react';
import Login from "./pages/Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Foundries from "./pages/Foundries";
import Furnaces from "./pages/Furnaces";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Foundries}/>
                <PrivateRoute path="/furnaces/:id" component={Furnaces}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
