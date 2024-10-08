import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';

const App = () => (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/form" component={Form} />
        </Router>
);

export default App;
