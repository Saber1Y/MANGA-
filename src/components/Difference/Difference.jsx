import React from 'react'
import Different from '../../container/diffrenent/Diffrerent'
import data from '../../constants/data';

const Difference = () => {
  return (
<section id="testimonials">
  <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
    <h2 className="text-4xl font-bold text-center">
      What's Different About Manage?
    </h2>

    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
      {data.peoplesNames.map((person, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
        >
          <img
            src={person.img}
            className="w-16 -mt-14"
            alt=""
          />
          <h5 className="text-lg font-bold">{person.name}</h5>
          <p className="text-sm text-darkGrayishBlue">
            {person.review}
          </p>
        </div>
      ))}
    </div>

    <div className="my-16">
      <a
        href="#"
        className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
      >
        Get Started
      </a>
    </div>
  </div>
</section>

  )
}

export default Difference
