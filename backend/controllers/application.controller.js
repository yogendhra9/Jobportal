import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "JobId is required", success: false });
    }
    //Check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }
    //Checking the existence of job
    const job = await Job.findById(jobId);
    if (!job) {
      return res(400).json({ message: "No jobs found", success: false });
    }
    //create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res
      .status(201)
      .json({ message: "Application created successfully", success: true });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const appliedJobs = await Application.find({ applicant: userId }).populate({
      path: "job",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "companyId",
        options: { sort: { createdAt: -1 } },
      },
    });

    if (!appliedJobs) {
      return res
        .status(404)
        .json({ message: "No applications found", success: true });
    }
    return res.status(200).json(appliedJobs);
  } catch (error) {
    console.log(error.message);
  }
};
//Job provider has to see how many applications has been recieved
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.find({ _id: jobId }).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        model: "User",
        select: "name email",
      },
    });

    // const job = await Job.findOne({ _id: jobId }).populate({
    //   path: "applications",
    //   options: { sort: { createdAt: -1 } },
    //   populate: {
    //     path: "applicant",
    //   },
    // });

    return res.status(200).json({ message: job, success: true });
  } catch (error) {
    console.log(error.message);
    // return res.status(400).json({
    //   message: error,
    // });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(404).json({ message: "status is required", success: false });
    }
    const application = await Application.findOne({_id:applicationId})
    console.log(application);
    if(!application)
    {
        return res.status(404).json({ message: "Application not found", success: false });
    }
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({ message: "Application status updated", success: true });
  } catch (error) {
    console.log(error.message);
  }
};
