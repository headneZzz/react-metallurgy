import React from 'react';
import Login from "./pages/Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";
import Furnaces from "./pages/Furnaces/";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Furnaces}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
