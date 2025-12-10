// Importation du module export

const express = require('express');

// Création de la variable router

const router = express.Router();

// Creation de la variable users

let users = [
    {
        id: 1,
        nom: 'John',
        prenom: 'Doe',
        email: '6g7cZ@example.com'
    }
]

// Création de la route de base

router.get('/', (req, res) => {
    res.json({ success: true, data: users });
});

router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
});

module.exports = router;