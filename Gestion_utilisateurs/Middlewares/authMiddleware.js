const jwt = require('jsonwebtoken');

// Générer des token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

// Middleware de verification du token

const protect = async (req, res, next) => {
    let token;
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    if(!token) {
        res.status(401);
        throw new Error('Not authorized');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

// Routes d'authentification

app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


