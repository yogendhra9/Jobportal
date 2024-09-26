import { Company } from "../models/company.model.js";
import mongoose from "mongoose";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: false });
    }
    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "You cannot add the same company twice",
        success: false,
      });
    }
    company = Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "company registered successfully",
      success: "true",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    console.log(userId);
    const companies = await Company.find({ userId });
    console.log(companies);

    if (!companies) {
      return res
        .status(400)
        .json({ message: "Company not found", success: false });
    }
    return res.status(200).json({ message: companies, success: true });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCompanybyId = async (req, res) => {
  try {
    // const companyId = req.params.id;
    // console.log(companyId);
    const company = await Company.findOne({ userId: req.params.id });
    console.log(company);

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company not found", success: false });
    }
    if (company) {
      return res.status(200).json({ company, success: true });
    }
  } catch (error) {
    console.log(error);
  }
};
export const updateCompnayInfo = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { name, description, website, location } = req.body;
    const file = req.file;
    //cloudinary
    const updateData = {
      name,
      description,
      website,
      location,
    };
    console.log(updateData);
    const existingCompany = await Company.findOne({ userId: req.params.id });
    console.log("company:", existingCompany);

    let company = await Company.findOneAndUpdate(
      { userId: companyId },
      updateData,
      {
        new: true,
      }
    );
    console.log(company);
    if (!company) {
      return res
        .status(400)
        .json({ message: "Company not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Updated successfully", company, success: true });
  } catch (error) {
    console.log(error.message);
  }
};
