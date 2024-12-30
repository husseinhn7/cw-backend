import { NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { User } from "../lib/types";


const userSchema = new mongoose.Schema<User>({
    firstName: {
        type: String,
        required: true,        
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    },
    friends: {
        type: Array,
        required: false
    },
    friendRequests: {
        type: Array,
        required: false
    },
    lastSeen : {
        type : Date
    },
    passwordResetToken: {
        type: String,
        required: false
    },
    passwordResetTokenExpiration: {
        type: Date,
        required: false
    },
    emailVerificationToken: {
        type: String,
        required: false
    },
    emailVerificationTokenExpiration: {
        type: Date,
        required: false
    },
},
{timestamps: true},
);








userSchema.pre("save", async function (next){
    const hashedPassword = await bcrypt.hash(this.password, 12)
    this.password = hashedPassword
    next()
} )

userSchema.methods.comparePassword =  async function (plainText : string){
    return await bcrypt.compare(plainText, this.password)
}

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
