const jwt = require("jsonwebtoken");

const createToken = ( user ) => {
    const accessToken = jwt.sign({email: user.email, id: user.id}, "Chaka1234!@#$");
    return accessToken;
};

const validateToken = ( req, res, next ) => {
    const accessToken = req.cookies["token"];

    if( accessToken ){
        try{
            const validToken = jwt.verify(accessToken, "Chaka1234!@#$");
            req.user = validToken;

            if(validToken){
                console.log("User Authenticated");
                req.authenticated = true;
                return next();
            }
        }catch(error){
            return res.json({error: error.message})
        }
    }
};

const removeToken = (req, res) => {
    res.clearCookie("token");
    res.json("Log out");
};

module.exports =  { createToken, validateToken, removeToken};