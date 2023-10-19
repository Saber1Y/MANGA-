import React from 'react';
import Subheading from '../../container/subheading/Subheading';
import Illustration from '../../assets/illustration-intro.svg';

const Heading = () => {
  return (
    <>
      <div className="container flex flex-col-reverse items-center mx-auto  md:space-y-0 md:flex-row">
        <Subheading
          title="Bring everyone together to build better products"
          paragraph="Manga makes it simple for software teams to plan day-to-day tasks while keeping the larger team's goals in view."
          btn="Get Started"
        />
        <img src={Illustration} alt="" /> 
      </div>
    </>
  );
}

export default Heading;
