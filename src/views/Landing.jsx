import React from "react";
import Footer from "../sections/Footer";
import Title from "../ui/txt/Title";
import DemoButton from "../ui/buttons/DemoButton";

const Landing = () => {
  return (
    <>
      <section className="bg-black absolute bottom-0 top-0 right-0 left-0">
        <div className="text-white text-center flex flex-col items-center justify-center h-screen">
          <Title name={"ColorCrafter"} />
          <DemoButton text={"Create your color palette!"} view={"/home"} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Landing;
