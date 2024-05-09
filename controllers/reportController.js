import reportSchema from '../model/reportSchema.js';

export default class reportController {
	static async createReport(req, res) {
		const id = req.params.id;
		const { doctorname, status, date } = req.body;
		try {
			const newReport = new reportSchema({
				doctorname,
				status,
				patient: id,
			});
			await newReport.save();
			res.status(201).json({ newReport });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	static async getReports(req, res) {
		try {
			const id = req.params.id;
			const reports = await reportSchema.find({ patient: id });
			res.status(200).json({ reports });
		} catch (error) {
			res.status(500).json({ message: error.messJage });
		}
	}

	static async getReportsByStatus(req, res) {
		const { status } = req.params;
		console.log(status);
		try {
			const reports = await reportSchema.find({ status });
			res.status(200).json({ reports });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}
