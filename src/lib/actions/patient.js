"use server";
import connectDB from "@/lib/mongodb";
import Patients from "@/models/Patients";


export const getPatients = async () => {
    try {
        await connectDB();
        const data = await Patients.find();
        return (data.length !== 0) ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getPatientById = async (id) => {
    try {
        await connectDB();
        const data = await Patients.findOne({ patientId: id });
        return data ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getPatientsByDoctor = async (id) => {
    try {
        await connectDB();
        const data = await Patients.find({ "doctors.doctorId": id });
        return (data.length !== 0) ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const addNewPatient = async (patient) => {
    let patientId;
    const generateId = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        const generatedId = "pt" + randomNumber;
        return generatedId;
    };

    do {
        patientId = generateId();
    } while (await Patients.findOne({ patientId }));

    try {
        await connectDB();
        await Patients.create({ patientId, ...patient });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export const updatePatient = async (id, updatedPatient) => {
    try {
        await connectDB();
        await Patients.findOneAndUpdate({ patientId: id }, updatedPatient);
    } catch (error) {
        console.log(error);
    }
}

export const deletePatient = async (id) => {
    try {
        await connectDB();
        await Patients.deleteOne({ patientId: id });
    } catch (error) {
        console.log(error);
    }
}

export const addDoctorToPatient = async (id, newDoctor) => {
    try {
        await connectDB();
        await Patients.findOneAndUpdate({ patientId: id }, {$push: { doctors: newDoctor }});
        return { success: true };
    } catch (error) {
        console.log(error);
    }
}

export const removeDoctorFromPatient = async (doctorId) => {
    try {
        await connectDB();
        await Patients.updateMany({ }, {$pull: { doctors: {doctorId: doctorId} }});
        return { success: true };
    } catch (error) {
        console.log(error);
    }
}

export const removeAppointmentsByDoctorFromPatient = async (doctorId) => {
    try {
        await connectDB();
        await Patients.updateMany({ }, {$pull: { appointments: {doctorId: doctorId} }});
        return { success: true };
    } catch (error) {
        console.log(error);
    }
}