require("dotenv").config();
const jwt = require(`jsonwebtoken`);

const createToken =(payload)=>jwt.sign(payload,process.env.jwt_key);
const verifyToken=(token)=>{}
console.log(createToken({name:'nischal',role:'user'}))
