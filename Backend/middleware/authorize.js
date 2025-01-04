const jwt = require('jsonwebtoken');

const authorize = (roles = []) => (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Check if user has one of the required roles
        const hasRequiredRole = roles.some(role => req.user.roles.includes(role));
        if (!hasRequiredRole) {
            return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
        }

        next();
    } catch (err) {
        console.error("Token verification error:", err.message);
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authorize;
