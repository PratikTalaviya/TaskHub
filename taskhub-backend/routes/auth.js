const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleAuthCallback, authController.googleAuthCallbackHandler);

module.exports = router;
