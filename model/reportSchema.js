import { Schema, model } from 'mongoose';
const reportSchema = new Schema({
	doctorname: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enums: [
			'Negative',
			'Travelled-Quarantine',
			'Symptoms-Quarantine',
			'Positive-Admit',
		],
		required: true,
	},
	date: {
		type: Date,
		default: new Date(),	
	},
	patient : {
		type: Schema.Types.ObjectId,
		ref: 'patient',
		required: true
	}
});

export default model('report', reportSchema);
