import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("mongoDb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
