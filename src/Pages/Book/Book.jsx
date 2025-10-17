import React from 'react'
import bookItems from '../../assets/pngwing 1.png'
import { GoStar } from "react-icons/go";


export default function Book() {
  return (
    <section>
            <div className='p-6 border border-gray-400 w-fit rounded-xl' >
                  <div className='h-56'>
                        <img className='w-full h-full object-contain p-3' src={bookItems} alt="" />
                  </div>
               <div >
                     <div className='flex justify-between my-4'>
                        <p className='text-[#23BE0A]'>Young Adult</p>
                        <p className='text-[#23BE0A]'>Identity</p>
                  </div>
                  <div>
                        <p className='text-2xl tracking-wide'>The Catcher in the Rye</p>
                        <p className='text-base '>By : Awlad Hossain</p>
                        <div className='flex justify-between  mt-9'>
                              <p>Fiction</p>
                              <div className='flex items-center gap-3'>
                                    
                              <p>5.00</p>
                              <GoStar />
                              </div>
                        </div>
                  </div>
               </div>

            </div>
    </section>
  )
}
