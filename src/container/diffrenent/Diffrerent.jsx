import React from 'react'



const Different = ({ name, imgUrl, review }) => {
  return (
    <>
     <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={imgUrl} alt="image" />
            <h5 className='text-lg font-bold'>{name}</h5>
            <p className='text-sm text-darkGrayishBlue'>{review}</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Different
