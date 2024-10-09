import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';

class App extends React.Component {
    state = {
        isAuthenticated: false,
    };

    componentDidMount() {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        this.setState({ isAuthenticated });
    }

    handleLoginSuccess = () => {
        this.setState({ isAuthenticated: true });
        localStorage.setItem('isAuthenticated', 'true');
    };

    handleLogout = () => {
        this.setState({ isAuthenticated: false });
        localStorage.setItem('isAuthenticated', 'false');
    };

    render() {
        const { isAuthenticated } = this.state;

        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            isAuthenticated ? <Redirect to="/form" /> : <Login {...props} onLoginSuccess={this.handleLoginSuccess} />
                        )}
                    />
                    <Route
                        path="/form"
                        render={(props) => (
                            isAuthenticated ? <Form {...props} onLogout={this.handleLogout} /> : <Redirect to="/" />
                        )}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
