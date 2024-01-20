"use server";
import connectDB from "@/lib/mongodb";
import Events from "@/models/Events";

export const getEvents = async () => {
    try {
        await connectDB();
        const data = await Events.find();
        return (data.length !== 0) ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};

export const getTodayEvent = async () => {
    const currentDate = new Date();
    try {
        await connectDB();
        const data = await Events.findOne({ date:  { $gte: currentDate } });
        return data ? JSON.stringify(data) : null;
    } catch (error) {
        console.log(error);
    }
};


export const addNewEvent = async (event) => {
    let eventId;
    const generateId = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        const generatedId = "ev" + randomNumber;
        return generatedId;
    };

    do {
        eventId = generateId();
    } while (await Events.findOne({ eventId }));

    try {
        await connectDB();
        await Events.create({ eventId, ...event });
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};