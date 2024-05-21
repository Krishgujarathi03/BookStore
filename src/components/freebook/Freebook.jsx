import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../cards/Cards";
import axios from "axios";

function Freebook() {
  const [freeBook, setFreeBook] = useState([]);
  useEffect(() => {
    const getFreeBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        const freeBooks = res.data.filter((item) => item.price === 0);
        // console.log(freeBooks);
        setFreeBook(freeBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getFreeBook();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto text-gray-300 md:px-7 px-4 dark:bg-white dark:text-black">
      <div>
        <h1 className="text-2xl text-yellow-600 pt-7 font-bold">
          Discover Our Free Book Collection
        </h1>
        <p className="text-lg pt-4">
          Dive into timeless classics and thrilling tales without spending a
          dime – explore our curated selection of free books today!
        </p>
      </div>

      <div className="mt-8 ">
        <Slider {...settings}>
          {freeBook.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
