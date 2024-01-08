const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());

port = 5000;

// routes
const poetRouter = require('./routes/poetRoute')
app.use("/api/poet",poetRouter)


mongoose.connect("mongodb://localhost:27017/final").then(()=> {console.log("Connection established")}).catch((error)=> {console.log("error connecting to mongodb:" + error)})



app.listen (port, (req,res) =>{
    console.log("listening on port")
})
