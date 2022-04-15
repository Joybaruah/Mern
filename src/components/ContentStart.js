import React from 'react'

export default function ContentStart() {
  return (
    <div className='sm:flex sm:flex-col justify-center'>

      <div className='bg-gradient-to-br from-green-100 to-gray-100'> {/* What is MERN stack? */}
        <div className='flex flex-col mx-3 p-4 items-center '>
          <h2 className='my-2 font-archivo text-xl xl:text-3xl font-semibold text-zinc-800'>MERN stack</h2>
          <p className='font-workSans text-center xl:text-left my-2 xl:w-[50vh] text-sm xl:text-base'>
            <span className='text-green-600'>MERN Stack</span> is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: <span className='text-green-500'>MongoDB, Express, React and Node.js</span>. It is designed to make the development process smoother and easier.
          </p>
        </div>
      </div>

    </div>
  )
}
