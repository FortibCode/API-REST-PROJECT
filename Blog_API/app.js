// Creation de la variable express

const express = require('express');

const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Chargement des variables d'environnement depuis le fichier .env

dotenv.config({ path: './config/config.env' });

// Connexion à la base de données MongoDB

connectDB();




// création de la varaible app qui sera affecter à la methode express()

const app = express();


// Exportation de l'application pour les tests

module.exports = app;

