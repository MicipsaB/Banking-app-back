const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// Route pour ajouter une transaction
router.post("/add", transactionController.addTransaction);

// Route pour récupérer l'historique des transactions d'un compte spécifique
router.get("/history/:accountId", transactionController.getTransactions);

// Route pour filtrer les transactions par type
router.get(
  "/filter/:accountId/type",
  transactionController.filterTransactionsByType
);

// Route pour filtrer les transactions par période
router.get(
  "/filter/:accountId/period",
  transactionController.filterTransactionsByPeriod
);

module.exports = router;
