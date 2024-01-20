"use server";
import connectDB from "@/lib/mongodb";
import Doctors from "@/models/Doctors";
import bcrypt from "bcrypt";

export const doctorAuth = async (login) => {
    try {
        await connectDB();
        const data = await Doctors.find({ login: login });
        return (data.length !== 0) ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
    return false;
};

export const getDoctors = async () => {
    try {
        await connectDB();
        const data = await Doctors.find();
        return (data.length !== 0) ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getDoctorById = async (id) => {
    try {
        await connectDB();
        const data = await Doctors.findOne({ doctorId: id });
        return data ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const addNewDoctor = async (doctor) => {
    let doctorId;
    const generateId = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        const generatedId = "dc" + randomNumber;
        return generatedId;
    };

    doctor.password = bcrypt.hashSync(doctor.password, 7);

    do {
        doctorId = generateId();
    } while (await Doctors.findOne({ doctorId }));

    try {
        await connectDB();
        await Doctors.create({ doctorId, ...doctor });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export const addPatientToDoctor = async (id, newPatient) => {
    try {
        await connectDB();
        await Doctors.findOneAndUpdate({ doctorId: id }, { $push: { patients: newPatient } });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};
