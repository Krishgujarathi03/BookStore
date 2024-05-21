import express from "express";
import Book from "../models/Book.js";
const router = express.Router();

// Route 1
router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});
export default router;
