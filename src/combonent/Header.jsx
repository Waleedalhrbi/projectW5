import React from 'react'

function Header() {
  return (
    <div>

      <div className="card lg:card-side flex flex-col lg:flex-row rounded-none mt-9 lg:w-[70%] w-full m-auto">
        
        <figure className="lg:order-2">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt=""
            className="w-full max-w-xs mx-auto mt-6 lg:mt-0" 
          />
        </figure>
        
        <div className="card-body text-left lg:order-1">
          <div className="flex items-center space-x-2">
            <hr className="w-11 border-t-1 border-[#c99484]" />
            <h4 className="text-sm uppercase tracking-wide text-gray-600">Welcome</h4>
          </div>
          <h1 className="text-5xl font-bold mt-2">I'm Dianna Adams</h1>
          <h2 className="text-2xl font-semibold mt-4">Food Critic / Influencer / Blogger</h2>
          <p className="mt-4 text-gray-500">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris.
          </p>
          <a
            href="#"
            className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white rounded-none transition-colors duration-300 mt-6 inline-block w-32"
          >
            Join Insider
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-10 lg:gap-20 py-14 lg:py-28 mr-0 lg:mr-[27rem] flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/fpHKffb/image-removebg-preview-2.png"
            alt=""
            className="w-8 lg:w-12 mb-4 lg:mb-9"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#000000]">1.2M+</h1>
          <h4 className="text-sm lg:text-lg text-gray-600">Subscribers</h4>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/GdVLfRk/image-removebg-preview-3.png"
            alt=""
            className="w-8 lg:w-12 mb-4"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#000000]">1.8M+</h1>
          <h4 className="text-sm lg:text-lg text-gray-600">Followers</h4>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/mtmmLP5/image-removebg-preview-4.png"
            alt=""
            className="w-8 lg:w-12 mb-4"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#000000]">800K+</h1>
          <h4 className="text-sm lg:text-lg text-gray-600">Readers</h4>
        </div>
      </div>
    </div>
  )
}

export default Header;
