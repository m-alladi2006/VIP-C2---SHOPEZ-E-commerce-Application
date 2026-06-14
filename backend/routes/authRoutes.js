const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");

const {
    registerUser,
    loginUser,
    getProfile,
    adminDashboard
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, getProfile);

router.get(
    "/admin",
    protect,
    admin,
    adminDashboard
);

module.exports = router;