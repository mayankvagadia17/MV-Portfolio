// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function SwiperSection() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Swiper
          slidesPerView={"5"}
          modules={[Navigation]}
          className="flex items-center"
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Morbidelli - Smart Motorcycle Companion App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Exoress ECG App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Hospisoft Reporting App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  HotrHome - An Online Platform for Real Estate Buyers and
                  Agents
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  E-Learning Mobile and TV App solution
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Konnected Live App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Zomate Dating App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Invoice Maker
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Pocketo
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Video Maker App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Sehmoo
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Abha Social App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  LTR App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="/morbidelli.png"
                alt="Project preview"
                className="h-full w-full object-cover"
              />
              <div className="text-white absolute bottom-0 h-[100px] w-full bg-white/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                <h1 className=" text-pretty font-semibold break-words">
                  Photo Editor App
                </h1>
                <p className="mx-3 w-auto inline-flex items-center">
                  <span className="underline underline-offset-[5px]">View</span>
                  <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
