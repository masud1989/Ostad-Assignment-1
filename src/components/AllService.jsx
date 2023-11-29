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
          <span className="text-green-600 font-bold uppercase">Our All Services</span>
          <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-10">
            We Provide best web design services
          </h2>
       </div>

        <div className="flex justify-center items-center">
          {data.map((item, i) => {
          return (
           <div
              key={i}
              className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/2 px-2"
            >
              <div className="p-10 mb-8 w-full shadow-2xl">
                <span className="mb-3 inline-block p-4 rounded bg-green-200 text-2xl">
                </span>
                <h3 className="text-lg font-bold">{item["title"]}</h3>
                <p className="text-gray-500 ">{item["des"]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>



</div>

  
  )
}

export default AllService