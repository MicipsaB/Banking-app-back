// routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const {
  validateUserRegistration,
} = require("../middlewares/validationMiddleware");
const router = express.Router();

// Route pour l'inscription de l'utilisateur
router.post("/register", validateUserRegistration, authController.register);

// Route pour la connexion de l'utilisateur
router.post("/login", authController.login);

module.exports = router;
