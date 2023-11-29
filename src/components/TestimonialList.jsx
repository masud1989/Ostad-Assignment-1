import { FaChevronRight } from 'react-icons/fa';

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
};

const TestimonialList = async () => {
  const data = await getData();
  return (
    <div>
      <section className="my-20 mx-20  ">
        <h4 className="text-4xl font-semibold mb-5">Testimonial List</h4>
        <div className="">
          <h1 className="flex items-center font-bold">
            Home
            <span className="mx-4">
              <FaChevronRight />
            </span>
            <span className="text-green-500 ">Testimonial List</span>
          </h1>
        </div>
      </section>

      <section className="mx-10 px-10 my-10">
        <div className="mb-8 max-w-md ">
          <span className="text-green-600 font-bold uppercase mb-2">
          Testimonial List
          </span>
          <h2 className="text-3xl lg:text-3xl font-bold font-heading mt-5 mb-10">
          Better Agency/SEO Solution At Your Fingertips
          </h2>
        </div>

        <div className="grid grid-cols-3 my-10 gap-2">
          {data.map((item, i) => {
            return (
              <div key={i.toString()} className="py-5 ">
                <div className="container mx-auto px-4">
                  <div className="w-full">
                    <div className="flex flex-col justify-center items-center mb-4 lg:mb-0  rounded-xl shadow-xl p-5 ">
                      <img
                        className="w-[95px] h-[95px] object-cover rounded-xl m-5 "
                        src={item["image"]}
                        alt="image"
                      />
                      <p className='text-gray-500 text-center font-semibold text-md mb-5'>{item['msg']}</p>
                      <h3 className="text-slate-900 text-2xl mt-5 uppercase font-bold text-center">
                        {item['name']}
                      </h3>
                      <h1 className="text-slate-900 text-md mt-3 mb-5 uppercase font-semibold text-center">
                        {item['designation']}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default TestimonialList