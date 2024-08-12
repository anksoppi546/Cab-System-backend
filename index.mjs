import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import connectDB from "./config/connectDB.js";
import bookingsRouter from "./routes/bookingRoute.js";
import cabsRouter from "./routes/cabRoute.js";
import { sendMail } from "./controllers/mailController.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("Hello from Server!!!");
});

app.use("/api/v1/bookings", bookingsRouter);
app.use("/api/v1/cabs", cabsRouter);
app.post("/api/v1/send-email", async (req, res) => {
	try {
		const emailData = req.body;
		if (!emailData || !emailData.email) {
			res.status(204).send("Invalid Email");
			return;
		}
		await sendMail(emailData);
		res.status(200).send("Email sent successfully");
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).send("Error sending email");
	}
});
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
