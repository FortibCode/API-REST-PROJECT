// Ecrire un code qui permet de se connecter à mongoDB

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log(`MongoDB connecté: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Erreur de connexion à MongoDB: ${err.message}`.red.underline);
        process.exit(1);
    }
};

module.exports = connectDB;
