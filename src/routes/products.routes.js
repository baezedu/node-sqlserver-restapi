import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/productos", getProducts);

router.post("/productos", createProduct);

router.get("/productos/:id", getProduct);

router.delete("/productos/:id", deleteProduct);

router.put("/productos/:id", updateProduct);

export default router;
