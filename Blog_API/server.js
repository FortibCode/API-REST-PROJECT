
// Importation dotenv

const dotenv = require('dotenv')

// Importation de app

const app = require('./app');


// Chargement des variables d'environnement depuis le fichier .env

dotenv.config({ path: './config/config.env' });

// creation de la variable port

const port = process.env.PORT || 3000;

// Déclaration de la variable server qui sera à l'écoute

const server = app.listen(port, () => {
    console.log(`Le serveur fonctionne en mode ${process.env.node_env} sur le port ${port}`);
});

// Gestion des erreurs non capturées

process.on('unhandledRejection', (err, promise) => {
    console.log(`Erreur non capturée : ${err.message}`);
    // Fermeture du serveur
    server.close(() => process.exit(1));
});



