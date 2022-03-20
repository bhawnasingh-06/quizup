const express=require('express')
const router=express.Router();
const Admin=require('../models/Admin')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchAdmin = require('../middleware/fetchAdmin');
const JWT_SECRET='thisisquizupapp';

//ROUTE 1: create a admin using POST: /api/auth/createAdmin  Don't require No login required
router.post('/createAdmin',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be of atleast 5 characters ').isLength({ min: 5 })
],async (req,res)=>{
  let success=false;
    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
      }
      //check whether the admin with this email exists already
      try{
        let admin=await Admin.findOne({email: req.body.email});
        if(admin)
        {
            return res.status(400).json({success,error: "Sorry, a user with this email already exists"})
        }
        const salt=await bcrypt.genSalt(10);
        secPass=await bcrypt.hash(req.body.password,salt);
        //create a new admin
       admin=await Admin.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });
      //   .then(user => res.json(user))
      //   .catch(err=>{console.log(err)
      // res.json({error:'Please enter a unique value for email',message: err.message})})
      const data={
        admin:{id:admin.id}
      }
      const authtoken=jwt.sign(data,JWT_SECRET)
      success=true;
      return res.json({success,authtoken});
      //console.log(json);
      }
      catch(error){
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
    
})



//ROUTE 2:Authenticate admin using POST "/api/auth/login":  login required
router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists(),
  
],async (req,res)=>{
  let success=false;
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {email,password}=req.body;
      try{
        let admin =await Admin.findOne({email});
        if(!admin){
          return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }

        const passwordCompare=await bcrypt.compare(password,admin.password);
        if(!passwordCompare){
          return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const data={
          admin:{id: admin.id}
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken});
      }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
});

//ROUTE 3: Get logged in user details using : post "/api/auth/getuser": login required
router.post('/getAdmin',fetchAdmin,async (req,res)=>{
try{
  adminId=req.admin.id;
  const admin=await Admin.findById(adminId).select("-password");
  res.send(admin);
}catch(error)
{
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})

module.exports=router