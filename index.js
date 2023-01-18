const userRoutes=require('./routes/user')
const collect2Routes=require('./routes/collect2')
const collect3Routes=require('./routes/collect3')
const collect4Routes=require('./routes/collect4')
const collect5Routes=require('./routes/collect5')
const collect6Routes=require('./routes/collect6')



const express=require('express');
const mongoose = require('mongoose')
const app=express();
app.use(express.json())

const uri = "******";

mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

app.use("/user",userRoutes)
app.use("/collect2",collect2Routes )
app.use("/collect3",collect3Routes)
app.use("/collect4",collect4Routes)
app.use("/collect5",collect5Routes)
app.use("/collect6",collect6Routes)


app.listen(3000,()=>{
    console.log( "server connected")
}
)


