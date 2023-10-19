import React from 'react'
import Subheading  from '../../container/subheading/Subheading'
import Feature from '../../container/Feature/Feature';
import featuresData from '../../constants/data'

const Features = () => {
  return (
  <div>
    <div
        className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
      <div className="flex flex-col space-y-8 md:w-1/2">
        {featuresData.map((feature, index) => (
          <Feature 
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
          />
        ))}
      </div>
    </div>
  </div>
  );
};
export default Features
