import express from "express";
import dotenv from "dotenv";
import { MongoClient , ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import { auth } from "./User/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
// const port = 9000;

const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    try{
        const client = new MongoClient(MONGO_URL);
        await client.connect();
        console.log("MONGO CONNECTED");
        return client;
    }
    catch(err){
        console.error("Server not connected:", err);
        throw new Error("Database connection failed");
    }
}

const client = await createConnection().catch(err => {
    console.error(err.message,"Server not connected")
    process.exit(1);
});

async function genPassword(password){
    const salt = await bcrypt.genSalt(5);
    // console.log("salt",salt)
    const hashedPassword = await bcrypt.hash(password,salt)
    // console.log("hashedPass",hashedPassword)
    return hashedPassword;
}

app.post("/signup",async (req,res)=>{
    const {name, mail, phone, password, usertype} = req.body;

    const findUser = await client
    .db("travelkart")
    .collection("user")
    .findOne({mail: mail});

    if (findUser) {
        res.status(400).send({status: "401", msg: "User already exists"});
        return;
    }

    const hashedPassword = await genPassword(password);
    const user = await client
        .db("travelkart")
        .collection("user")
        .insertOne({name: name, mail: mail, phone: phone, password: hashedPassword, userType: usertype});
    
    res.send({status: "200", msg: "Successfully registered", user, name});
})

app.post("/login",async (req,res)=>{
    const {mail,password} = req.body;

    const findUser = await client
        .db("travelkart")
        .collection("user")
        .findOne({mail:mail})

    if(!findUser){
        res.status(401).send({status:"401",msg:"User not found, Please signup."})
        return
    }
    const storedPassword = findUser.password;
    const passwordMatch = await bcrypt.compare(password,storedPassword);

    if(passwordMatch){
        const token = jwt.sign({id:findUser._id},process.env.SECRET_KEY)
        res.send({status:"200",msg:"Successfully login",token:token,userType:findUser.userType,name:findUser.name,id:findUser._id});
        return
    }
    else{
        res.status(401).send({status:"401",msg:"Invalid Credential, Please try again"})
        return
    }
}) 

app.post("/booking/:userId",auth,async (req,res)=>{

    const data = req.body; 

    // console.log(data);

    try {

        if(!req.params.userId){
            return res.status(400).json({message:"Id is required"})
        }

        let Obj_id = new ObjectId(req.params.userId);

        const user = await client
        .db("travelkart")
        .collection("user")
        .findOne({_id: Obj_id});
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const storeBooking = await client
        .db("travelkart")
        .collection("user")
        .updateOne({_id: Obj_id}, {$set: {booking: data}});
    
        res.status(200).json({ message: 'stored successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
})

const port = process.env.PORT ?? 5000;

app.listen(port,()=>{
    console.log(port,"server connected successfully");
})