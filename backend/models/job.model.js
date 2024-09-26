import mongoose from "mongoose";
import { Company } from "./company.model.js";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: Array,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  experienceLevel: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
});
export const Job = mongoose.model("Job", jobSchema);
