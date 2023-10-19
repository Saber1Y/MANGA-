import React from 'react'
import { images, data } from '../../constants'


const Difference = () => {
  return (
    <div>
     <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What's Different about Manga?
      </h2>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            {data.peoplesNames.map((name, index)=> (
              
            ))}
            </div>
        </div>
     </div>
    </div>
  )
}

export default Difference
