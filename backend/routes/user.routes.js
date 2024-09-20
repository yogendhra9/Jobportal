import express from "express";
import isAuthenticated from "../middleware/isAuthenticate.js";
import {
  register,
  updateProfile,
  login,
} from "../controllers/user.controller.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;