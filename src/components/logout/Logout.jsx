import React, { useContext } from "react";
import toast from "react-hot-toast";
import MyContext from "../../context/data/MyContext";

function Logout() {
  const context = useContext(MyContext);
  const { authUser, setAuthUser } = context;
  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Internal server error");
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
