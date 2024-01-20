import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    eventId: String,
    title: String,
    date: Date,
    time: String,
    description: String,
});

const Events = mongoose.models.Events || mongoose.model("Events", eventSchema);

export default Events;
