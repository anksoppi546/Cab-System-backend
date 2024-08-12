import express from "express";
import { addBooking, getAllBookings } from "../controllers/bookingController.js";

const bookingsRouter = express.Router();

// GET all Bookings || GET Method
const allBookingsRoute = bookingsRouter.get("/all-bookings", getAllBookings);

// Add a booking || POST Method
const addBookingRoute = bookingsRouter.post("/add-booking", addBooking);

export default bookingsRouter;
export { allBookingsRoute, addBookingRoute };
