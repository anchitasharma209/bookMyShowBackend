const mongoose = require("mongoose");
const URL = `mongodb+srv://anchitasharma209:EXNRJSoaNrHeVL5H@cluster0.utlmobu.mongodb.net/`;


const dbconnect = async()=>{
    let db = null;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true,
                 useUnifiedTopology:true});
        db= mongoose.connection;         
                let dbR= console.log("Connection Successful");
                return dbR;
    }catch(error){
        console.log("Error while connecting database",error)
    }
}
 dbconnect()
// .then(res=>console.log("Connection done")).catch(err=>console.log("Error"));
// mongoose.connect(URL,{
    
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>console.log("Connection Successful"))
// .catch((err)=>console.log(err));
// mongoose.connect(URL,{useNewUrlParser:true,
//                       useUnifiedTopology:true});
// const conn = mongoose.connection;
// conn.once('open',()=>{
//     console.log("connected");
// })
