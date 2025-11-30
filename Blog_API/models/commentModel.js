const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Le contenu du commentaire est requis'],
        trim: true,
        minlength: [1, 'Le commentaire doit contenir au moins 1 caractère'],
        maxlength: [1000, 'Le commentaire ne peut pas dépasser 1000 caractères']
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: [true, 'Le post associé est requis']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'L\'auteur du commentaire est requis']
    }
}, {
    timestamps: true
});
// Exportation du modèle de commentaire pour une utilisation dans d'autres parties de l'application

module.exports = mongoose.model('Comment', commentSchema);
