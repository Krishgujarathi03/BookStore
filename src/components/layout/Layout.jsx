import React from "react";
import Footer from "../footer/Footer";
import Nav from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
