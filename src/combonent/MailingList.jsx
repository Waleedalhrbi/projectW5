import React from 'react';

function MailingList() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f2efee]">
      <div className="relative bg-white p-8 w-full max-w-4xl flex flex-col md:flex-row items-center border-[7px] border-gray-200">
        
        <div className="relative w-full md:w-1/2">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
            alt=""
            className="w-full h-auto object-cover relative md:-top-16" 
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Join Mailing List</h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.
          </p>
          <form className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 border border-gray-300 w-64 mb-4 md:mb-0 md:mr-4"
            />
            <button
              type="submit"
              className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-32"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MailingList;
