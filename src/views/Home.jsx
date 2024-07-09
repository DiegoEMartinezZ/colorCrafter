import React from "react";
import Palette from "../components/Palette";
import Footer from "../sections/Footer";
import Subtitle from "../ui/txt/Subtitle";
import ShortText from "../ui/txt/ShortText";

const Home = () => {
  return (
    <>
      <section className="bg-black text-white absolute bottom-0 top-0 right-0 left-0">
        <div className="my-12 py-8 text-center">
          <Subtitle name={"Choose your color"} />
          <ShortText
            text={
              "Press the spacebar to get a random color or pick your own color."
            }
          />
          <div className="my-4">
            <Palette />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
