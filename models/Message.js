import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   receiver: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true
   },
   text: {
      type: String,
      required: true,
   },
}, {
   timestamps: true
})

export default mongoose.model('Message', MessageSchema )