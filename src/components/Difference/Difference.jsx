import React from 'react'
import Different from '../../container/diffrenent/Diffrerent'
import data from '../../constants/data';

const Difference = () => {
  return (
<>
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What's Different about Manga?
      </h2>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            {data.peoplesNames.map((name, index)=> (
          <Different 
              key={index}
              imgUrl={name.img}
              name={name.name}
              review={name.review}
              />
            ))}
            </div>
            <div class="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started
            </a>
        </div>
        </div>
     </div>
</>
  )
}

export default Difference
