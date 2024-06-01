const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
const cors=require('cors');
const path=require('path');
const { authenticate } = require('./middleware/authenticate');

const employeeRoute = require('./routes/employeeRoute');
const meetingRoute = require('./routes/meetingRoute');
const authRoute = require('./routes/authRoute');
const pageNotFoundRoute = require('./routes/pageNotFoundRoute');

const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

app.use(cors());
app.use(express.json());
const connectDB=async()=>{
    try{

        await mongoose.connect(process.env.URL);
        console.log("connection succesful");

    }
    catch(err){
        console.log("connection not found");

    }
}
dotenv.config();
connectDB();
app.use('/api/v1/', authRoute);
app.use('/api/v1/employees/', authenticate, employeeRoute);
app.use('/api/v1/meetings/', authenticate, meetingRoute);

app.use(errorHandlerMiddleware);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});



app.listen(5000,()=>{
    console.log("server starts now..");
})