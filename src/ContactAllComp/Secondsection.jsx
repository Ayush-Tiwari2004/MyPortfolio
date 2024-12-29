import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Form } from 'react-router-dom';
import Button from '../CommonComp/Button';

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data)
    return null;
  }
  catch (error) {
    console.log(error.Messege)
  }
}

const Secondsection = () => {
  const btnColor = "w-64 bg-gradient-to-r from-[#5500FF] to-[#3a0f91] rounded-md text-white"
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="bg-white dark:bg-[#111827] rounded-xl card-shadow p-5 my-16 text-white flex">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5">
              <div className="col-span-12 md:col-span-4">
                <div className="grid grid-cols-1 md:grid-rows-3 gap-5">
                  <div className='bg-gray-100 dark:bg-[#1e2940] rounded-xl card-shadow flex items-center gap-5  pl-5 pr- py-5'>
                    <div className="num-icon">
                      <FaPhoneAlt className='text-[40px] bg-pink-300 dark:bg-pink-100 text-rose-800 rounded-full p-2' />
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      <h5>Phone Number</h5>
                      <span className='text-[14px]'>+91 6394332714</span>
                    </div>
                  </div>
                  <div className='bg-gray-100 dark:bg-[#1e2940] rounded-xl card-shadow flex items-center gap-5 pl-5 pr- py-5'>
                    <div className="num-icon">
                      <MdOutlineMail className='text-[40px] bg-pink-300 dark:bg-pink-100 text-rose-800 rounded-full p-2' />
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      <h5>Email Address</h5>
                      <span className='text-[14px]'>ayushtiwari2004@gmail.com</span>
                    </div>
                  </div>
                  <div className='bg-gray-100 dark:bg-[#1e2940] rounded-xl card-shadow flex items-center gap-5 pl-5 pr- py-5'>
                    <div className="num-icon">
                      <IoLocationOutline className='text-[40px] bg-pink-300 dark:bg-pink-100 text-rose-800 rounded-full p-2' />
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      <h5>Address</h5>
                      <span className='text-[14px]'>(up) Prayagraj Rambag</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 bg-gray-100 dark:bg-[#1e2940] rounded-xl card-shadow py-5 px-10 flex flex-col gap-4 text-gray-800 dark:text-white">
                <div className="">
                  <h3 className='text-[28px] md:text-md'>Send Messege</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci nam nisi nemo officiis ullam iste? Delectus debitis odit vitae rerum, minima obcaecati.</p>
                </div>
                <Form method='POST' action="/contact">
                  <div className='flex flex-col gap-5'>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
                      <input
                        type="text"
                        name='username'
                        required autoComplete='off'
                        className='bg-transparent border-2 pl-2 outline-none rounded-[3px]'
                        placeholder='Enter Username' />
                      <input
                        type="text"
                        name='Email'
                        required autoComplete='off'
                        className='bg-transparent border-2 pl-2 outline-none rounded-[3px]'
                        placeholder='Enter Email' />
                    </div>
                    <textarea
                      name="messege"
                      id=""
                      className='bg-transparent border-2 h-36 p-2 overflow-auto rounded-[3px] outline-none resize-none'
                      placeholder='I am here to help you'></textarea>
                    <div className="text-center">
                    <Button
                      type="submit"
                      FillAnyColor={btnColor}
                      label="Submit" />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Secondsection
