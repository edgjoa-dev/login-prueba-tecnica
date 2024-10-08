const users = {
    '1': {
        name: 'Juan Carlos',
        lastName1: 'Pérez',
        lastName2: 'López',
        email: 'juancarlos.perez@hotmail.com',
        phone: '+34 654321987',
        address: 'Calle Mayor, 123 - Madrid',
        birthDate: '15/03/1985',
        gender: 'Masculino',
        maritalStatus: 'Soltero',
        nationality: 'Español',
        occupation: 'Programador',
        education: 'Ingeniería Informática'
    },
    '2': {
        name: 'Ana',
        lastName1: 'Gómez',
        lastName2: 'Sánchez',
        email: 'ana.gomez@gmail.com',
        phone: '+56 987654322',
        address: 'Avenida 456, 456 - Ciudad',
        birthDate: '05/02/1992',
        gender: 'Femenino',
        maritalStatus: 'Casada',
        nationality: 'Española',
        occupation: 'Ingeniera',
        education: 'Grado en Ingeniería Civil'

    },
    '3': {
        name: 'María',
        lastName1: 'Rodríguez',
        lastName2: 'García',
        email: 'maria.rodriguez@outlook.com',
        phone: '+52 5555555555',
        address: 'Avenida Reforma, 100 - Ciudad de México',
        birthDate: '08/07/1990',
        gender: 'Femenino',
        maritalStatus: 'Divorciada',
        nationality: 'Mexicana',
        occupation: 'Diseñadora Gráfica',
        education: 'Licenciatura en Diseño Gráfico'
    },
    '4': {
        name: 'Pedro',
        lastName1: 'Martínez',
        lastName2: 'Hernández',
        email: 'pedro.martinez@gmail.com',
        phone: '+1 2125550123',
        address: '5th Avenue, New York',
        birthDate: '22/11/1978',
        gender: 'Masculino',
        maritalStatus: 'Casado',
        nationality: 'Estadounidense',
        occupation: 'Abogado',
        education: 'Doctorado en Derecho'
    },
    '5': {
        name: 'Ana María',
        lastName1: 'Silva',
        lastName2: 'Santos',
        email: 'anamaria.silva@gmail.com',
        phone: '+55 1145678910',
        address: 'Avenida Paulista, 150 - São Paulo',
        birthDate: '01/01/2000',
        gender: 'Femenino',
        maritalStatus: 'Soltera',
        nationality: 'Brasileña',
        occupation: 'Médica',
        education: 'Medicina'
    },
    '6': {
        name: 'Carlos',
        lastName1: 'Alvarez',
        lastName2: 'Moreno',
        email: 'carlos.alvarez@gmail.com',
        phone: '+49 1761234567',
        address: 'Kurfürstendamm, 218 - Berlín',
        birthDate: '10/04/1965',
        gender: 'Masculino',
        maritalStatus: 'Viudo',
        nationality: 'Alemana',
        occupation: 'Profesor',
        education: 'Doctorado en Filosofía'
    },
    '7': {
        name: 'Laura',
        lastName1: 'Ruiz',
        lastName2: 'Díaz',
        email: 'laura.ruiz@gmail.com',
        phone: '+33 142678901',
        address: 'Champs-Élysées, 100 - París',
        birthDate: '18/09/1995',
        gender: 'Femenino',
        maritalStatus: 'Soltera',
        nationality: 'Francesa',
        occupation: 'Artista',
        education: 'Bellas Artes'
    },
    '8': {
        name: 'David',
        lastName1: 'Romero',
        lastName2: 'Jiménez',
        email: 'david.romero@gmail.com',
        phone: '+39 3331234567',
        address: 'Via del Corso, 250 - Roma',
        birthDate: '25/12/1980',
        gender: 'Masculino',
        maritalStatus: 'Casado',
        nationality: 'Italiana',
        occupation: 'Músico',
        education: 'Conservatorio de Música'
    },
    '9': {
        name: 'Sofía',
        lastName1: 'Fernández',
        lastName2: 'López',
        email: 'sofia.fernandez@gmail.com',
        phone: '+44 2071234567',
        address: 'Oxford Street, 100 - Londres',
        birthDate: '03/05/1998',
        gender: 'Femenino',
        maritalStatus: 'Soltera',
        nationality: 'Británica',
        occupation: 'Escritora',
        education: 'Filología Inglesa'
    },
    '10': {
        name: 'Miguel',
        lastName1: 'González',
        lastName2: 'Martín',
        email: 'miguel.gonzalez@gmail.com',
        phone: '+61 298765432',
        address: 'Sydney Opera House, Sydney',
        birthDate: '12/08/1975',
        gender: 'Masculino',
        maritalStatus: 'Divorciado',
        nationality: 'Australiana',
        occupation: 'Científico',
        education: 'Doctorado en Física'
    }
};

export const fetchUserData = (id) => {
    return new Promise((resolve, reject) => {
        // Simular un retraso en la respuesta de la API
        setTimeout(() => {
            if (users[id]) {
                resolve(users[id]);
            } else {
                reject('Usuario no encontrado');
            }
        }, 300);
    });
};
