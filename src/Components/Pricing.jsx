import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const Pricing =() =>{
  return (
      <div className='w-full text-white my-24'>
          <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'> </div>

          <div className='max-w-[1240px] mx-auto py-12' >

              <div className='text-center py-8 text-slate-300' text-center >
                  <h2 className='text-3xl uppercase'>PRICING</h2>
                  <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                  <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis, officia. A ipsam impedit, culpa repudiandae fugit
                      nostrum dolorem esse nesciunt!</p>
              </div>

              <div className='grid md:grid-cols-2'>
                  <div className='bg-white text-slate-900 m-16 p-8 rounded-xl shoadow-2xl relative'>
                      <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                      <div>
                          <p className='text-xl font-bold py-4 flex '>KSH.4900 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                      </div>

                      <p className='text-xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. In, impedit!</p>
                      <div className='text-xl '>
                          <p className='flex py-4' ><CheckIcon className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon  className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon  className='w-8 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <button  className='w-1/2 py-2 my-3'>Get Started</button>
                      </div>
                  </div>

                  <div className='bg-white text-slate-900 m-16 p-8 rounded-xl shoadow-2xl relative'>
                      <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                      <div>
                          <p className='text-xl font-bold py-4 flex '>KSH.9900 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                      </div>

                      <p className='text-xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. In, impedit!</p>
                      <div className='text-xl '>
                          <p className='flex py-4' ><CheckIcon className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon  className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon  className='w-8 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                          <p  className='flex py-4' ><CheckIcon className='w-8 mr-5 text-green-600' /> Lorem ipsum dolor sit amet.</p>
                          <button  className='w-1/2 py-2 my-3'>Get Started</button>
                      </div>
                  </div>



                  





              </div>


          </div>
      
    </div>
  )
}

export default Pricing
