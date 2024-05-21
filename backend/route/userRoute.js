import express from "express";
import User from "../models/User.js";
const router = express.Router();
import bcrypt from "bcryptjs";

// Route 1
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //* Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    //* Email Validation
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Please enter a valid email" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    const createUser = new User({ name, email, password: hashedPassword });
    await createUser.save();
    res.status(201).json({
      success: "User created successfully",
      user: {
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route 2
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //* Validation
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    //* Email Validation
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Please enter a valid email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      res.status(201).json({
        success: "Login successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(404).json({ error: "Email And Password Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});
export default router;
