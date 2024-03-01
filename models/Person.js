import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Person name is required."],
  },
  age: {
    type: Number,
    required: [true, "Age is required."]
  },
  phone: {
    type: String,
    required: [true, "Phone is required."],
    minlength: [10, "Number should be of 10 length"],
  },
  location: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required : true
  },
});

const Person = mongoose.model("Person", PersonSchema);
export default Person;
