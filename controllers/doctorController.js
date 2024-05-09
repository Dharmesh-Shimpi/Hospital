import doctorModel from '../model/doctorSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default class DoctorController {
	static async createDoctor(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: 'All fields are required' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		try {
			const doctor = await doctorModel.create({
				username,
				password: hashedPassword,
			});
			res.status(201).json({ doctor });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	static async loginDoctor(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		const doctor = await doctorModel.findOne({ username });
		if (!doctor) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		const isPasswordCorrect = await bcrypt.compare(password, doctor.password);
		if (!isPasswordCorrect) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
		res.status(200).json({ token, doctor });
	}
}
