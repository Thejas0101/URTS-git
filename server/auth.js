const jwt = require("jsonwebtoken");

function generateAccessToken(username) {
  return jwt.sign({ username }, "Thejas", { expiresIn: "1600s", });
}

 function validateToken(req, res, next) {
  console.log("validating token")
  console.log(req.headers)
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (token == null) {
      console.log("token not found")
      return res.sendStatus(401);
    }
  
    jwt.verify(token, "Thejas", (err, decoded) => {
      if (err) {
        console.log(`err ${err}`)
        return res.sendStatus(403);
      }
      req.tokenData = decoded;
      next();
    });
  }
  module.exports = {validateToken,generateAccessToken}