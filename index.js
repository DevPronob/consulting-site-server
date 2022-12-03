const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(5000,() =>{
    console.log("Server is running")
})

app.use('/api', require('./router/sendMailRoutes'))