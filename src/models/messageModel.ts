import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";




const messageSchema  = new mongoose.Schema({
    sender: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    chat: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Chat"
    },
    content: {
        type : String,
    },
    // type: String (e.g., "text", "image", "video", etc.).
    // attachments: Array of Strings (URLs of attached media files).
    isRead:{
         type :  Boolean
        }  
    },
{timestamps : true}

)



const MessageModel = mongoose.model("Message", messageSchema)

export default MessageModel