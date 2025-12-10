// Gestion des utilisateurs
// Importation du module express

const express = require('express');

// creation de la varaible server

const app = express();

// Déclaration de la variable port

const port = 8080;

// Middleware pour parser le JSON

app.use(express.json());

// Création d'une route de base

let user = [
    {id: 1, nom: 'OKOMBI', prenom: 'Fortune Serge Béni', email: 'okombi@example.com'},
    {id: 2, nom: 'Martin', prenom: 'marie', email: 'marie@example.com'}
];

// Récupération de tout les utilisateurs avec la méthode get

app.get('api/users/', (res, req) => {
    res.status(200).json({
        success: true,
        data: user
    });
});


// Récupérer un utilisateur par son id

app.get('api/users/:id', (res, req) => {
    const UserId = parseInt(req.params.id);
    const user = users.find(user => user.id === UserId);
    if (!user) {
        res.status(404).json({
            success: false,
            message: 'Utilisateur non trouvé'
        });
    }
    res.status(200).json({
        success: true,
        data: user
    });
    
});

// Création d'un nouvel utilisateur

app.post('/api/users', (req, res) => {
    const { nom, prenom, email } = req.body;
    //   Validation basic des données
    
    if (!nom || !prenom || !email) {
        res.status(400).json({
            success: false,
            message: 'Veuillez fournir tous les champs requis'
        });
    }
    const newUser = {
        id: user.length + 1,
        nom,
        prenom,
        email
    };
    user.push(newUser);
    res.status(201).json({
        success: true,
        message: 'Utilisateur créer',
        data: newUser
    });
});

// Methode pour mettre à jour un utilisateur

app.put('/api/users/:id', (req, res) => {
    const UserId = parseInt(req.params.id);
    const { nom, prenom, email } = req.body;
    const userIndex = users.find(user => user.id === UserId);
    if (userIndex === -1) {
        res.status(404).json({
            success: false,
            message: 'Utilisateur non trouvé'
        });
    }
    user[userIndex] = {
        ...user[userIndex],
        nom,
        prenom,
        email
    };
    res.status(200).json({
        success: true,
        message: 'Utilisateur mis à jour',
        data: user[userIndex]
    });
});

// Supprimer un utilisateur

app.delete('/api/users/:id', (req, res) => {
    const UserId = parseInt(req.params.id);
    const userIndex = users.find(user => user.id === UserId);
    if (userIndex === -1) {
        res.status(404).json({
            success: false,
            message: 'Utilisateur non rencontré'
        });
    }
    user.splice(userIndex, 1);
    res.status(200).json({
        success: true,
        message: 'Utilisateur supprimé'
    });
});

// Démarrage de notre server d'application

app.listen(port, () => {
    console.log(`Serveur demarrer sur http://localhost: ${port}`);
});

// Mise en place de la gestion des erreurs non capturées

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}


// Middleware de gestion d'erreurs

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Une erreur est survenue',
        error: err.message
    });
}

// Utilisation

app.use(logger);
app.use(errorHandler);

