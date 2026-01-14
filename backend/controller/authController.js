import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken } from "../config/token.js";
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existUser = await User.findOne({email});
        if (existUser) {
            return res.status(400).json({message : "email already exist"});
        }
        if(!validator.isEmail(email)) {
            return res.status(400).json({message : "Enter Valid Email"});
        }
        if(password.length < 8) {
            return res.status(400).json({message : "Password must be atleast 8 characters long"});
        }
        let hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name , email, password : hashPassword});
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly : true,
            secure : false,
            sameSite : "Strict",
            maxAge : 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user);
    } catch (error) {
        console.log("registration error");
        return res.status(500).json({message : `registration Error ${error}`});
    }
}

export const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message : "User not found"});
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message : "Incorrect password"});
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly : true,
            secure : false,
            sameSite : "Strict",
            maxAge : 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({message : "Login Successfull"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Login Error ${error}`});
    }
}
export const logout = async(req , res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({message : "logout successfull"});
    } catch (error) {
        console.log("logout error");
        return res.status(500).json({message : `logout error ${error}`});
    }
}