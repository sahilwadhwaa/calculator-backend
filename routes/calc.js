import express from "express"
import { saveCalculation, getCalculation } from "../controllers/calc.js"

const router= express.Router();

//READ
router.get("/history", getCalculation)

//POST
router.post("/history", saveCalculation)

export default router;