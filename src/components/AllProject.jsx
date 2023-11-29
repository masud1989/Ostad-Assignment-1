import { FaChevronRight } from 'react-icons/fa';


async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
};

const AllProject = async () => {

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

        <div className="grid grid-cols-2 my-10 gap-4">
          {data.map((item, i) => {
            return (
              <div key={i.toString()} className="py-5 ">
                <div className="container mx-auto px-4">
                  <div className="w-full ">
                    <div className="mb-4 lg:mb-0  rounded-xl shadow-lg p-5">
                      <img
                        className="w-full object-cover rounded-2xl"
                        src={item["image"]}
                        alt="image"
                      />
                      <h3 className="text-slate-900 text-xl m-5 uppercase font-bold text-center">
                        {item["title"]}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AllProject