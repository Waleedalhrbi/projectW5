import React from 'react';

function Featured() {
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-gray-500 text-lg mb-8">AS FEATURED IN</h2>
      
      
      <div className="grid grid-cols-2 gap-8 lg:flex lg:justify-center lg:items-center">
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
      
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
          alt=""
          className="h-[6rem] col-span-2 mx-auto lg:mx-0"
        />
        
      </div>
    </div>
  );
}

export default Featured;
