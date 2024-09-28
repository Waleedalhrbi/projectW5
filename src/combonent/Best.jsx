import React from 'react';

function Best({ imageSrc, restaurantTitle, restaurantDescription }) {
  return (
    <div className="card rounded-none">
      <figure>
        <img
          src={imageSrc}
          alt={restaurantTitle}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h3 className="card-title text-xl font-bold">{restaurantTitle}</h3>
        <p className="text-gray-600">{restaurantDescription}</p>
        <a
          href="#"
          className="border-none text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:text-black rounded-none transition-colors duration-300 mt-6 inline-block w-32"
        >
          READ MORE →
        </a>
      </div>
    </div>
  );
}

export default Best;
