import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const notificationSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    type: { type: String, default: "warn" },
    status: { type: String, require: true },
    downtime: { type: Number, default: 7 },
    people_notify: [{ _id: String, name: String }],
    task_notify: { _id: String, title: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("notifications", notificationSchema);
