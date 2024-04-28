require("dotenv").config();
const bcryptjs = require('bcryptjs');

const encriptPass =(password)=>{
    const epw =bcryptjs.hashSync(password,Number(process.env.SALT_ROUND));
    return epw;

}  
    const verifyPassword =(hashPw,password )=>
    bcryptjs.compareSync(password,hashPw);

module.exports={encriptPass,verifyPassword};
