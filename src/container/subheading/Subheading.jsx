import React from 'react';

const Subheading = ({ title, paragraph, btn, src }) => {
  return (
    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
      <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
        {title}
      </h1>
      <p className="max-w-sm text-center text-darkishblue md:text-left">
        {paragraph}
      </p>
      <div className="flex justify-center md:justify-start">
        <a
          href=""
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          {btn}
        </a>
      </div>
      
    </div>
  );
}

export default Subheading;
