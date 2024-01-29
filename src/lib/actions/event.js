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

export const getUpcomingEvents = async () => {
    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(currentDate.getDate() + 7);

    try {
        await connectDB();
        const data = await Events.aggregate([{ $match: { date: { $gte: currentDate, $lte: endDate }}}, {$limit: 2}]);
        return data.length > 0 ? JSON.stringify(data) : null;
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