import patientSchema from '../model/patientSchema.js';

export default class PatientController {
	static async createPatient(req, res) {
		const { phone } = req.body;
		if (!phone) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		try {
			const patient = await patientSchema.findOne({
				phone: phone,
			});
			if (patient) {
				res.status(200).json({ id: patient._id });
			} else {
				const newPatient = new patientSchema({
					phone: phone,
				});
				await newPatient.save();

				res.status(201).json({ id: newPatient._id });
			}
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}
