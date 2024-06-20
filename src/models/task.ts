import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workspaces',
        required: true,
    },
    tagId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tags',
        required: true,
    },
    status: {
        type: String,
        default: "active"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        default: '',
        type: String,
    },
    initial_at: {
        type: Date
    },
    ended_at: {
        type: Date
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('tasks', taskSchema);
