import React, { Component } from 'react';
import { fetchUserData } from '../api/api';

class Form extends Component {
    state = {
        id: '',
        userData: null,
        error: ''
    };

    handleChange = (e) => {
        this.setState({ id: e.target.value, error: '' });
    };

    handleFetchUser = () => {
        // Validación del ID
        if (!this.state.id) {
            this.setState({ error: 'Por favor, ingrese un ID de usuario.' });
            return;
        }

        // Resetear la información anterior antes de hacer la consulta
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
            <div>
                <input
                    type="text"
                    placeholder="ID usuario"
                    value={id}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleFetchUser}>
                    Buscar usuario
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {userData && (
                    <div>
                        <p>Nombre: {userData.name}</p>
                        <p>Apellido Materno: {userData.lastName1}</p>
                        <p>Apellido Paterno: {userData.lastName2}</p>
                        <p>Email: {userData.email}</p>
                        <p>Teléfono: {userData.phone}</p>
                        <p>Dirección: {userData.address}</p>
                        <p>Fecha de nacimiento: {userData.birthDate}</p>
                        <p>Género: {userData.gender}</p>
                        <p>Estado civil: {userData.maritalStatus}</p>
                        <p>Nacionalidad: {userData.nationality}</p>
                        <p>Ocupación: {userData.occupation}</p>
                        <p>Educación: {userData.education}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Form;
