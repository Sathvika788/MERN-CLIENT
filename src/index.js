import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compoents/navbar';
import Login from './compoents/login';
import Register from './compoents/register';
import Products from './compoents/Products';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container mt-4">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/logout" component={logout} />
                        <Route path="/" exact component={Products} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
