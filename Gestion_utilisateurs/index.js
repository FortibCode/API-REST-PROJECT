// Création d'un serveur basique

// const express = require('express');

// Création de la variable server

// const server = express();

// Création de la variable port pour l'affecter à un port = 3000

// const port = 3000;

// Middleware pour parser le JSON

// server.use(express.json());

// Cette route va permettre de mettre une route de base
/*
server.get('/', (req, res) => {
    // Affichage du message
    res.json({ message: 'Bienvenue sur mon API' });
});*/

// Démarrage de notre server d'application

// server.listen(port, () => {
//     console.log(`Serveur démarrer sur http://localhost: ${port}`);
// });

const express = require('express');
const app = express();
const usersRoutes = require('./Routes/users');

app.use('/api/users', usersRoutes);

app.listen(3000, () => {
    console.log('Serveur demarrer sur http://localhost:3000');
});