import mongoose, { model } from "mongoose";
const { Schema } = mongoose;
const BookSchema = new Schema({
  title: { type: String },
  category: { type: String },
  price: { type: Number },
  img: { type: String },
});

const Book = model("book", BookSchema);
export default Book;
