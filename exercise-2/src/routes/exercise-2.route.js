import express from "express";
import Exercise2Controller from "../controllers/exercise-2.controller";

const router = express.Router();

const exercise2 = new Exercise2Controller();

// Add the path variable firstName
router.post("/details", exercise2.storeDetails);

export default router;
