import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields.", success: false });
    }
    let user = await User.findOne(email);
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists.", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!fullName || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields.", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid login credentials",
        success: false,
      });
    }
    const isPasswordMatch = await bycrpt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid login credentials",
        success: false,
      });
    }
    //Checking the role
    if (role != user.role) {
      return res.status(400).json({
        message: "Account doesnt exist with current role",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
      fullName: user.fullName,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user.id,
      fullname: user.fullName,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 100,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back ${user.fullName}`, user, success: true });
  } catch {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, bio, skills } = req.body;
    const file = req.file;
    // if (!fullName || !email || !phoneNumber || !password || !skills || !bio) {
    //   return res
    //     .status(400)
    //     .json({ message: "Something is missing", success: false });
    // }

    const skillsArray = skills.split(",");
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not found", success: false });
    }
    //Updating the profile
    (user.fullName = fullName),
      (user.email = email),
      (user.phoneNumber = phoneNumber),
      (user.password = password),
      (user.bio = bio),
      (user.skills = skillsArray);
    await user.save();
    //resume
    user = {
      _id: user.id,
      fullname: user.fullName,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .json({ message: "Profile updated successfully", user, success: true });
  } catch (error) {
    console.log(error);
  }
};
