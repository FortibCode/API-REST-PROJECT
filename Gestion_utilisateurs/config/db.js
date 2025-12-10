const mongoose = require('mongoose');

// Connexion à la base de données MongoDB

mongoose.connect('mongoDB://localhost:27017/Gestion_utilisateurs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connexion à la base de données MongoDB est établie'))
    .catch(err => console.log(err));