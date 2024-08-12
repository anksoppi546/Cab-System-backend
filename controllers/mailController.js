import nodemailer from "nodemailer";
import { formatDateTime } from "../utils/formatDate.js";

const sendMail = async (data) => {
	const bookingTime = formatDateTime(data.bookingTime);
	const exitTime = formatDateTime(data.exitTime);
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_SENDER_EMAIL,
				pass: process.env.SMTP_SENDER_PASSWORD,
			},
		});

		const mailOptions = {
			from: {
				name: "Ankit Raj",
				address: process.env.SMTP_SENDER_EMAIL,
			},
			to: data.email,
			subject: "Your Ride Confirmed",
			html: `
			<!DOCTYPE html>
			<html>
				<head>
					<title>Booking Confirmation</title>
				</head>
				<body>
					<h2>Hi!</h2>
					<p>This email confirms your booking.</p>
					<p>Booking Details:</p>
					<ul>
						<li><strong>Booking Time:</strong> ${bookingTime}</li>
						<li><strong>Exit Time:</strong> ${exitTime}</li> 
						<li><strong>Total Cost:</strong> ₹ ${data.totalCost}</li> 
						<li><strong>Cab Type:</strong> ${data.cabType}</li>
						<li><strong>Estimated Time:</strong> ${data.distance}</li>
					</ul>
					<p>We look forward to welcoming you! If you need to make any changes to your booking, please reply to this email or contact us.</p>
					<p>Sincerely,</p>
					<p>The Uber Clone Team</p>
				</body>
			</html>
		`,
		};

		const res = await transporter.sendMail(mailOptions);
		console.log("Email sent Successfully", res);
	} catch (error) {
		console.log(error);
	}
};

export { sendMail };
