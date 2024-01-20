import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
    appointmentId: { type: String, unique: true },
    doctor: { doctorId: String, doctorName: String },
    patient: { patientId: String, patientName: String },
    date: Date,
    time: String,
    status: String,
    cost: Number,
    prescription: { name: String, description: String, duration: Number },
    conclusion: String,
    description: String,
});

const Appointments =
    mongoose.models.Appointments || mongoose.model("Appointments", appointmentSchema);

export default Appointments;
