import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const taskSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    displayId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "displays",
        required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    people_task: [{ _id: String, name: String }],
    status: { type: String, default: "active" },
    initial_at: { type: Date, default: Date.now },
    ended_at: { type: Date, required: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("tasks", taskSchema);
