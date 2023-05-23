const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors())
dotenv.config()
app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const robotSchema = new mongoose.Schema({
     name : String,
     price : Number,
     description : String,
     imageURL : String,
})

const robotModel = mongoose.model('Robot', robotSchema);

//Post ALL DATAS
app.post(`/api/robot`,async(req,res)=>{
     const{name,price,description,imageURL} = req.body
     const newRobot = robotModel({
          name:name,
          price:price,
          description:description,
          imageURL:imageURL,
     })
     await newRobot.save()
     res.status(200).send({
          message:"Posted succesfully!",
          payload:newRobot
     })
})

//GET ALL DATAS

app.get(`/api/robot`,async(req,res)=>{
     const {name} = req.query
     const newInforobot = await robotModel.find()
     if(!name){
          res.status(201).send(newInforobot)
     }
     else{
          const searchedRobot = newInforobot.filter((x)=>
               x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          )
          res.status(200).send(searchedRobot)
     }
})

//GET ALL DATAS BY ID

app.get(`/api/robot/:id`,async(req,res)=>{
     const {id} = req.params
     const robotID = await robotModel.findById(id)
     res.status(200).send(robotID)
})

//DELETE

app.delete(`/api/robot/:id`,async(req,res)=>{
     const id = req.params.id;
     //console.log('id- ',id);
     const robotDelete = await robotModel.findByIdAndDelete(id)
     res.status(202).send({
          message:`${robotDelete.name} deleted succesfully!`
     })
})

//PUT

app.put(`/api/robot/:id`,async(req,res)=>{
     const id = req.params.id
     const{name,price,description,imageURL} = req.body
     const updateRobot = {
          name:name,
          price:price,
          description:description,
          imageURL:imageURL,
     }
     await robotModel.findByIdAndUpdate(id,updateRobot)
     res.status(200).send({
          message:`${updateRobot.name} updated succefully!`
     })
})











PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD)).then(()=>{
     console.log("MongoDB Connected!")
});

