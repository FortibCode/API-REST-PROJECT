// Importation du model utilisateur

const User = require('../Models/userModel');

app.get('/api/users/', async (req, res) => {
    
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

});

// post pour créer des utilisateurs

app.post('/api/users/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Gérer un utilisateur par ID

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non rencontré'
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Mettre à jour un utilisateur par ID

app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non rencontré'
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


// Supprimer un utilisateur par ID

app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non rencontré'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Utilisateur supprimé'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})
