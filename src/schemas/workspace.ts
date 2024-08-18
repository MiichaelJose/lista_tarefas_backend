import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const workspaceSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("workspaces", workspaceSchema);
