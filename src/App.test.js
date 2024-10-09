import React from 'react';
import { fetchUserData } from './api/api';
import Login from './components/Login';
import Form from './components/Form';

// Mocks
jest.mock('./api/api', () => ({
    fetchUserData: jest.fn(),
}));

describe('Login Component', () => {
    let loginComponent;

    beforeEach(() => {
        loginComponent = new Login();
        loginComponent.setState = jest.fn((newState) => {
            loginComponent.state = { ...loginComponent.state, ...newState }; // Update state mock
        });
        loginComponent.state = { username: '', password: '', attempts: 0, disabled: false, error: '' }; // Initial state
    });

    test('should update state on input change', () => {
        const mockEvent = { target: { name: 'username', value: 'testUser' } };
        loginComponent.handleChange(mockEvent);
        expect(loginComponent.setState).toHaveBeenCalledWith({ username: 'testUser' });
    });

    test('should call onLoginSuccess on successful login', () => {
        const mockProps = { onLoginSuccess: jest.fn(), history: { push: jest.fn() } };
        loginComponent.props = mockProps;

        // Simulate successful login
        loginComponent.setState({ username: 'azteca', password: '12345' });
        loginComponent.handleSubmit({ preventDefault: jest.fn() });

        expect(mockProps.onLoginSuccess).toHaveBeenCalled();
        expect(mockProps.history.push).toHaveBeenCalledWith('/form');
    });

    test('should increment attempts on failed login', () => {
        const mockEvent = { preventDefault: jest.fn() };
        loginComponent.setState({ username: 'wrongUser', password: 'wrongPass' });
        loginComponent.handleSubmit(mockEvent);

        expect(loginComponent.state.attempts).toBe(1);
    });

    test('should disable button after 3 failed attempts', () => {
        const mockEvent = { preventDefault: jest.fn() };

        for (let i = 0; i < 3; i++) {
            loginComponent.setState({ username: 'wrongUser', password: 'wrongPass' });
            loginComponent.handleSubmit(mockEvent);
        }

        expect(loginComponent.state.disabled).toBe(true);
        expect(loginComponent.state.error).toBe('Intentos excedidos');
    });
});






describe('Form Component', () => {
    const mockOnLogout = jest.fn();
    const mockHistory = {
        listen: jest.fn(),
        replace: jest.fn(),
    };
    const mockProps = {
        history: mockHistory,
        location: { pathname: '/form' },
        isAuthenticated: true,
        onLogout: mockOnLogout,
    };

    let instance;

    beforeEach(() => {
        // Crear una instancia del componente
        instance = new Form(mockProps);
        instance.componentDidMount(); // Llamar al ciclo de vida
    });

    afterEach(() => {
        jest.clearAllMocks(); // Limpiar mocks después de cada prueba
    });

    test('initial state is correct', () => {
        expect(instance.state).toEqual({
            id: '',
            userData: null,
            error: '',
        });
    });

    test('componentDidMount sets up history listener', () => {
        expect(mockHistory.listen).toHaveBeenCalledTimes(1);
    });

    test('componentWillUnmount unlistens history listener', () => {
        instance.componentWillUnmount();
        expect(mockHistory.listen).toHaveBeenCalledTimes(1);
    });

});