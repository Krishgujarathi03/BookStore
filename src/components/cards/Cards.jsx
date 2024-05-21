import React from "react";

function Cards({ item }) {
  // console.log(item);
  const { title, category, price, img } = item;
  return (
    <div className="p-2 ">
      <div className="card w-84 bg-base-100 sm:w-full hover:scale-105 duration-300 dark:bg-white dark:text-black dark:border shadow">
        <figure>
          <img src={img} alt="title" className="cursor-pointer" />
        </figure>
        <div className="card-body">
          <h6 className="card-title text-sm">
            {title}
            <div className="badge badge-secondary">Free</div>
          </h6>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline w-16 hover:bg-purple-200 hover:cursor-pointer hover:text-black duration-200">
              ₹ {price}
            </div>
            <div className="badge badge-outline">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
