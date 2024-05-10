const router = require('express').Router();
const userRoutes = require('./userRoutes');

const { authMiddleware } = require("./middleware/auth.js")

// authMiddleware, 

router.use('/users', userRoutes);

module.exports = router;