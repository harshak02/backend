import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },
  email: {
    type: String,
    required: [true, "User name is required."],
    unique: [true, "Email should be unique"],
  },
  password: {
    type: String,
    required: [true, "User name is required."],
    minlength: [6, "Password should be greater than 6 characters."],
  },
  role : {
    type : String,
    required : true,
    default : "user"
  },
  notes: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Note",
        required: true,
      },
    ],
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
