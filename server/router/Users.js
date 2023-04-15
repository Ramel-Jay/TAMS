const express = require('express');
const app  = express();
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const { createToken, validateToken, removeToken } = require("../middleware/JWT");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Post Register Request
router.post("/register", async ( req, res ) => {
    const { fullName, email, password } = req.body;

    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            fullName: fullName,
            email: email,
            password: hash
        }).then(() => {
            res.json("Registration Complete");
        }).catch(( err ) => {
            res.json(err.message);
        });
    })
});

//Post User Login Request
router.post("/login", async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = await Users.findOne({where: { email: email }});

        if(!user) return res.json({error: "No such user found"});

        bcrypt.compare(password, user.password).then((match) => {
            if(!match) return re.json("Incorrect Password");

            const accessToken = createToken(user);

            res.cookie("token", accessToken, {
                maxAge: 60 * 60 * 12 * 1000,
                httpOnly: true
            })

            res.json("Login Success");
        })
    }catch(error){
        console.log({error: error.message});
    }
});

module.exports = router;