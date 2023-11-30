'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MainMenu = () => {

  const NavClick = () => {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  };

  const current = usePathname();

  return (
    <div className="sticky top-0 bg-transparent">
      <nav className="relative px-6 py-6">
        <a className="text-3xl font-bold leading-none" href="#">
          <span>Design</span>
          <span className="text-orange-400">Agency</span>
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => {
              NavClick();
            }}
            className="navbar-burger flex items-center text-green-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-50 lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end">
          <li className="ms-20">
            <Link
              className={
                current === "/"
                  ? "text-sm text-green-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500 "
              }
              href={"/"}
            >
              Home
            </Link>
           
          </li>
          <li>
            <Link
              className={
                current === "/team"
                  ? "text-sm text-green-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500 "
              }
              href={"/team"}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className={
                current === "/services"
                  ? "text-sm text-green-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500 "
              }
              href={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={
                current === "/projects"
                  ? "text-sm text-green-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500 "
              }
              href={"/projects"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={
                current === "/testimonials"
                  ? "text-sm text-green-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500 "
              }
              href={"/testimonials"}
            >
              Testimonials
            </Link>
          </li>
          <li className="mb-1">
            <Link
              className="py-2 px-4 text-sm font-semibold border border-1 border-green-500 hover:bg-green-50 hover:text-green-600 rounded"
              href={"/login"}
            >
              Login
            </Link>
          </li>
          <li className="mb-1">
            <Link
              className="py-2 px-4 text-sm font-semibold bg-green-500 text-white hover:bg-green-400 hover:text-green-600 rounded"
              href={"/testimonials"}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div
          onClick={() => {
            NavClick();
          }}
          className="navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25"
        />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button
              onClick={() => {
                NavClick();
              }}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/"}
                >
                  Start
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/team"}
                >
                  Team
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/services"}
                >
                  Service
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/projects"}
                >
                  Projects
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/testimonials"}
                >
                  Testimonials
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold border-green-600 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/login"}
                >
                  Login
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={"/testimonials"}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

//     <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
  );
}

export default MainMenu