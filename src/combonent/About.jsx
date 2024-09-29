import React from 'react';
import NavBar from './NavBar';
import Invite from './Invite ';
import Footer from './Footer';

function About() {
  return (
    <div className="bg-[#f5f5f5]">
      <NavBar />

     
      <div className="flex flex-col lg:flex-row justify-between items-center p-8">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-4 ">About Me</h2>
          <p className="text-gray-700">
            Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
          </p>

         
          <div className="mt-8">
            <h3 className="font-semibold">Food Critic</h3>
            <p className="text-gray-600">Diam nulla blandit urna tristique sit etiam amet adipiscing.</p>
            <h3 className="font-semibold mt-4">Influencer</h3>
            <p className="text-gray-600">Et volutpat lacinia enim, purus et rhoncus nibh egestas habitant elit.</p>
            <h3 className="font-semibold mt-4">Blogger</h3>
            <p className="text-gray-600">Venenatis egestas lectus interdum enim orci intege.</p>
          </div>
        </div>
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg"
          alt="About Me"
          className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0"
        />
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

    
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center p-8">
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
          alt="Hero"
          className="lg:w-1/2 lg:mr-8 mt-8 lg:mt-0"
        />
        <div className="lg:w-1/2">
          <p className="text-gray-700">
            Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.
          </p>
          <div className="mt-4">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png"
              alt="Signature"
              className="inline-block w-24 h-auto"
            />
            <span className="ml-2 text-gray-600">Dianna Adams</span>
          </div>
        </div>
      </div>

     
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

   
      <div className="flex flex-col items-center py-10">
        <img
          src="https://www.annaharar.com/ContentFilesArchive/631994Image1-1180x677_d.jpg?version=4936699"
          alt="Dianna's Family"
          className="w-[60%] h-auto mb-5 max-sm:w-full"
        />
        <div className="absolute text-center text-white bg-black bg-opacity-50 p-5">
          <h3 className="text-lg font-bold">Dianna Adam's Family</h3>
          <p>Est, cras aliquet nunc, habitant velit ac, et sit tincidunt amet mi nulla pellentesque dignissim mattis tempor.</p>
        </div>
      </div>

     
      <div className="flex flex-col items-center p-8">
        <h2 className="text-2xl">Follow along</h2>
        <button
          type="submit"
          className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-32 mt-4"
        >
         @DIANNAADAMS
        </button>
      </div>


      <div className="grid grid-cols-2 gap-4 p-8 md:grid-cols-4">
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-5.jpg"
          className="w-full h-auto"
        />
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-4.jpg"
          className="w-full h-auto"
        />
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-6.jpg"
          className="w-full h-auto"
        />
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-2.jpg"
          className="w-full h-auto"
        />
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg"
          className="w-full h-auto"
        />
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-1.jpg"
          className="w-full h-auto"
        />
      </div>
      <Invite></Invite>
      <Footer></Footer>
    </div>
  );
}

export default About;
