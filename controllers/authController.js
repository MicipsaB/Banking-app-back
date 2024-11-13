// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Fonction d'inscription
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

// Fonction de connexion
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};

// Fonction de déconnexion
exports.logout = (req, res) => {
  res.json({ message: "User logged out" });
};
