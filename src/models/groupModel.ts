import mongoose from "mongoose";
import { Group } from "../lib/types";


const groupSchema = new mongoose.Schema<Group>({
    name: {
        type : String
    
    },
    admin: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"

    },
    participants: {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "User"
    },
    groupPicture: {
        type : String 
    },
    description: {
        type : String
    }
    
},
{timestamps : true }
)



const GroupModel = mongoose.model("group", groupSchema)



export default GroupModel