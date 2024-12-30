import mongoose from "mongoose";
import { chatTypeEnum } from "../lib/enums";
import { Chat } from "../lib/types";


const chatSchema  = new mongoose.Schema<Chat>({
    chatType : {
        type : String,
        enum : Object.values(chatTypeEnum)
    },
    participants : {
        type : [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    lastMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"

    }
},
    {timestamps: true}
)



const ChatModel = mongoose.model("chat", chatSchema)


export default ChatModel