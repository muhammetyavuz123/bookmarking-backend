import { Router } from "express";

// helpers
import { verifyAccessToken } from "../helpers/jwt";

// routes
import auth from "./auth";
import product from "./product";

const router = Router();

router.get("/", (req, res) => {
  res.end("hey");
});

router.use("/auth", auth);
router.use("/product", product);

export default router;
