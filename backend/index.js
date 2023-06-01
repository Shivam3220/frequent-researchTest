const connectToMongo = require("./db");
connectToMongo();

const User = require("./modals/UserSchema");
var cors = require('cors')
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();
app.use(cors())
const port = 3000;

app.use(express.json());

app.post(
  "/user",
//   validating the details
  [
    body("fName").isAlpha(),
    body("lName").isAlpha(),
    body("eMail").isEmail(),
    body("password").isLength({ min: 6 }),
    body("country").isAlphanumeric(),
    body("state").isAlphanumeric(),
    body("city").isAlphanumeric(),
    body("gender").isAlpha(),
    body("age").isNumeric({min:14})
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {   
            // creating hash of the password
            const hashpass = bcrypt.hashSync(req.body.password, saltRounds);
            // creating the new user 
            const newRecord= await User.create({
                fName:req.body.fName,
                lName:req.body.lName,
                eMail:req.body.eMail,
            password:hashpass,
            country:req.body.country,
            city:req.body.city,
            state:req.body.state,
            gender:req.body.gender,
            dateOfBirth:req.body.dateOfBirth,
            age:req.body.age
        })
        return res.status(200).send({stat:true});
    } 
    catch (error) {
        res.status(406).send({stat:false})
    }
}
res.status(500).send({stat:false});
  }
);


app.get("/",async(req, res)=>{
    const user= await User.find({}).sort({_id: -1}).limit(1)
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

