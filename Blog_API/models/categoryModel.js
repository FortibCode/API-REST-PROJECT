// Utilisation d'un packquetage pour interagir avec la base de données MongoDB

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Le nom de la catégorie est requis'],
        unique: true,
        trim: true,
        minlength: [3, 'Le nom de la catégorie doit contenir au moins 3 caractères'],
        maxlength: [20, 'Le nom de la catégorie ne peut pas dépasser 50 caractères']
    },
    description: {
        type: String,
        required: [true, 'La description de la catégorie est requise'],
        trim: true,
        minlength: [3, 'La description doit contenir au moins 10 caractères'],
        maxlength: [200, 'La description ne peut pas dépasser 200 caractères'],

    },
    }, {
    timestamps: true
},);
// Exportation du modèle de catégorie pour une utilisation dans d'autres parties de l'application
module.exports = mongoose.model('Category', categorySchema);