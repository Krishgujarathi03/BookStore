import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Cards from "../../components/cards/Cards";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <Layout>
      <div className="mx-auto text-gray-300 md:px-7 px-4 dark:bg-white dark:text-black">
        <div>
          <h1 className="text-2xl text-purple-200 pt-7 font-bold">
            Welcome to Your Ultimate Book
            <span className="text-yellow-700"> Haven!</span>
          </h1>
          <p className="text-lg mt-4">
            Step into a world of endless possibilities and unparalleled
            adventures with our extensive collection of paid books, where every
            purchase opens the door to new stories, unforgettable characters,
            and timeless wisdom – start your literary journey with us today!
          </p>
        </div>

        <div className="mt-8 grid grid-col-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Course;
