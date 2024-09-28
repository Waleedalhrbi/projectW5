import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
     
        <div className="flex items-center justify-center sm:justify-start">
          <img 
            src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg" 
            alt="Logo" 
            className="h-12"
          />
        </div>

    
        <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-700">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
            <li><a href="#" className="hover:text-gray-900">Videos</a></li>
          </ul>
          
          <ul className="hidden sm:flex">
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
  
     <div className="sm:hidden mt-4 text-center">
        <a href="#" className="hover:text-gray-900">Contact</a>
      </div>

      
        <div className="flex justify-center sm:justify-start space-x-6">
          <a href="#">
            <img 
              src="https://i.ibb.co/2PmC9XP/image-removebg-preview-5.png" 
              alt="" 
              className="h-11"
            />
          </a>
          <a href="#">
            <img 
              src="https://i.ibb.co/jkmwwhN/image-removebg-preview-6.png" 
              alt="" 
              className="h-11"
            />
          </a>
          <a href="#">
            <img 
              src="https://i.ibb.co/JQxLRCf/image-removebg-preview-7.png" 
              alt="" 
              className="h-11"
            />
          </a>
        </div>
      </div>

 
    
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-6 border-t pt-4 text-sm text-gray-500 space-y-4 sm:space-y-0 text-center">
        <p>&copy; 2024 Food Blogger & Influencer</p>
        <p>Powered by Food Blogger & Influencer</p>
      </div>
    </footer>
  );
}

export default Footer;
