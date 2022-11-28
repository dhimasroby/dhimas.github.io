import {  createBrowserRouter } from "react-router-dom";

import LCV from "../img/lcv.png";
import rays from "../img/rays.png";
import renaette from "../img/renat.png";
import ff from "../img/fleting.png";
import at from "../img/aliti.png";
import masgan from "../img/masgan.png";

import Home from "../container/Home";
import Detail from '../container/Detail';


const NavRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "lcvjuice",
      element: <Detail img={LCV} title="LCV Juice" 
      subtitle="LCV Juice adalah Brand Liquid Vape asal Purbalingga, Jawa Tengah."/>,
    },
    {
      path: "raysofficial",
      element: <Detail img={rays} title="Rays Official" 
      subtitle="Rays Official merupakan sebuah Brand Layanan dan Produk kecantikan asal Yogyakarta."
      desc="Pada project ini, saya membangun sebuah website yang berfungsi sebagai company profile. Saya menggunakan Web Hosting Unlimited dan menggunakan CMS dari WordPress dengan plugin Elementor.
  
      Fitur dari Website ini adalah Integrasi dengan Google Maps dan Fitur dasar untuk kebutuhan informasi perusahaan, seperti informasi Sosial Media dan Platform Penjualan."                  
    />,
    },
    {
      path: "/renaette",
      element: <Detail img={renaette} title="Renaette" 
      subtitle="Renaette adalah Brand Fashion Wanita asal Yogyakarta." 
      desc="Pada project ini, saya membangun sebuah website yang berfungsi sebagai company profile dan sekaligus semi e-commerce yang mengarah langsung menuju platform penjualan. Saya menggunakan Web Hosting Unlimited dan menggunakan CMS dari WordPress dengan plugin Elementor & WooCommerce.
  
      Fitur dari Website ini yang utama adalah Integrasi WooCommerce dengan Facebook & Instagram Shopping. Selain itu adalah kustomisasi tampilan dari WooCommerce agar bisa mengarahkan produk langsung ke platform yang digunakan untuk bertransaksi, dalam hal ini adalah Shopee dan Tiktok Shop. Integrasi Google Maps dan Google Listing juga saya terapkan pada website ini."/>,
    },
    {
      path: "/fleetingflee",
      element: <Detail img={ff} title="Fleeting Flee" 
      subtitle="Fleeting Flee adalah sebuah Studio Kreatif yang menyediakan berbagai jasa dokumentasi foto dan penyewaan studio untuk berbagai jenis foto kreatif dan berkonsep." 
      desc="Pada project ini, saya membangun sebuah website yang berfungsi sebagai company profile. Saya menggunakan Web Hosting Unlimited dan menggunakan CMS dari WordPress dengan plugin Elementor.
  
      Fitur dari Website ini adalah Integrasi dengan Google Maps dan Fitur dasar untuk kebutuhan informasi perusahaan, seperti informasi Sosial Media."
      />,
    },
    {
      path: "/akutunggu",
      element: <Detail img={at} title="akutunggu.com" 
      subtitle="akutunggu.com adalah sebuah website undangan digital yang menyediakan jasa pembuatan undangan digital."
      desc="Pada project ini, saya membangun sebuah website yang berfungsi sebagai Undangan Digital untuk Pernikahan & Tunangan. Saya menggunakan Web Hosting Unlimited dan menggunakan CMS dari WordPress dengan plugin Elementor.
  
      Fitur dari Website ini adalah Integrasi dengan Google Maps, Google Calendar, WP Forms untuk RSVP, Countdown, Digital Payment, Youtube Video Integration dan Gallery Foto." />,
    },
    {
      path: "/masganart",
      element: <Detail img={masgan} title="masgan.art" 
      subtitle="Masgan.art adalah sebuah studio yang menyediakan jasa berupa dokumentasi foto dan video."
      desc="Pada project ini, saya membangun sebuah website yang berfungsi sebagai company profile. Saya menggunakan Web Hosting Unlimited dan menggunakan CMS dari WordPress dengan plugin Elementor.
  
      Fitur dari Website ini adalah Integrasi dengan Google Maps dan Fitur dasar untuk kebutuhan informasi perusahaan, seperti informasi Sosial Media." />,
    }
    
    
  ]);

  export default NavRouter;