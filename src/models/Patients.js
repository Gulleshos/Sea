import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({
    patientId: String,
    firstName: String,
    lastName: String,
    gender: String,
    birthDate: Date,
    email: String,
    phone: String,
    address: String,
    description: String,
    doctors: [{ doctorId: String, doctorName: String }],
    appointments: [{ appointmentId: String, doctorId: String }],
});

const Patients = mongoose.models.Patients || mongoose.model("Patients", patientSchema);

export default Patients;
