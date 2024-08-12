import express from "express";
import { getAllCabs, addCab, updateCab } from "../controllers/cabController.js";

const cabsRouter = express.Router();

// GET all Cabs || GET Method
const allCabsRoute = cabsRouter.get("/all-cabs", getAllCabs);

// Add a cab || POST Method
const addCabRoute = cabsRouter.post("/add-cab", addCab);

// Update a cab || PATCH Method
const updateCabRoute = cabsRouter.patch("/update-cab", updateCab);

export default cabsRouter;
export { allCabsRoute, addCabRoute, updateCabRoute };
