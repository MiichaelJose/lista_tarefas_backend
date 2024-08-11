import mongoose from "mongoose";
// possibilitar o usuario a ter mais de uma display na workspace
// possibilitar o usuario mudar o tipo do display, (portanto  que nao já criado o mesmo)
// por enquanto temos apenas um (journey)
const displaySchema = new mongoose.Schema({
    type: { type: String, require: true, default: "journey" },
    journeys: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'journeys', required: true }
    ],
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workspaces",
        required: true
    },
    tagId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tags",
        required: true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("displays", displaySchema);
