import Link from "next/link";

async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/HeroList");
  if(!res.ok){
      throw new Error("HeroList Calling Fail");
  }
  return res.json();
}

async function getBrandData(){
  const res=await fetch(process.env.BASE_URL+"api/BrandList");
  if(!res.ok){
      throw new Error("BrandList Calling Fail");
  }
  return res.json();
}


const Hero = async () => {
  const  data = await getData()
  const  brandData = await getBrandData()
  return (
    
    <div className="my-20">
            <section className='relative bg-green-200'>
                <div className='relative pt-12 lg:pt-20 pb-20 z-10'>
                    <div className='container mx-20  px-4'>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center'>
                                <div className='w-full text-center lg:text-left'>
                                    <div className='max-w-md mx-auto lg:mx-0'>
                                        <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading'>
                                           <span>{data['title']}</span>
                                        </h2>
                                    </div>
                                    <div className='max-w-sm mx-auto lg:mx-0'>
                                        <p className='mb-10 text-black leading-loose'>
                                            {data['description']}
                                        </p>
                                        <div>
                                            <Link
                                                className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-200'
                                                href=''>Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-4'>
                                <div className='flex flex-wrap lg:mb-4'>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-xl' src={data['image1']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-xl' src={data['image2']} alt=''/>
                                </div>
                                <div className='flex flex-wrap lg:mb-4'>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-xl' src={data['image3']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-xl' src={data['image4']} alt=''/>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                     {/* Brand Data  */}
                     <div className="bg-white flex flex-wrap p-8">
                    {
                        brandData.map((item,i)=>{
                          return(
                              <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                                  <div>
                                      <img className="mx-auto h-8 rounded-lg" src={item['image']} alt=""/>
                                  </div>
                              </div>
                          )
                        })
                    }
                </div>
                </div>
            </section>
        </div>
  )
}

export default Hero