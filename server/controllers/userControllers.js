const User  = require('../models/UserModel.js');
const {signToken}=require("../utils/auth.js")

module.exports = {
  async getUsers(req, res) {
    try {
      console.log(User)
      const users  = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    const userId=req.params.userId

    try{
      let user = await User.findById(userId);
       res.json(user)


    }catch(err){
      return res.status(500).json(err)
    }


  },
  async createUser(req, res) {
    console.log("try to sign up")
    try {
      
      const user = await User.create(req.body);
      const token=signToken({email:user.email,id:user._id.toString()})
      res.json({token});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async signInUser(req, res) {
    try {
      const {email,password}=req.body
      const user = await User.findOne({ email });
      if(!user){
        return res.send("Wrong email or password")
      }
      if(user.password !=password){
        return res.send("Wrong email or password")
      }
   
      const token=signToken({email:user.email,id:user._id.toString()})
      res.json({token});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  ,
  async updateUser(req, res) {
    const userId=req.params.userId

    try{
      
      const update = req.body;
     
      let doc = await User.findByIdAndUpdate(userId, update);
       res.json(doc)


    }catch(err){
      return res.status(500).json(err)
    }

  },
  async deleteUser(req, res) {

    const userId=req.params.userId

    try{
      let user = await User.findByIdAndDelete(userId);
       res.json(user)


    }catch(err){
      return res.status(500).json(err)
    }


  }
}