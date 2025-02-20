import express from "express";
import { addBooking, getSlots } from "../controllers/MainContoller.js";

const router = express.Router();


router.post('/addBooking',addBooking)
router.get('/bookedSlots',getSlots)

export default router