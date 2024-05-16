
import mongoose from "mongoose";

// Define the schema for the user entity
const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  });
  
  export default mongoose.model("tasks", taskSchema);