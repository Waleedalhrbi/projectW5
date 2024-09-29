import React from 'react';
import NavBar from './NavBar';
import Invite from './Invite ';
import Footer from './Footer';

function Conent() {
  return (
    <div className="bg-[#f5f5f5] p-4">
      <NavBar />
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
          <h4 className="mt-4 font-semibold">Address</h4>
          <p>1234 N Spring St, Los Angeles, CA 90012, United States.</p>
          <h4 className="mt-4 font-semibold">Phone</h4>
          <p>+01 - 123 456 7890</p>
          <h4 className="mt-4 font-semibold">Email</h4>
          <p>mail@example.com</p>
        </div>
        
        <div className="lg:w-1/2 p-4 flex justify-center">
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full max-w-md mt-8  border-solid border-grey border-[1px]">
            <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="first-name">Name *</label>
                <input type="text" id="first-name" placeholder="First" className="input input-bordered w-full mb-2" />
                <input type="text" id="last-name" placeholder="Last" className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Email *</label>
                <input type="email" id="email" className="input input-bordered w-full" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="subject">Subject *</label>
                <input type="text" id="subject" className="input input-bordered w-full" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="message">Comment or Message *</label>
                <textarea id="message" className="textarea textarea-bordered w-full" required></textarea>
              </div>
              <button
                type="submit"
                className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-32 mt-4"
              >
               SEND MASSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10 lg:gap-20 py-14 lg:py-28 mr-0 lg:mr-[27rem] flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/fpHKffb/image-removebg-preview-2.png"
            alt="Subscribers"
            className="w-8 lg:w-12 mb-4 lg:mb-9"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#000000]">1.2M+</h1>
          <h4 className="text-sm lg:text-lg text-gray-600">Subscribers</h4>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/GdVLfRk/image-removebg-preview-3.png"
            alt="Followers"
            className="w-8 lg:w-12 mb-4"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#000000]">1.8M+</h1>
          <h4 className="text-sm lg:text-lg text-gray-600">Followers</h4>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/mtmmLP5/image-removebg-preview-4.png"
            alt="Readers"
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
      <Invite></Invite>
      <Footer></Footer>
    </div>
  );
}

export default Conent;
