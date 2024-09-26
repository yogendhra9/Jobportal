import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  register,
  updateProfile,
  login,
  logout,
} from "../controllers/user.controller.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);
router.route("/logout").get(logout  );
export default router;