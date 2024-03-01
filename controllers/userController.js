import handleAsyncError from "../middleware/catchAsyncError";
import Person from "../models/Person";
import CustomError from "../utils/createError";


//get all Users
export const getAllUsers = handleAsyncError(async (req, res, next) => {
  const users = await Person.find();
  if (!users || users.length === 0) {
    return next(new CustomError("No users registered.", 404));
  } else {
    res.status(200).json({
      message: "success",
      users,
    });
  }
});

//Add User
export const addUser = handleAsyncError(async (req, res, next) => {
  const { name, age, phone, location } = req.body;
  const newUser = new Person({
    name,
    age,
    phone,
    location,
  });
  let user;
  try {
    user = await newUser.save();
    res.status(200).json({
      message: "success",
      user,
    });
  } catch (err) {
    return next(new CustomError("Internal Server Error in SignUp", 505));
  }
});


//search by location
export const searchByLoc = async (req, res, next) => {

  const query = req.query.q;
  try {
      const users = await Person.find({ location : { $regex: query, $options: "i" } }).limit(40);//finds the users with atleast one user req tags in the users
      res.status(200).json({
          users
      })
  } catch (err) {
      next(err);
  }
}



//search by location
export const searchByName = async (req, res, next) => {

  const query = req.query.q;
  try {
      const users = await Person.find({ name : { $regex: query, $options: "i" } }).limit(40);//finds the users with atleast one user req tags in the users
      res.status(200).json({
          users
      })
  } catch (err) {
      next(err);
  }
}