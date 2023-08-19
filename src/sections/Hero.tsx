import { Link as Scroll } from "react-scroll";

import data from "../data";

const Hero = () => {
  return (
    <div
      className={`min-h-screen flex items-center bg-fixed bg-no-repeat bg-cover bg-black`}
      style={{ backgroundImage: `url(${data.hero.img})` }}
      id="hero"
    >
      <div className="flex flex-col items-center text-white pl-0 md:pl-20">
        <img
          className="h-[300px] md:h-[500px]"
          src={data.ui.header[2].img}
          alt={data.contact.company}
        />
        <p className="font-normal md:font-medium text-base md:text-[22px] w-80 md:w-[500px]">
          {data.hero.title}
        </p>
        <Scroll
          activeClass="border-b-2 border-b-[#D4DEFF] text-yellow-500"
          className="cursor-pointer"
          offset={-136}
          smooth
          spy
          to="contact"
        >
          <button className="inline-block rounded-md py-3 px-11 text-center text-base font-medium transition duration-300 ease-in-out hover:bg-yellow-600 text-black mt-14 bg-yellow-500 uppercase">
            {data.hero.btn}
          </button>
        </Scroll>
      </div>
    </div>
  );
};

export default Hero;
