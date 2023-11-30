import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section>
      <div className="py-5 bg-black ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between my-10">
            <div className="mx-10 w-1/3 text-white">
              <h1 className="px-10 my-5 text-4xl font-bold text-white">
                WEB LOGO
              </h1>
              <p className="px-10 font-normal">
                Some footer text about the Agency. Just a little description to
                help people understand you better
              </p>
              <div className="px-10 mb-4 lg:mb-0 order-first lg:order-last mt-5">
                <a
                  className="inline-block mr-2 p-2 bg-green-500 hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href=""
                >
                  {/* <a className="inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded" target="_blank" href={data[0]['link']}> */}
                  <span>
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 bg-green-500 hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href=""
                >
                  <span>
                    <FaTwitter />
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 bg-green-500 hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href=""
                >
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 bg-green-500 hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href=""
                >
                  <span>
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>

            <div className=" mt-10 mx-10 w-1/3 text-white flex flex-col">
              <h1 className="text-xl font-bold mb-5">Quick Links</h1>
              <Link
                className=" mr-2 p-1 text-md"
                target="_blank"
                href="/services"
              >
                Services
              </Link>
              <Link
                className=" mr-2 p-1 text-md"
                target="_blank"
                href="/services"
              >
                Portfolio
              </Link>
              <Link
                className=" mr-2 p-1 text-md"
                target="_blank"
                href="/services"
              >
                About Us
              </Link>
              <Link
                className=" mr-2 p-1 text-md"
                target="_blank"
                href="/services"
              >
                Contact Us
              </Link>
            </div>

            <div className="px-20 w-1/3 text-white">
              <h1 className="text-xl font-bold mb-5 ">Address</h1>
              <p className="font-normal">
                Design Agency Head Office. Airport Road United Arab Emirate
              </p>
            </div>
          </div>

          {/* Footer Title Down  */}
          <div className="mx-10 mt-8 mb-0 flex flex-wrap justify-between items-center">
            <p className="order-last text-md text-white">
              Copyright Design Agency 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer