import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    displayId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'displays',
        required: true,
    },
    tagId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tags',
        required: true,
    },
    people_task: [{ _id: String, name: String }],
    status: { type: String, default: 'active' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    initial_at: { type: Date, required: true },
    ended_at: { type: Date, required: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('tasks', taskSchema);
