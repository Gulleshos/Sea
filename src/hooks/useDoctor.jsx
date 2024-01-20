"use client";
import { useState, useEffect } from "react";
import {
    getDoctors,
    getDoctorById,
    addNewDoctor,
    addPatientToDoctor,
    doctorAuth,
} from "@/lib/actions/doctor";

export default function useDoctor(id) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = !id ? await getDoctors() : await getDoctorById(id);
                setData(response ? JSON.parse(response) : null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const createDoctor = async (formData) => {
        const newDoctor = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            gender: formData.get("gender"),
            birthDate: formData.get("dateOfBirth"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            post: formData.get("post"),
            experience: +formData.get("experience"),
            salary: +formData.get("salary"),
            accessLevel: formData.get("accessLevel"),
            description: formData.get("description"),
            login: formData.get("login"),
            password: formData.get("password"),
            patients: [],
            appointments: [],
        };

        await addNewDoctor(newDoctor);
    };

    return { data, isLoading, error, createDoctor, doctorAuth };
}
