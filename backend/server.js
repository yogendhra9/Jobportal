import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
app.get("/home");
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3002",
  Credentials: true,
};
app.use(cors(corsOptions));
//api's
app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is listening on port ${PORT}`);
});
