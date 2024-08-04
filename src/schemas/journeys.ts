import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
    name: { type: String, required: true },
})

export default mongoose.model("journeys", journeySchema)