import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema({
    doctorId: String,
    firstName: String,
    lastName: String,
    gender: String,
    birthDate: Date,
    email: String,
    phone: String,
    address: String,
    post: String,
    experience: Number,
    salary: Number,
    accessLevel: String,
    description: String,
    patients: [{ patientId: String, patientName: String }],
    appointments: [{ appointmentId: String, patientId: String }],
    login: String,
    password: String,
});

const Doctors = mongoose.models.Doctors || mongoose.model("Doctors", doctorSchema);

export default Doctors;
