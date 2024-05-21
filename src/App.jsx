import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./context/data/MyState";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Books from "./pages/books/Books";

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  );
};

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("Users");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
