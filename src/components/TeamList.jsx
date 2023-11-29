import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";


async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
};


export const TeamList = async () => {
  const data = await getData();
  return (
    <div className="container">
      <section className="my-20 mx-20  ">
        <h4 className="text-4xl font-semibold mb-5">Team</h4>
        <div className="">
          <h1 className="flex items-center font-bold">
            Home{" "}
            <span className="mx-4">
              <FaChevronRight />
            </span>{" "}
            <span className="text-green-500 ">Team</span>
          </h1>
        </div>
      </section>

      <section className="mx-10 px-10 my-10">
        <div className="mb-8 max-w-md ">
          <span className="text-green-600 font-bold uppercase">
            Our Team Members
          </span>
          <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-10">
            Check Our Awesome Team Members
          </h2>
        </div>

        <div className="flex justify-center items-center">
          {data.map((item, i) => {
            return (
              <div key={i} className="mb-6 w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center bg-white rounded-2xl shadow overflow-hidden ">
                  <img
                    className="w-full  h-80 object-cover relative"
                    src={item["image"]}
                    alt=""
                  />
                  <div className="ms-20 absolute bg-gray-200 rounded-3xl p-3 flex items-center justify-center gap-5 text-gray-500">
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                  </div>
                  <h3 className=" p-6 text-center text-3xl font-bold text-gray-800 ">
                    {item["name"]}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
