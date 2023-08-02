import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registeredDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Client", clientSchema);
