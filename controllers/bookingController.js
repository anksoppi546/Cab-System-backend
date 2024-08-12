import Booking from "../models/bookingSchema.js";
import Cab from "../models/cabSchema.js";

// GET all Bookings
const getAllBookings = async (req, res) => {
	try {
		const allBookings = await Booking.find({});
		res.status(200).json(allBookings);
	} catch (error) {
		console.error("Error fetching bookings:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// Add Bookings
const addBooking = async (req, res) => {
	try {
		const {
			email,
			cabType,
			source,
			destination,
			exitTime,
			totalCost,
			distance,
		} = req.body;

		// Calculate exit time by adding minutes to the current time
		const calculatedExitTime = new Date(Date.now() + distance * 60000);

		const newBooking = new Booking({
			email,
			cabType,
			source,
			destination,
			exitTime: calculatedExitTime,
			totalCost,
		});

		// Update bookingTime and exitTime for the particular cabType
		await Cab.findOneAndUpdate(
			{ cabType: cabType },
			{
				$set: { bookingTime: Date.now(), exitTime: calculatedExitTime },
			}
		);

		// Save the new booking
		await newBooking.save();

		res.status(201).send(newBooking);
	} catch (error) {
		console.log("Error adding booking:", error);
		res.status(500).json(error);
	}
};

export { getAllBookings, addBooking };
