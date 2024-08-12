import Cab from "../models/cabSchema.js";

// GET all Cabs
const getAllCabs = async (req, res) => {
	try {
		const allCabs = await Cab.find({});
		res.status(200).json(allCabs);
	} catch (error) {
		console.error("Error fetching cabs:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// Add Cab
const addCab = async (req, res) => {
	try {
		const newCab = new Cab(req.body);
		await newCab.save();

		res.status(201).send({ message: "Cab added successfully", cab: newCab });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// Update Cab
const updateCab = async (req, res) => {
	try {
		const { selectedCarId } = req.body;

		const cab = await Cab.findByIdAndUpdate(
			selectedCarId,
			{ ...req.body },
			{ new: true }
		);

		if (!cab) {
			return res.status(404).json({ message: "Cab not found" });
		}

		res.status(200).json({ message: "Cab updated successfully", cab: cab });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export { getAllCabs, addCab, updateCab };
