import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const doctor = mongoose.model('doctor', doctorSchema);
export default doctor;