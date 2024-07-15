import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getSingleCategoryController,
  updateCategoryCOntroller,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryCOntroller
);

router.get("/get-categories", getAllCategoryController);
router.get('/get-category/:slug',getSingleCategoryController)
router.delete('/delete-category/:sId',requireSignIn,isAdmin,deleteCategoryController)

export default router;




