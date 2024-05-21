import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function HeroSection() {
  const context = useContext(MyContext);
  return (
    <section style={{ background: "#30336b" }}>
      {/* Hero Section  */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
        {/* Main Content  */}
        <main>
          <div className="text-center flex flex-col md:flex-row align-middle justify-center space-x-0 md:space-x-10">
            <div className="mb-2 ">
              {/* Image  */}
              <div className="flex justify-center mb-3">
                <img
                  src={require("../../img/hero.png")}
                  alt=""
                  className="rounded-xl w-full"
                />
              </div>
            </div>
            <div className="mt-10">
              {/* Text  */}
              <h1 className=" text-3xl text-white font-bold">
                Where every book is a{" "}
                <span className="text-yellow-600">new adventure</span>
              </h1>
              {/* Paragraph  */}
              <p className="sm:text-2xl text-xl font-extralight sm:mx-auto mt-6">
                Welcome to our bookstore, where every page turns into a journey
                and every visit sparks a new discovery
              </p>
              <label className="input input-bordered flex items-center gap-2 mx-auto mt-6 dark:bg-white dark:text-black dark:placeholder:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow outline-none "
                  placeholder="Email"
                />
              </label>
              <button className="btn btn-warning mt-6">Secondary</button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
