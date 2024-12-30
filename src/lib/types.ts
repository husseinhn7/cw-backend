import { chatTypeEnum } from "./enums";
import mongoose from "mongoose";





export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    bio?: string;
    profilePicture?: string;
    lastSeen : Date,
    friends?: Array<string>;
    friendRequests?: Array<string>;
    passwordResetToken?: string;
    passwordResetTokenExpiration?: Date;
    emailVerificationToken?: string;
    emailVerificationTokenExpiration?: Date;
    comparePassword : (plainText:string)=>Promise<boolean>;
}


export type Chat = {
    chatType : chatTypeEnum,
    lastMessage : mongoose.Types.ObjectId,
    participants : mongoose.Types.ObjectId[]
}


export type Message = {
    sender : mongoose.Types.ObjectId,
    lastMessage : mongoose.Types.ObjectId,
    participants : mongoose.Types.ObjectId[]
}

export type Group = {
    name:  string;
    admin: mongoose.Schema.Types.ObjectId;
    participants: [mongoose.Schema.Types.ObjectId];
    groupPicture: string;
    description: string;
}