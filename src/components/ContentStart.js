import React from 'react'

export default function ContentStart() {
  return (
    <div className='sm:flex sm:flex-col justify-center'>

      <div className='bg-gradient-to-br from-green-100 to-gray-100'> {/* What is MERN stack? */}
        <div className='flex flex-col mx-3 p-4 items-center '>
          <h2 className='xl:my-6 font-archivo text-xl xl:text-4xl font-semibold text-zinc-800'>MERN stack</h2>
          <p className='font-workSans my-4 xl:my-6 xl:w-[40vw] text-sm xl:text-base'>
            <span className='text-green-600'>MERN Stack</span> is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: <span className='text-green-500'>MongoDB, Express, React and Node.js</span>. It is designed to make the development process smoother and easier. <br />
            <br />
            It is one of several variations of the <span className='text-green-600'>MEAN Stack</span> (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Other variants include <span className='text-green-600'>MEVN</span> (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.
          </p>
        </div>
      </div>

    </div>
  )
}
