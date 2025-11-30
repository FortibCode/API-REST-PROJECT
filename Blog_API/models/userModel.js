// Notre model users

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Le nom d\'utilisateur est requis'],
        unique: true,
        trim: true,
        minlength: [3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères'],
        maxlength: [30, 'Le nom d\'utilisateur ne peut pas dépasser 30 caractères']
    },
    email: {
        type: String,
        required: [true, 'L\'email est requis'],
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Veuillez fournir un email valide'],
    },
    password: {
        type: String,
        required: [true, 'Le mot de passe est requis'],
        minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    
}, {
    timestamps: true
});

// Exportation du modèle de user pour une utilisation dans d'autres parties de l'application
module.exports = mongoose.model('User', userSchema);

