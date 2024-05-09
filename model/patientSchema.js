import { Schema, model } from 'mongoose';
const patientSchema = new Schema({
    phone: Number
});
export default model('patient', patientSchema)