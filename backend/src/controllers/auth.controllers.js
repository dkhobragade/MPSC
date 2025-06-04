import { generateToken } from "../lib/utils.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {

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

export const login = async (req, res) => {

    const {mobile, password} = req.body

    try {

        const user = await User.findOne({ mobile });

        if (!user) {
            return res.status(400).json({
                message: "User not found with this mobile number"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobile: user.mobile,
        });


    } catch (error) {
        console.log("Error in login",error.message)
        res.status(500).json({
            message:'Internal Server Error'
        })

    }

}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({
            message: "User logged out successfully"
        });
    } catch (error) {

    console.log("Error in logout",error.message)
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

export const checkAuth = (req, res) => {

    try {

        res.status(200).json({
            message: "User is authenticated",
            user: req.user
        });

    } catch (error) {
        console.log("Error in checkAuth", error.message);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}