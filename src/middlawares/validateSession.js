const jwt = require('jsonwebtoken');
const fs = require("fs");
const path = require("path");

module.exports = {
    validToken(req, res, next) {
       
        const tokensRegistersPath = path.resolve('src', 'auth.json');
        const authTokenRegisters = JSON.parse(fs.readFileSync(tokensRegistersPath, 'utf8'));

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];


        try{
            if(!token){
                return res.status(401).json({
                    message: '401 - Unauthorized',
                    error: 'Invalid Bearer token.'
                })
            }
            const tokenDatas = jwt.verify(token, process.env.SECRET);

            if(!authTokenRegisters.includes(tokenDatas.date)) {
                throw ('Unauthorized Token.');
            }
        }
        catch(err){
            return res.status(401).json({
                message: '401 - Unauthorized',
                error: err
            })
        }
        
        next();
    }
}