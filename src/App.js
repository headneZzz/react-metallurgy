import React from 'react';
import Login from "./pages/Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Foundries from "./pages/Foundries";
import Furnaces from "./pages/Furnaces";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/main" component={Foundries}/>
                <Route path="/main/:number" component={Furnaces}/>
                <Route exact path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
