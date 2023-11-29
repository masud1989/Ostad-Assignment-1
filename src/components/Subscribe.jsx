import React from "react";

const Subscribe = () => {
  return (
    <div className="container text-center my-20">
      {/* <section className="mx-10 px-10 my-10 "> */}

      <h2 className="text-green-600 font-bold uppercase">Subscribe</h2>
      <div className="flex flex-col mb-10">
        <h2 className="text-3xl lg:text-3xl font-bold font-heading">
          Subscribe to get the latest
        </h2>
        <h2 className="text-3xl lg:text-3xl font-bold font-heading ">
          news about us
        </h2>
        <p className="text-gray-500 text-sm">
          Please drop your email below to get daily update about what we do
        </p>
      </div>

      <form>
        
        <div class="mx-auto relative w-1/2 text-center">
          
          <input
            type="search"
            class=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Enter Your Email Address"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-3 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Subscribe
          </button>
        </div>
      </form>

      {/* </section> */}
    </div>
  );
};

export default Subscribe;
