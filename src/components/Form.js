import React, { Component } from 'react';
import { fetchUserData } from '../api/api';

import '../App.css'

class Form extends Component {
    state = {
        id: '',
        userData: null,
        error: ''
    };

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (this.props.location.pathname === "/form" && !this.props.isAuthenticated) {
                this.props.history.replace("/");
            }
        });
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
        }
    }

    handleChange = (e) => {
        this.setState({ id: e.target.value, error: '' });
    };

    handleFetchUser = () => {
        if (!this.state.id) {
            this.setState({ error: 'Por favor, ingrese un ID de usuario.' });
            return;
        }

        this.setState({ userData: null }, () => {
            fetchUserData(this.state.id)
                .then(userData => {
                    this.setState({ userData });
                })
                .catch(error => {
                    this.setState({ error });
                });
        });
    };

    render() {
        const { id, userData, error } = this.state;

        return (
            <div className="container-userdata">
                <div className='header-form' >
                    <div className='header-left'>

                        <input
                            autoFocus
                            type="text"
                            placeholder="ID usuario"
                            value={id}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleFetchUser} className='button-search'>
                            Buscar usuario
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>

                    <div className='header-right'>

                        {/* Botón de Logout */}
                        <button onClick={this.props.onLogout} className='button-logout'>
                            Cerrar sesión
                        </button>
                    </div>

                </div>

                {userData && (
                    <div className='userdata-info'>
                        <div className="userdata-left">
                            <p>Nombre: {userData.name}</p>
                            <p>Apellido Materno: {userData.lastName1}</p>
                            <p>Apellido Paterno: {userData.lastName2}</p>
                            <p>Email: {userData.email}</p>
                            <p>Teléfono: {userData.phone}</p>
                            <p>Dirección: {userData.address}</p>
                        </div>
                        <div className="userdata-right">
                            <p>Fecha de nacimiento: {userData.birthDate}</p>
                            <p>Género: {userData.gender}</p>
                            <p>Estado civil: {userData.maritalStatus}</p>
                            <p>Nacionalidad: {userData.nationality}</p>
                            <p>Ocupación: {userData.occupation}</p>
                            <p>Educación: {userData.education}</p>
                        </div>
                    </div>
                )}


            </div>
        );
    }
}

export default Form;
