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
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists.", success: false });
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
    const lowerCaseEmail = email.toLowerCase();
    const newUser = await User.create({
      fullName,
      email: lowerCaseEmail,
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
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields.", success: false });
    }
    console.log(req.body);
    
    const lowerCaseEmail = email.toLowerCase();
    let user = await User.findOne({ email: lowerCaseEmail });
    if (!user) {
      return res.status(400).json({
        message: "Invalid login credentials",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid password",
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
    };
    console.log(tokenData);

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    console.log(token);
    user = {
      _id: user.id,
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    console.log(user);

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 100,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back ${user.fullName}`, user, success: true });
  } catch (error) {
    console.log(error);

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

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    console.log(userId);

    let user = await User.findById(userId);
    console.log(user);

    if (!user) {
      return res
        .status(400)
        .json({ message: "user not found", success: false });
    }
    //Updating the profile
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (password) user.password = password;
    if (skills) user.skills = skills;
    if (bio) user.bio = bio;
    await user.save();
    //resume
    user = {
      _id: user.id,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .json({ message: "Profile updated successfully", user, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
