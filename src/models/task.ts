import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    customerId:mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
  
export default mongoose.model("tasks", taskSchema);