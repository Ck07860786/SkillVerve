import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createSkillController,
  deleteSkillController,
  getSingleSkillController,
  getSkillController,
  skillCategoryController,
  updateSkillController,
} from "../controllers/skillController.js";
import ExpressFormidable from "express-formidable";
const router = express.Router();

router.post(
  "/create-skill",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createSkillController
);

router.get("/get-skills", getSkillController);
router.get("/get-skill/:slug", getSingleSkillController);
router.delete(
  "/delete-skill/:sId",
  requireSignIn,
  isAdmin,
  deleteSkillController
);
router.put(
  "/update-skill/:sId",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  updateSkillController
);

router.get('/skill-category/:slug',skillCategoryController)
export default router;


