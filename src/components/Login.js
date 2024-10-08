import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
        attempts: 0,
        disabled: false,
        error: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, attempts } = this.state;

        if (username === 'azteca' && password === '12345') {
            this.props.history.push('/form');
        } else {
            this.setState({
                attempts: attempts + 1,
                error: 'Usuario o contraseña incorrectos',
            });

            if (attempts >= 2) {
                this.setState({ disabled: true, error: 'Intentos excedidos' });
                console.log('contraseña incorrecta');
            }
        }
    };

    render() {
        const { disabled, error } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Usuario"
                        onChange={this.handleChange}
                        disabled={disabled}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={this.handleChange}
                        disabled={disabled}
                    />
                    <button type="submit" disabled={disabled}>Enviar</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        );
    }
}

export default Login;
