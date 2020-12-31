const express = require("express");
const router = express.Router();
const { Chat } = require("../models/Chat");


router.get("/getChats", function (req, res) {

    Chat.find()
       .populate("sender")
       .exec((err, chats) =>{
           if(err) return res.status(400).send(err);
           res.status(200).send(chats);
           console.log(chats,"here are the chats")
       })
  
  });

  module.exports = router;