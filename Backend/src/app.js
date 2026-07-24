const express = require('express');
const postModel = require('./models/post.model');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const upload = multer({storage:multer.memoryStorage()})

// post-> Create post
app.post('/create-post',upload.single('image'), async (req,res)=>{
     console.log(req.body);
     const result = await uploadFile(req.file.buffer);
     const post = await postModel.create({
          image:result.url,
          caption:req.body.caption
     })

     res.status(201).json({
          message:'Post created successfully!',
          post
     })
     console.log(result)
})

// Get -> get all posts
app.get('/posts',async (req,res)=>{
     const posts = await postModel.find();
     res.status(200).json({
          messgae:'All posts fetched successfully!',
          posts
     })
})
module.exports = app;