import { FaChevronRight } from "react-icons/fa";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
};

const AllService = async () => {
  const data = await getData()
  return (
    <div>
      <section className="my-20 mx-20  ">
        <h4 className="text-4xl font-semibold mb-5">Our Services</h4>
        <div className="">
          <h1 className="flex items-center font-bold">
            Home
            <span className="mx-4">
              <FaChevronRight />
            </span>
            <span className="text-green-500 ">Our Services</span>
          </h1>
        </div>
      </section>

      <section className="mx-10 px-10 my-10">
        <div className="mb-8 max-w-md ">
          <span className="text-green-600 font-bold uppercase">
            Our All Services
          </span>
          <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-10">
            We Provide best web design services
          </h2>
        </div>
          
        <div className="flex justify-center items-center my-10 gap-4">
          {/* Each Item  */}
          <div className="flex flex-col shadow-2xl rounded-xl p-5">
            <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-5 mt-10 text-gray-700">
              {data[0]["title"]}
            </h2>
            <p className="text-gray-500 p-5 ">{data[0]["des"]}</p>

            <div className="w-full lg:w-full">
              <div className="flex flex-wrap lg:mb-4 ">
                <img
                  className="w-full md:w-1/2 lg:w-2/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl "
                  src={data[0]["image1"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[0]["image2"]}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap lg:mb-4">
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[0]["image3"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[0]["image4"]}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Each Item  */}
          <div className="flex flex-col shadow-2xl rounded-xl p-5">
            <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-5 mt-10 text-gray-700">
              {data[1]["title"]}
            </h2>
            <p className="text-gray-500 p-5 ">{data[1]["des"]}</p>

            <div className="w-full lg:w-full">
              <div className="flex flex-wrap lg:mb-4 ">
                <img
                  className="w-full md:w-1/2 lg:w-2/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl "
                  src={data[1]["image1"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[1]["image2"]}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap lg:mb-4">
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[1]["image3"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[1]["image4"]}
                  alt=""
                />
              </div>
            </div>
          </div>  
        </div>
        <div className="flex justify-center items-center my-10 gap-4">
          {/* Each Item  */}
          <div className="flex flex-col shadow-2xl rounded-xl p-5">
            <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-5 mt-10 text-gray-700">
              {data[2]["title"]}
            </h2>
            <p className="text-gray-500 p-5 ">{data[2]["des"]}</p>

            <div className="w-full lg:w-full">
              <div className="flex flex-wrap lg:mb-4 ">
                <img
                  className="w-full md:w-1/2 lg:w-2/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl "
                  src={data[2]["image1"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[2]["image2"]}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap lg:mb-4">
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[2]["image3"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[2]["image4"]}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Each Item  */}
          <div className="flex flex-col shadow-2xl rounded-xl p-5">
            <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-5 mt-10 text-gray-700">
              {data[3]["title"]}
            </h2>
            <p className="text-gray-500 p-5 ">{data[3]["des"]}</p>

            <div className="w-full lg:w-full">
              <div className="flex flex-wrap lg:mb-4 ">
                <img
                  className="w-full md:w-1/2 lg:w-2/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl "
                  src={data[3]["image1"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/3 h-32 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[3]["image2"]}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap lg:mb-4">
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[3]["image3"]}
                  alt=""
                />
                <img
                  className="w-full md:w-1/2 lg:w-1/2 h-64 p-2 object-cover rounded-3xl lg:rounded-3xl"
                  src={data[3]["image4"]}
                  alt=""
                />
              </div>
            </div>
          </div>  
        </div>
        
      </section>
    </div>
  );
}

export default AllService