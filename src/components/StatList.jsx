async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/StatList");
  if(!res.ok){
      throw new Error("StatList Calling Fail");
  }
  return res.json();
}


import { PiUsersThreeLight } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GoProjectTemplate } from "react-icons/go";

const StatList = async () => {

  const data = await getData()

  return (
    <section className="py-20">
    <div className="container mx-auto px-2">
        <div className="mb-5 flex gap-2">
            <div className="w-full md:w-1/2 lg:w-1/4 text-center shadow-2xl">
                <span className="my-6 inline-block p-4 rounded bg-green-200 text-2xl">
                <PiUsersThreeLight  />
                </span>
                <h3 className="text-2xl font-bold">{data['followers']}</h3>
                <p className="text-gray-500 mb-5">Followers</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 text-center shadow-2xl">
                <span className="my-6 inline-block p-4 rounded bg-green-200 text-2xl">
                    <BiLike />
                </span>
                <h3 className="text-2xl font-bold">{data['solved']}</h3>
                <p className="text-gray-500">Solved Problems</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 text-center shadow-2xl">
                <span className="my-6 inline-block p-4 rounded bg-green-200 text-2xl">
                    <HiOutlineEmojiHappy />
                </span>
                <h3 className="text-2xl font-bold">{data['customers']}</h3>
                <p className="text-gray-500">Happy Customers</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 text-center shadow-2xl">
                <span className="my-6 inline-block p-4 rounded bg-green-200 text-2xl">
                <GoProjectTemplate />
                </span>
                <h3 className="text-2xl font-bold">{data['projects']}</h3>
                <p className="text-gray-500">Projects</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default StatList