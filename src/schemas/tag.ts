import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const tagSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    txt_color_hex: {
        type: String,
        default: "#000000"
    },
    bgd_color_hex: {
        type: String,
        default: "#808080"
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("tags", tagSchema);
