import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
// possibilitar o usuario a ter mais de uma display na workspace
// possibilitar o usuario mudar o tipo do display, (portanto  que nao já criado o mesmo)
// por enquanto temos apenas um (journey)

const displaySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    type: { type: String, require: true, default: "journey" },
    journeys: [
        { type: String, ref: 'journeys', required: true }
    ],
    workspaceId: {
        type: String,
        ref: "workspaces",
        required: true
    },
    tagId: {
        type: mongoose.Schema.Types.UUID,
        ref: "tags",
        required: true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("displays", displaySchema);
