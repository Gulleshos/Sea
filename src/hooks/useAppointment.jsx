"use client";
import { useState, useEffect } from "react";
import {
    getAppointments,
    getAppointmentsByDoctor,
    getAppointmentsByPatien,
    addNewAppointment,
    addNewReport,
} from "@/lib/actions/appointment";

import { addPatientToDoctor } from "@/lib/actions/doctor";
import { addDoctorToPatient } from "@/lib/actions/patient";

export default function useAppointment(id, queryBy) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = !id
                    ? await getAppointments()
                    : queryBy === "doctor"
                    ? await getAppointmentsByDoctor(id)
                    : queryBy === "patient"
                    ? await getAppointmentsByPatien(id)
                    : null;
                setData(response ? JSON.parse(response) : null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, queryBy]);

    const createAppointment = async (patient, doctor, formData) => {
        const newAppointment = {
            patient: {
                patientId: patient.patientId,
                patientName: patient.firstName + " " + patient.lastName,
            },
            doctor: {
                doctorId: doctor.doctorId,
                doctorName: doctor.firstName + " " + doctor.lastName,
            },
            date: formData.get("date"),
            time: formData.get("time"),
            description: formData.get("description"),
            status: "planned",
            conclusion: null,
            prescription: {
                name: null,
                duration: null,
                description: null,
            },
            cost: null,
        };

        await addNewAppointment(newAppointment);
        if (
            !doctor.patients.find(
                (doctorsPatient) => patient.patientId === doctorsPatient.patientId
            )
        ) {
            await addPatientToDoctor(doctor.doctorId, {
                patientId: patient.patientId,
                patientName: patient.firstName + " " + patient.lastName,
            });
        }

        if (
            !patient.doctors.find((patientsDoctor) => doctor.doctorId === patientsDoctor.doctorId)
        ) {
            await addDoctorToPatient(patient.patientId, {
                doctorId: doctor.doctorId,
                doctorName: doctor.firstName + " " + doctor.lastName,
            });
        }
    };

    const createReport = async (formData) => {
        const appointmentId = formData.get("appointmentId");
        const newReport = {
            cost: +formData.get("cost"),
            prescription: {
                name: formData.get("nameOfPrescription"),
                duration: +formData.get("durationOfPrescription"),
                description: formData.get("prescription"),
            },
            conclusion: formData.get("conclusion"),
            status: "success",
        };

        await addNewReport(appointmentId, newReport);
    };

    return { data, isLoading, error, createAppointment, createReport };
}
