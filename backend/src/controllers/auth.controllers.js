import { generateToken } from "../lib/utils.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const singUp = async (req, res) => {

    const { firstName, lastName, email, mobile, password } = req.body;

    try {

        if (password.length < 6) {
            return res.status(400).send("Password must be at least 6 characters long");
        }

        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(400).send("User already exists with this email");
        }

        const userMobileNo = await User.findOne({ mobile });
        if (userMobileNo) {
            return res.status(400).send("User already exists with this mobile number");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            mobile,
            password: hashedPassword
        });

        if(newUser){

            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                mobile: newUser.mobile,
            });

            return res.status(201).send("User created successfully");

        }
        else{
            return res.status(400).send("User not created");
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}

export const login = (req, res) => {
    res.send("singup Page");
}

export const logout = (req, res) => {
    res.send("singup Page");
}