"use server";
import connectDB from "@/lib/mongodb";
import Appointments from "@/models/Appointments";
import Doctors from "@/models/Doctors";
import Patients from "@/models/Patients";

export const getAppointments = async () => {
    try {
        await connectDB();
        const data = await Appointments.find();
        return data.length !== 0 ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getUpcomingAppointments = async (userId) => {
    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(currentDate.getDate() + 7);

    const appointmentFilter = userId
        ? {
              $match: {
                  date: { $gte: currentDate, $lte: endDate },
                  "doctor.doctorId": userId,
              },
          }
        : { $match: { date: { $gte: currentDate, $lte: endDate } } };
        
    try {
        await connectDB();
        const data = await Appointments.aggregate([appointmentFilter]);
        return data.length > 0 ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getAppointmentsByDoctor = async (id) => {
    try {
        await connectDB();
        const data = await Appointments.find({ "doctor.doctorId": id });
        return data.length !== 0 ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getAppointmentsByPatien = async (id) => {
    try {
        await connectDB();
        const data = await Appointments.find({ "patient.patientId": id });
        return data.length !== 0 ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const addNewAppointment = async (appointment) => {
    let appointmentId;
    const generateId = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        const generatedId = "ap" + randomNumber;
        return generatedId;
    };

    do {
        appointmentId = generateId();
    } while (await Appointments.findOne({ appointmentId }));

    try {
        await connectDB();
        await Appointments.create({ appointmentId, ...appointment });
        await Doctors.findOneAndUpdate(
            { doctorId: appointment.doctor.doctorId },
            {
                $push: {
                    appointments: {
                        appointmentId: appointmentId,
                        patientId: appointment.patient.patientId,
                    },
                },
            }
        );

        await Patients.findOneAndUpdate(
            { patientId: appointment.patient.patientId },
            {
                $push: {
                    appointments: {
                        appointmentId: appointmentId,
                        doctorId: appointment.doctor.doctorId,
                    },
                },
            }
        );
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export const addNewReport = async (appointmentId, report) => {
    try {
        await connectDB();
        await Appointments.findOneAndUpdate(
            { appointmentId: appointmentId },
            report
        );
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export const removeAppointmentsByDoctor = async (id) => {
    try {
        await connectDB();
        await Appointments.deleteMany({ "doctor.doctorId": id });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export const removeAppointmentsByPatient = async (id) => {
    try {
        await connectDB();
        await Appointments.deleteMany({ "patient.patientId": id });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};