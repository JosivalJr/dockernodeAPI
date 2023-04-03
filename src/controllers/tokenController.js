const jwt = require('jsonwebtoken');
const fs = require("fs");
const path = require("path");

module.exports = {

  async createToken(req, res) {
    const fs = require('fs');
    const authTokenPath = path.resolve('src', 'auth.json');
    const authTokenRegisters = JSON.parse(fs.readFileSync(authTokenPath, 'utf8'));

    const timestamp = new Date().getTime();
    authTokenRegisters.push(timestamp);

    try {
      fs.writeFileSync(authTokenPath, JSON.stringify(authTokenRegisters, null, 2), 'utf8');

      const secret = process.env.SECRET;
      const newToken = jwt.sign({ 
          date: timestamp
      }, secret);
  
      return res.status(201).json({
          accessToken: newToken
      });
    }
    catch(error) {
      return res.status(503).json({
        message: '503 - Error to create new JWT token.',
        error: error
      });
    }
  }
};