const express = require("express");

const router = express.Router();

const {
    createStock,
    getStocks,
    getStockById,
    updateStock,
    deleteStock
} = require("../controllers/stockController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Admin Only
router.post("/", protect, admin, createStock);

// User & Admin
router.get("/", protect, getStocks);

router.get("/:id", protect, getStockById);

// Admin Only
router.put("/:id", protect, admin, updateStock);

router.delete("/:id", protect, admin, deleteStock);

module.exports = router;