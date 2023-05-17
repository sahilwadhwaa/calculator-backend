import express from "express"
import { saveCalculation, getCalculation, addRemoveCalc } from "../controllers/calc.js"

const router= express.Router();

//READ
router.get("/history", getCalculation);

//POST
router.post("/history", saveCalculation);

//DELETE
router.delete("/history/:id", addRemoveCalc);

export default router;