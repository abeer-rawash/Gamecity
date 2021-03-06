const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    postId: {
      type: String,
    },
    message: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfileSchema",
    }, //By this we will have all the profileSchema
    nowTime: {
      type: String,
    },
    type: {
      //chatt type
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);
module.exports = { Chat };
