import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("Connected to Database", mongoose.connection.host);
	} catch (error) {
		console.log("Server error from mongoDB", error);
	}
};

export default connectDB;
