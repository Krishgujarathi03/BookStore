import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import MyContext from "../../context/data/MyContext";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const context = useContext(MyContext);
  const { setAuthUser } = context;
  const onSubmit = async (data) => {
    navigate("/");
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      });
  };
  return (
    <section className="dark:bg-gray-50 bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full modal-box dark:bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight dark:text-gray-900 md:text-2xl text-white">
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action=""
              method="post"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  className="dark:bg-gray-50 dark:border dark:border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg dark:focus:ring-primary-600 dark:focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Name"
                  required=""
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  className="dark:bg-gray-50 dark:border dark:border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg dark:focus:ring-primary-600 dark:focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                  required=""
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="dark:bg-gray-50 dark:border dark:border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg dark:focus:ring-primary-600 dark:focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border dark:border-gray-300 rounded dark:bg-gray-50 focus:ring-3 dark:focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light dark:text-gray-500 text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium dark:text-primary-600 hover:underline text-primary-400"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white duration-200 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:outline-none dark:focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light dark:text-gray-500 text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium dark:text-primary-600 hover:underline text-primary-400"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
