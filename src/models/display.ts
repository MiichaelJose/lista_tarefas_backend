import mongoose from "mongoose";
// possibilitar o usuario a ter mais de uma display na workspace
// possibilitar o usuario mudar o tipo do display, (portanto  que nao já criado o mesmo)
// por enquanto temos apenas um (journey)
const displaySchema = new mongoose.Schema({
    type: { type:String, require: true, default:'journey' },
    journey: [{ type:String }],
    workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'workspaces', required: true },
});

export default mongoose.model('displays', displaySchema);