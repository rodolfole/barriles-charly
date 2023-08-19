import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Title from "../components/ui/Title";
import data from "../data";

import "swiper/css";
import "swiper/css/navigation";

const Clients = () => {
  return (
    <div
      className="bg-[#2b1c15] flex flex-col items-center px-10 py-24"
      id="clients"
    >
      <Title title={data.clients.title} />
      <p className="text-white font-normal text-base md:text-xl">
        {data.clients.description}
      </p>
      <div className="w-[300px] md:w-[600px] lg:w-[1000px]">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
        >
          {data.clients.items.map((item) => (
            <SwiperSlide>
              <img className="w-40" src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
