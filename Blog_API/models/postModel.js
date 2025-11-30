// Notre model posts
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Le titre du post est requis'],
        trim: true,
        minlength: [3, 'Le titre doit contenir au moins 3 caractères'],
        maxlength: [100, 'Le titre ne peut pas dépasser 100 caractères']
    },
    content: {  
        type: String,
        required: [true, 'Le contenu du post est requis'],
        trim: true,
        minlength: [10, 'Le contenu doit contenir au moins 10 caractères'],
        maxlength: [5000, 'Le contenu ne peut pas dépasser 5000 caractères']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La catégorie du post est requise']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'L\'auteur du post est requis']
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
}); 

// Exportation du modèle de post pour une utilisation dans d'autres parties de l'application
module.exports = mongoose.model('Post', postSchema);