import "./App.css";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="bg-[#1f2020] flex flex-col w-full overflow-x-hidden">
        <header className="fixed top-0 left-0 z-50 right-0 bg-[#2d2d2d] flex justify-between flex-col sm:flex-col">
          <nav>
            <div class="flex gap-6 text-white font-sans font-bold py-5 px-4 sm:px-6 lg:px-8 items-center">
              <div className="flex items-center">
                <h1>Mayank Vagadiya</h1>
              </div>
              <div class="hidden md:flex flex-1 justify-end">
                <div class="ml-10 flex space-x-4">
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#1f2020] hover:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("about-us");
                    }}
                  >
                    About Me
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("projects");
                    }}
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("skill");
                    }}
                  >
                    Skills
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("contact");
                    }}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
              <div class="mr-2 flex flex-1 md:hidden justify-end">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  {isSidebarOpen ? (
                    <svg
                      class="block size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="block size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {isSidebarOpen ? (
              <div class="md:hidden fixed right-0 h-full w-64 bg-[#2d2d2d] py-5">
                <div className="flex flex-col gap-4 px-4 text-white">
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#1f2020] hover:text-white"
                    aria-current="page"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("home");
                      setIsSidebarOpen(false);
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("about-us");
                      setIsSidebarOpen(false);
                    }}
                  >
                    About Me
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("projects");
                      setIsSidebarOpen(false);
                    }}
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("skill");
                      setIsSidebarOpen(false);
                    }}
                  >
                    Skills
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f2020] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("contact");
                      setIsSidebarOpen(false);
                    }}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            ) : (
              <div />
            )}
          </nav>
        </header>
        <main className="flex flex-col">
          <div className="flex flex-col md:flex-row md:h-screen" id="home">
            <div className="flex md:h-screen items-center text-white font-sans font-bold text-3xl md:w-2/5">
              <img
                src="/my_pic.JPG"
                alt="Mayank Vagadiya"
                className="flex md:h-[70%] w-full text-blue-50 object-scale-down"
              />
            </div>
            <div className="flex flex-col justify-center text-start text-white font-sans font-bold text-xl gap-14 md:w-3/5 my-10 md:my-0 mx- 3 md:mx-5">
              <h1 className="flex w-full text-center justify-center md:text-start md:justify-start text-white text-3xl md:text-7xl">
                My Portfolio
              </h1>
              <p className="flex sm:text-center sm:justify-center md:text-start md:justify-start md:items-start md:text-2xl">
                I'm a software developer with a passion for building beautiful,
                high-performance websites and applications.
              </p>
              <div className="flex md:flex-row gap-8 justify-center md:justify-start">
                {/* <button className="bg-white text-black py-2 px-5 rounded-[5px] hover:bg-[#1f2020] hover:text-white hover:border-2 hover:border-white transition duration-500 ease-in-out hover:rounded-[5px]">
                  Download CV
                </button> */}
                <button
                  onClick={() => scrollToElement("contact")}
                  className="bg-[#2d2d2d] text-white py-2 px-5 rounded-[5px] hover:bg-[#1f2020] hover:text-white hover:border-2 hover:border-[#2d2d2d] transition duration-500 ease-in-out hover:rounded-[5px]"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div
            className="h-auto md:h-screen px-10 sm:pt-12 md:pt-24"
            id="about-us"
          >
            <div className="hidden md:flex h-[50%] justify-center items-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/backend-architecture.png"
                    alt="Backend System Architecture"
                    className="rounded-xl shadow-lg"
                    height={300}
                    width={300}
                  />
                  <p className="mt-6 font-mono text-gray-300">
                    🧠 Architecting intelligent, scalable systems
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/frontend-ui.png"
                    alt="Frontend UI Design"
                    className="rounded-xl shadow-lg"
                    height={300}
                    width={300}
                  />
                  <p className="mt-6 font-mono text-gray-300">
                    🎨 Crafting human-centric and intuitive UIs
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/cross-platform-code.png"
                    alt="Cross-platform Development"
                    className="rounded-xl shadow-lg"
                    height={300}
                    width={300}
                  />
                  <p className="mt-6 font-mono text-gray-300">
                    🚀 Delivering clean, efficient, cross-platform solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50%] flex flex-col md:grid md:grid-cols-3 gap-8">
              <h1 className="py-[30px] md:py-0 flex text-center justify-center items-center text-3xl font-bold text-white">
                <span>
                  <p className="underline underline-offset-[10px] decoration-1">
                    Abou
                  </p>
                </span>
                t Me
              </h1>
              <div className="flex flex-col justify-center">
                <div className="h-[50%] w-full flex flex-col gap-8">
                  <h1 className="text-white text-center text-2xl md:text-3xl font-bold">
                    My Vision
                  </h1>
                  <p className="text-white">
                    My vision is to craft intelligent, scalable, and
                    human-centric digital experiences across mobile and web
                    platforms. With a full-stack mindset and a passion for
                    frameworks like Flutter, React, and Node.js, I aim to bridge
                    design and functionality—transforming ideas into impactful,
                    real-world solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-[50%] flex flex-col gap-8">
                  <h1 className=" text-white text-center text-2xl md:text-3xl font-bold">
                    My Mission
                  </h1>
                  <p className="text-white">
                    Driven to deliver clean, efficient, and future-ready
                    solutions using cutting-edge tools across the Android and
                    web ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col h-screen sm:pt-12 md:pt-24"
            id="projects"
          >
            <h1 className="py-[30px] md:py-0 flex text-center justify-center items-center text-3xl font-bold text-white">
              <span>
                <p className="underline underline-offset-[15px] decoration-1">
                  Proje
                </p>
              </span>
              cts
            </h1>
            <div className="h-screen w-[80%] flex justify-center self-center items-center">
              <Swiper
                modules={[Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
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
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Morbidelli - Smart Motorcycle Companion App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/ecg.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Exoress ECG App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/hospisoft.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Hospisoft Reporting App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/hotrhome.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        HotrHome - An Online Platform for Real Estate Buyers and
                        Agents
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/learning.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        E-Learning Mobile and TV App solution
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/konnected.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Konnected Live App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/zodi.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Zomate Dating App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/qim.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Quick Invoice Maker
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/pocket.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Pocketo
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/vma.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Video Maker App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/sehmoo.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Sehmoo
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/abha.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Abha Social App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/ltr.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        LTR App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[500px] w-[300px] rounded-[15px] overflow-hidden shadow-xl shadow-black/30 group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src="/photo_editor.png"
                      alt="Project preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-white absolute bottom-0 h-[100px] w-full bg-[#1f2020]/30 backdrop-blur-sm px-4 py-2 flex flex-row items-center justify-between">
                      <h1 className=" text-pretty font-semibold break-words">
                        Photo Editor App
                      </h1>
                      <p className="mx-3 w-auto inline-flex items-center">
                        <span className="underline underline-offset-[5px]">
                          View
                        </span>
                        <span className="ml-1">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col h-auto sm:pt-12 md:pt-24" id="skill">
            <h1 className="py-[30px] md:py-0 flex text-center justify-center items-center text-3xl font-bold text-white underline underline-offset-[15px] decoration-1">
              Skills
            </h1>
            <div className="h-screen w-screen mt-12 sm:px-10 sm:flex sm:flex-col sm:gap-8 md:grid md:grid-cols-2 sm:pb-10">
              <div className="sm:px-10 sm:flex sm:flex-col sm:gap-8 md:grid md:grid-row-3 text-white md:px-12">
                <div>
                  <h3 className="font-bold sm:text-lg md:text-2xl underline underline-offset-[10px] py-5">
                    Language
                  </h3>
                  <div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Java</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Kotlin</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Dart</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">JavaScript</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Html/CSS</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold sm:text-lg md:text-2xl underline underline-offset-[10px] py-5">
                    Databases
                  </h3>
                  <div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">SQLite</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Firebase Realtime Database</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Cloud Firestore</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Room</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">MongoDB</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold sm:text-lg md:text-2xl underline underline-offset-[10px] py-5">
                    Other
                  </h3>
                  <div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">REST API</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Jetpack components</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:px-10 sm:flex sm:flex-col sm:gap-8 md:grid md:grid-row-3 text-white md:px-12">
                <div>
                  <h3 className="font-bold sm:text-lg md:text-2xl underline underline-offset-[10px] py-5">
                    Libraries/Frameworks
                  </h3>
                  <div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Android SDK</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Flutter</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Kotlin Multiplatform</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Node.JS</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">React.JS</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold sm:text-lg md:text-2xl underline underline-offset-[10px] py-5">
                    DevOps
                  </h3>
                  <div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Git</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">GitHub</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg">Atlasian jira</p>
                      <div className=" bg-gray-200 rounded-full h-[10px] w-[60%]">
                        <div class="bg-[#2d2d2d] h-[10px] w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 h-screen sm:pt-12 md:pt-24 md:mb-20 overflow-hidden"
            id="contact"
          >
            <div className="h-screen flex justify-center">
              <img
                src="/contact.png"
                className="h-[100%] w-[60%] object-cover"
              />
            </div>
            <div className="px-20 flex flex-col justify-center gap-8">
              <h1 className="py-[30px] md:py-0 flex text-4xl font-bold text-white underline underline-offset-[15px] decoration-1">
                My Contact
              </h1>
              <p className="text-white my-12">
                I'm always open to exciting projects, collaborative
                opportunities, or just a good conversation about technology and
                innovation. If you're looking for someone who’s detail-oriented,
                solution-focused, and committed to writing clean, maintainable
                code—feel free to reach out. Let’s connect and build something
                amazing together!
              </p>
              <div className="flex flex-row gap-6 text-white items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
                <p className="h-6 flex items-center text-lg">+91 70160 69040</p>
              </div>
              <div className="flex flex-row gap-6 text-white items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>

                <p className="h-6 flex items-center text-lg">
                  mayankvagadia17@gmail.com
                </p>
              </div>
              <div className="flex flex-row gap-6 text-white items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="h-6 flex items-center text-lg">Rajkot,Gujarat</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
