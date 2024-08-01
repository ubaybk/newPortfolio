"use client";
import React, { useEffect } from "react";
import Layout from "./components/Layout";

const Home = () => {
  useEffect(() => {
    // Handle navbar fix on scroll
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll once to set initial state
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    // Cleanup the event listener on component unmount
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <Layout>
      {/* Header Start */}
      <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                bayukurniawan
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                  {/* Add more menu items here */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-lg lg:text-2xl">
                Hallo Semua 🙌, saya{" "}
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Bayu Kurniawan
                </span>{" "}
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Software Enginering -{" "}
                <span className="text-dark">Frontend</span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Letssgoo <span className="text-dark font-bold">...</span>
              </p>

              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src="/img/bayu.png"
                  alt="bayu"
                  className="max-w-full mx-auto"
                />
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#9EF0F0"
                      d="M36.1,-58.2C50.3,-54.3,68,-51.8,76.7,-42.4C85.4,-32.9,85.1,-16.5,84,-0.7C82.8,15.1,80.7,30.3,74.6,44.2C68.5,58.1,58.3,70.8,45.2,74.3C32.1,77.7,16.1,71.9,2.9,66.8C-10.2,61.7,-20.4,57.3,-30.1,51.9C-39.8,46.5,-49.1,40.1,-58,31.3C-66.9,22.5,-75.4,11.2,-74.2,0.7C-73.1,-9.9,-62.3,-19.8,-53.8,-29.3C-45.3,-38.8,-39.1,-47.8,-30.5,-55.1C-21.9,-62.3,-10.9,-67.8,0,-67.7C10.9,-67.7,21.8,-62.2,36.1,-58.2Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Yu, Kita letsgoo
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nihil adipisci illum voluptates sit quo corrupti?
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Mari berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg: text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                eum deserunt enim ab quasi recusandae harum.
              </p>
              <div className="flex items-center">
                {/* youtube */}
                <a
                  href="https://www.youtube.com/@BayuKurniawan"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/ubaybk"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.5 2a5.5 5.5 0 0 0-5.5 5.5v9a5.5 5.5 0 0 0 5.5 5.5h9a5.5 5.5 0 0 0 5.5-5.5v-9a5.5 5.5 0 0 0-5.5-5.5h-9zm0 2h9a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5h-9a3.5 3.5 0 0 1-3.5-3.5v-9a3.5 3.5 0 0 1 3.5-3.5zm9.094 2a1.13 1.13 0 1 0 0 2.261 1.13 1.13 0 0 0 0-2.261zm-4.594 1.13a2.871 2.871 0 1 0 5.742 0 2.871 2.871 0 0 0-5.742 0z" />
                  </svg>
                </a>

                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/bayukurniawan/"
                  target="_blank"
                  className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M4.98 3.5c0-1.71 1.35-3.09 3.02-3.09 1.66 0 3.01 1.38 3.01 3.09 0 1.71-1.35 3.09-3.01 3.09-1.67 0-3.02-1.38-3.02-3.09zm4.85 17.5H3.15V8.13h2.69v12.87zm8.02-6.63v.2c0 3.38-1.82 5.51-4.49 5.51-2.02 0-3.46-1.36-4.03-2.66h-.05v2.22H6.65V8.13h2.69v1.46c.37-.57 1.03-1.37 2.3-1.37 1.68 0 2.96 1.09 2.96 3.44zM4.98 3.5c0-1.71 1.35-3.09 3.02-3.09 1.66 0 3.01 1.38 3.01 3.09 0 1.71-1.35 3.09-3.01 3.09-1.67 0-3.02-1.38-3.02-3.09zm4.85 17.5H3.15V8.13h2.69v12.87zm8.02-6.63v.2c0 3.38-1.82 5.51-4.49 5.51-2.02 0-3.46-1.36-4.03-2.66h-.05v2.22H6.65V8.13h2.69v1.46c.37-.57 1.03-1.37 2.3-1.37 1.68 0 2.96 1.09 2.96 3.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-secondary text-[18px] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam tempora. Fugiat laudantium provident eaque
                debitis, iure reprehenderit dicta reiciendis.
              </p>
            </div>
          </div>

          <div className="w-full px4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/portfolio/1.png"
                  alt="cheeryFresh"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cheery Fresh
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quia laborum ducimus.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/portfolio/1.png"
                  alt="cheeryFresh"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cheery Fresh
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quia laborum ducimus.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/portfolio/1.png"
                  alt="cheeryFresh"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cheery Fresh
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quia laborum ducimus.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/portfolio/1.png"
                  alt="cheeryFresh"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cheery Fresh
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quia laborum ducimus.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Client Section Start */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Yang Pernah Bekerja Sama
              </h2>
              <p className="font-medium text-secondary text-[18px] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam tempora. Fugiat laudantium provident eaque
                debitis, iure reprehenderit dicta reiciendis.
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className=" max-w-[120px] mx-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="/clients/Google__G__logo.svg.webp" alt="google" />
              </a>
              <a
                href="#"
                className=" max-w-[120px] mx-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="/clients/Google__G__logo.svg.webp" alt="google" />
              </a>
              <a
                href="#"
                className=" max-w-[120px] mx-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="/clients/Google__G__logo.svg.webp" alt="google" />
              </a>
              <a
                href="#"
                className=" max-w-[120px] mx-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="/clients/Google__G__logo.svg.webp" alt="google" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Client Section Start */}

      {/* Blog Section Start */}
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="conrainer">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-secondary text-[18px] md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                nam at voluptatem ea?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="/blog/1.jpeg" alt="keyboard" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati, consequatur?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="/blog/1.jpeg" alt="keyboard" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati, consequatur?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="/blog/1.jpeg" alt="keyboard" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati, consequatur?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section Start */}

      {/* Contact Section Start */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
              <p className="font-medium text-secondary text-[18px] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                consequuntur.
              </p>
            </div>
          </div>

          <form action="">
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base text-primary font-bold"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base text-primary font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base text-primary font-bold"
                >
                  Pesan
                </label>
                <textarea
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Section End */}

      {/* footer start */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Bayu</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>Jl. Srengseng Sawah</p>
              <p>DKI Jakarta</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className=" font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="" className="inline-block text-base hover:text-primary mb-3">Programing</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary mb-3">Teknologi</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className=" font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary mb-3">Beranda</a>
                </li>
                <li>
                  <a href="#about" className="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
                </li>
                <li>
                  <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">Portfolio</a>
                </li>
                <li>
                  <a href="#clients" className="inline-block text-base hover:text-primary mb-3">Clients</a>
                </li>
                <li>
                  <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Blog</a>
                </li>
                <li>
                  <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-800">
          <div className="flex items-center justify-center mb-5">
                {/* youtube */}
                <a
                  href="https://www.youtube.com/@BayuKurniawan"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/ubaybk"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.5 2a5.5 5.5 0 0 0-5.5 5.5v9a5.5 5.5 0 0 0 5.5 5.5h9a5.5 5.5 0 0 0 5.5-5.5v-9a5.5 5.5 0 0 0-5.5-5.5h-9zm0 2h9a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5h-9a3.5 3.5 0 0 1-3.5-3.5v-9a3.5 3.5 0 0 1 3.5-3.5zm9.094 2a1.13 1.13 0 1 0 0 2.261 1.13 1.13 0 0 0 0-2.261zm-4.594 1.13a2.871 2.871 0 1 0 5.742 0 2.871 2.871 0 0 0-5.742 0z" />
                  </svg>
                </a>

                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/bayukurniawan/"
                  target="_blank"
                  className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M4.98 3.5c0-1.71 1.35-3.09 3.02-3.09 1.66 0 3.01 1.38 3.01 3.09 0 1.71-1.35 3.09-3.01 3.09-1.67 0-3.02-1.38-3.02-3.09zm4.85 17.5H3.15V8.13h2.69v12.87zm8.02-6.63v.2c0 3.38-1.82 5.51-4.49 5.51-2.02 0-3.46-1.36-4.03-2.66h-.05v2.22H6.65V8.13h2.69v1.46c.37-.57 1.03-1.37 2.3-1.37 1.68 0 2.96 1.09 2.96 3.44zM4.98 3.5c0-1.71 1.35-3.09 3.02-3.09 1.66 0 3.01 1.38 3.01 3.09 0 1.71-1.35 3.09-3.01 3.09-1.67 0-3.02-1.38-3.02-3.09zm4.85 17.5H3.15V8.13h2.69v12.87zm8.02-6.63v.2c0 3.38-1.82 5.51-4.49 5.51-2.02 0-3.46-1.36-4.03-2.66h-.05v2.22H6.65V8.13h2.69v1.46c.37-.57 1.03-1.37 2.3-1.37 1.68 0 2.96 1.09 2.96 3.44z" />
                  </svg>
                </a>
              </div>
              <p className="font-medium text-sm text-slate-500 text-center">Dibuat dengan ❤️ oleh Bayu Kurniawan, menggunakan Tailwind CSS </p>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </Layout>
  );
};

export default Home;
