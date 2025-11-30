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

// Gestion des utilisateurs
// Importation du module express

const express = require('exp');

// creation de la varaible server

const server = express();

// Déclaration de la variable port

const port = 8080;

// Middleware pour parser le JSON

server.use(express.json());

// Création d'une route de base

let user = [
    {id: 1, nom: 'OKOMBI', prenom: 'Fortune Serge Béni', email: 'okombi@example.com'},
    {id: 2, nom: 'Martin', prenom: 'marie', email: 'marie@example.com'}
];