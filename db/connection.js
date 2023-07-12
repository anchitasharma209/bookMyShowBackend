const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://anchitasharma209:v17Kx2rJOj0kcD5Y@cluster0.utlmobu.mongodb.net/",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Connection Successful"))
.catch((err)=>console.log(err));