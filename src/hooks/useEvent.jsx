"use client";
import { useState, useEffect } from "react";
import { getEvents, getTodayEvent, addNewEvent } from "@/lib/actions/event";

export default function useEvent(queryBy) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = queryBy === "today" ? await getTodayEvent() : await getEvents();
                setData(response ? JSON.parse(response) : null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const createEvent = async ({ formData }) => {
        const newEvent = {
            title: formData.get("title"),
            date: formData.get("date"),
            time: formData.get("time"),
            description: formData.get("description"),
        };

        await addNewEvent(newEvent);
    };

    return { data, isLoading, error, createEvent };
}
