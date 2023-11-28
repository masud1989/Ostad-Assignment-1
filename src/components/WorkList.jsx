import Link from "next/link";
import { BsImages, BsArrowRight   } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import StatList from "./StatList";


const WorkList = async () => {

  return (    

            <div className="container mx-10 my-10">
                <div className="mb-8 max-w-md mx-10">
                    <span className="text-green-600 font-bold uppercase">
                        Work List
                    </span>
                    <h2 className="text-3xl lg:text-3xl font-bold font-heading">
                      We Provide Perfect Solutions to your business growth
                    </h2>
                </div>
                <div className="flex justify-center items-center">

                  <div className="flex flex-col p-10">
                    <div className="px-10 w-full md:w-1/2 lg:w-1/4 text-center text-2xl">
                        <span className=" inline-block p-4 rounded bg-green-200 rounded-xl">
                          <BsImages  />
                        </span>
                    </div>
                      <div className="px-10">
                        <h1 className="text-xl font-bold">Grow Your Business</h1>
                        <p className="mt-2">We help identify the best ways to improve your business</p>
                        <div className="flex items-center mt-10">
                          <Link className="font-bold mr-2" href="/">Learn More </Link><BsArrowRight  />
                        </div>
                      </div>
                  </div> 

                  <div className="flex flex-col p-10">
                    <div className="px-10 w-full md:w-1/2 lg:w-1/4 text-center text-2xl">
                        <span className=" inline-block p-4 rounded bg-green-200 rounded-xl">
                          <FaHeartBroken  />
                        </span>
                    </div>
                      <div className="px-10">
                        <h1 className="text-xl font-bold">Improve brand loyalty</h1>
                        <p className="mt-2">We help identify the best ways to improve your business</p>
                        <div className="flex items-center mt-10">
                          <Link className="font-bold mr-2" href="/">Learn More </Link><BsArrowRight  />
                        </div>
                      </div>
                  </div>  
                  <div className="flex flex-col p-10">
                    <div className="px-10 w-full md:w-1/2 lg:w-1/4 text-center text-2xl">
                        <span className=" inline-block p-4 rounded bg-green-200 rounded-xl">
                          <CgShoppingBag  />
                        </span>
                    </div>
                      <div className="px-10">
                        <h1 className="text-xl font-bold">Improve Business Model</h1>
                        <p className="mt-2">We help identify the best ways to improve your business</p>
                        <div className="flex items-center mt-10">
                          <Link className="font-bold mr-2" href="/">Learn More </Link><BsArrowRight  />
                        </div>
                      </div>
                  </div>  
                </div>



    {/* Stats  */}
    <StatList />

            </div>
  
  )
}

export default WorkList