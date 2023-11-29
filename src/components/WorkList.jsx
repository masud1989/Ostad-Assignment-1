import Link from "next/link";
import { GoProjectTemplate } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";


async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
}

const WorkList = async () => {
  const data = await getData();

  return (
    <section className="mx-10 px-10 my-10">
      <div className="mb-8 max-w-md ">
        <span className="text-green-600 font-bold uppercase">Work List</span>
        <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-10">
          We Provide Perfect Solutions to your business growth
        </h2>
      </div>

      <div className="flex justify-center items-center">
        {data.map((item, i) => {
          return (
           <div
              key={i}
              className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-2"
            >
              <div className="p-10 mb-8 w-full md:w-1/2 lg:w-full hover:shadow-2xl hover:rounded-2xl">
                <span className="mb-3 inline-block p-4 rounded bg-green-200 text-2xl">
                  <GoProjectTemplate />
                </span>
                <h3 className="text-lg font-bold">{item["title"]}</h3>
                <p className="text-gray-500 ">{item["des"]}</p>
                <div className="flex items-center mt-10 px-5 hover:bg-orange-600 hover:p-3 hover: rounded-lg hover:text-white cursor-pointer">
                  <button className="font-bold mr-2" href="/">
                    Learn More       
                  </button>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkList;
