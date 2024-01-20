"use client";
import { useState, useEffect } from "react";
import {
    getPatients,
    getPatientById,
    getPatientsByDoctor,
    addNewPatient,
    addDoctorToPatient,
} from "@/lib/actions/patient";

export default function usePatient(id, queryBy) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = !id
                    ? await getPatients()
                    : queryBy === "id"
                    ? await getPatientById(id)
                    : queryBy === "doctor"
                    ? await getPatientsByDoctor(id)
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

    const createPatient = async (formData) => {
        const newPatient = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            gender: formData.get("gender"),
            birthDate: formData.get("dateOfBirth"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            description: formData.get("description"),
            doctors: [],
            appointments: [],
        };
        await addNewPatient(newPatient);
    };

    return { data, isLoading, error, createPatient };
}
