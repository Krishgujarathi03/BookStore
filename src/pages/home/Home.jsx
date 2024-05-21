import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Freebook from "../../components/freebook/Freebook";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Freebook />
    </Layout>
  );
}

export default Home;
