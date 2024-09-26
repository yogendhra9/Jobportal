import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config();
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 3002;
app.get("/home");
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3002",
  Credentials: true,
};
app.use(cors(corsOptions));
//api's
app.use("/api/v1/users", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is listening on port ${PORT}`);
});
