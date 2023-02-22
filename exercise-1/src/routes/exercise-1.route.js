import express from "express";
import Exercise1Controller from "../controllers/exercise-1.controller";

const router = express.Router();

const exercise1 = new Exercise1Controller();

// Add the path variable firstName
router.get("/:firstName/message", exercise1.getMessage);

export default router;
