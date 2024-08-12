import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		cabType: {
			type: String,
			required: true,
		},
		source: { type: String, required: true },
		destination: { type: String, required: true },
		bookingTime: { type: Date, default: Date.now },
		exitTime: { type: Date },
		totalCost: { type: Number },
	},
	{ collection: "bookings" }
);

const Booking = mongoose.model("booking", bookingSchema);
export default Booking;
