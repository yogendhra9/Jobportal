import { compare } from "bcryptjs";
import mongoose from "mongoose";
import { User } from "./user.model";
import { application } from "express";
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
    type: String,
    required: true,
  },
  salary: {
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
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "application",
  },
});
export const Job = mongoose.model("Job", jobSchema);
