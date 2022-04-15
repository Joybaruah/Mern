import React from 'react'

export default function ContentInfo({MernData}) {
  return (
  <>
    <div className=' xl:flex xl:flex-col mx-1 mt-4 xl:items-center sm:flex sm:flex-col sm:items-center '>  
      <div className='xl:w-[50vw] lg:w-[60vw]  sm:w-[80vw]' >
        <h2 className='mx-3 xl:mt-3 font-archivo text-xl xl:text-3xl text-zinc-800'>Technologies used :</h2>

                <ul className='font-workSans text-sm xl:text-base mx-5 p-2 list-disc'>
                  <li>
                    MongoDB - document database
                  </li>
                  <li>
                    Express JS - Node.js web framework
                  </li>
                  <li>
                    React JS - a client-side JavaScript framework
                  </li>
                  <li>
                    Node JS - the premier JavaScript web server
                  </li>
                </ul>  
      </div>{/* Four Techs */}
      
      {MernData.map((CurElm)=>{
        return (
            <div className='mb-3 xl:w-[50vw] lg:w-[60vw] sm:w-[80vw]'>
                <div className='mt-3'>
                <h2 className='mx-3 font-archivo text-xl text-zinc-800 xl:text-2xl'>{CurElm.Tech}</h2>
                </div>
                <div>
                    <p className='font-workSans mx-2 xl:text-base p-1 w-[95vw] xl:w-fit sm:w-fit'>{CurElm.description}</p>
                    <button className='mx-3 text-sm xl:text-sm underline decoration-green-600 text-green-600 rounded-md font-workSans'>
                    <a href={CurElm.link} target="_blank" rel="noreferrer">Read more</a>
                    </button>
                </div>
            </div>
        )
    })}
          <div className='xl:w-[50vw] lg:w-[60vw] sm:w-[80vw]'>
            <h2 className='mx-3 font-archivo text-xl text-zinc-800 xl:text-2xl'>Why MERN stack?</h2>
              <p className='font-workSans mx-2 my-2 xl:text-base p-1 w-[95vw] xl:w-fit sm:w-fit'>
              There are many good reasons to use the MERN Stack. For example, it allows the creation of a 3-tier architecture that includes frontend, backend, and database using JavaScript and JSON. <br />
              <br />
              MongoDB, which is the base of the MERN stack, is designed to store JSON data natively. Everything in it, including CLI and query language, is built using JSON and JS. The NoSQL database management system works well with NodeJS and thus, allows manipulating, representing, and storing JSON data at every tier of the application. <br />
              <br />
              Express is a server-side framework that wraps HTTP requests and responses and makes mapping URLs to server-side functions easy. This perfectly complements the ReactJS framework, a front-end JS framework for developing interactive UIs in HTML while communicating with the server. <br />
              <br />
              As the two technologies work with JSON, data flows seamlessly, making it possible to develop fast and debug easily. To make sense of the entire system, you need to understand only one language, i.e., JavaScript and the JSON document structure.
              </p>
          </div>
    </div>
    
    </>
  )
}
