require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

async function main(to, subject, html) {
  const info = await transporter.sendMail({
    from: '"nischal mainali" <nischal.211633@ncit.edu.np>',
    to, // list of receivers
    subject, // Subject line
    html, // html body
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main({to:"nischalmainali75@gmail.com",subject: "real world scenario", html:"<p>hello</p>"}).catch(
  console.error
);
// write a nodejs module to encriot and verify the password using bcryptjs
// encriptPassword(string )
// verifyPassword(hashPw)

// write a nodejs module to create and verify jwtTokwn using jsonwebtoken 
// create token ():string
// verifytokken():boolean


