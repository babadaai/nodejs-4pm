const http = require("http");
const QRCode = require("qrcode");

http
  .createServer(async (req, res) => {
    const qr = await QRCode.toDataURL(`https://www.facebook.com/zenith.ghimire.1`);
    console.log(qr);
    const imgSrc = `<img src ="${qr}"/>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(imgSrc);
  })
  .listen(8080);
