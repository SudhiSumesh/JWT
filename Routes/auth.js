const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
const router = express.Router();

//user Registration
router.post("/register", async (req, res) => {
  try {
    //destructure the registration data from req.body
    const { username, password } = req.body;
    //encripting password # 10->hashing factor
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username,
      password: hashedPassword,
    });
    await user.save();
    //sending  response back
    res.status(201).json({
      message: "registration completed",
    });
  } catch (error) {
    console.log(error);
    //sending error response
    res.status(500).json({
      error: "registration faild",
    });
  }
});
//user login route /authentification
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentification faild" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        error: "Authentification faild",
      });
    }
    const token = jwt.sign({ userId: user._id }, "secret key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      message: "faild",
    });
    console.log(error);
  }
});
router.post("/forgotpassword", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!user) {
      return res.status(401).json({ error: "user not exist" });
    }
    const updatePassword = await User.findByIdAndUpdate(user._id, {
      password: hashedPassword,
    });
    if (updatePassword) {
      res.status(200).json({
        message: `password updated `,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "faild",
    });
    console.log(err);
  }
});
module.exports = router;
