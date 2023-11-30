import moment from "moment/moment";

async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
  if(!res.ok){
      throw new Error("Featured Project Calling Fail");
  }
  return res.json();
}


const FeaturedProject = async () => {

  const data = await getData()
  
  return (
    <div className="bg-green-100 py-10">
      <section className="mx-10 px-10">
        <div className="mb-8 max-w-md ">
          <span className="text-green-600 font-bold uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl lg:text-3xl font-bold font-heading mb-10">
            We Provide Perfect Solutions to your business growth
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full px-4">
            <div className="flex flex-wrap lg:mb-4">
              <div className="md:w-1/2 lg:w-1/2 md:h-1/2 lg:h-1/2">
                <img
                  className="w-full  p-2 object-cover rounded-4xl lg:rounded-xl"
                  src={data[0]["image"]}
                  alt=""
                />
                <p className="text-gray-400">
                  {data[0]["remark"]}-{data[0]["created_at"]}
                </p>
                <h3 className="text-2xl font-bold">{data[0]["title"]}</h3>
              </div>
              <div className="md:w-1/2 lg:w-1/2 grid grid-cols-2 gap-2 ">
                <div>
                  <img
                    className="p-2 rounded-4xl lg:rounded-xl"
                    src={data[1]["image"]}
                    alt=""
                  />
                  <p className="text-sm text-gray-400">
                    {data[1]["remark"]}-{data[1]["created_at"]}
                  </p>
                  <h3 className="text-sm font-bold">{data[1]["title"]}</h3>
                </div>
                <div>
                  <img
                    className="p-2 rounded-4xl lg:rounded-xl"
                    src={data[2]["image"]}
                    alt=""
                  />
                  <p className="text-sm text-gray-400">
                    {data[2]["remark"]}-{data[2]["created_at"]}
                  </p>
                  <h3 className="text-sm  font-bold">{data[2]["title"]}</h3>
                </div>
                <div>
                  <img
                    className="p-2 rounded-4xl lg:rounded-xl"
                    src={data[3]["image"]}
                    alt=""
                  />
                  <p className="text-sm text-gray-400">
                    {data[3]["remark"]}-{data[3]["created_at"]}
                  </p>
                  <h3 className="text-sm font-bold">{data[3]["title"]}</h3>
                </div>
                <div>
                  <img
                    className="p-2 rounded-4xl lg:rounded-xl"
                    src={data[4]["image"]}
                    alt=""
                  />
                  <p className="text-sm text-gray-400">
                    {data[4]["remark"]}-{data[4]["created_at"]}
                    
                  </p>
                  <h3 className="text-sm font-bold">{data[4]["title"]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProject