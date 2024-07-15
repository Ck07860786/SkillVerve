import express from "express";
import {
  loginController,
  registerController,
  updateProfileController,
} from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import { loginSchema, signupSchema } from "../validators/authValidator.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//authentication routes
router.post("/register", validate(signupSchema), registerController);
router.post("/register-admin", validate(signupSchema), (req, res) => {
  req.body.role = 1;  // Assign role as admin
  registerController(req, res);
});
router.post("/login", validate(loginSchema), loginController);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//admin protected route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

router.put('/update-profile', requireSignIn, updateProfileController);

export default router;
