import express from "express";
import userModel from "../models/userModel.js";
import { comparePassword, hashedPassword } from "../helper/authHelper.js";
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, answer, role } = req.body;

    if (!name || !email || !password || !phone || !answer) {
      return res.status(400).send({
        success: false,
        message: "All fields are required."
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered."
      });
    }

    const hashPassword = await hashedPassword(password);
    const user = new userModel({ name, email, password: hashPassword, role, phone, answer });
    await user.save();

    res.status(200).send({
      success: true,
      message: "Registration successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        answer: user.answer,
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
      
    });
  }
};

//login 
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required."
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not registered."
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Incorrect password."
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_KEY, { expiresIn: '1d' });

    res.status(200).send({
      success: true,
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        answer: user.answer,
        role: user.role,
      },
      token
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error
    });
  }
}

export const updateProfileController = async (req, res) => {
  try {
    const { name, email, phone, password, answer } = req.body;

    const user = await userModel.findById(req.user._id);
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(req.user._id, {
      name: name || user.name,
      email: email || user.email,
      phone: phone || user.phone,
      answer: answer || user.answer,
      password: hashedPassword || user.password,
    }, { new: true });

    res.status(200).send({
      success: true,
      message: 'Profile updated successfully',
      updatedUser
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error in updating profile',
      error
    });
  }
}
