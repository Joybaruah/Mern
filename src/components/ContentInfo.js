import React from 'react'

export default function ContentInfo({MernData}) {
  return (
  <>
    <div className=' xl:flex xl:flex-col mt-4 xl:items-center'>  
      <div className='xl:w-[50vw]' >
        <h2 className='mx-3 my-3 font-archivo text-xl xl:text-2xl text-zinc-800'>The four key Technologies :</h2>

                <ul className='font-workSans text-sm xl:text-base my-2 mx-5 p-2 list-disc'>
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
            <div className='mb-3 xl:w-[50vw]'>
                <div className='mt-3'>
                <h2 className='mx-3 font-archivo text-xl text-zinc-800 xl:text-2xl'>{CurElm.Tech}</h2>
                </div>
                <div>
                    <p className='font-workSans mx-2 text-sm xl:text-base p-1 w-[95vw] xl:w-fit '>{CurElm.description}</p>
                    <button className='mx-3 text-xs xl:text-sm underline decoration-green-600 text-green-600 rounded-md font-workSans'>
                    <a href={CurElm.link} target="_blank" rel="noreferrer">Read more</a>
                    </button>
                </div>
            </div>
        )
    })}
    </div>
    </>
  )
}
