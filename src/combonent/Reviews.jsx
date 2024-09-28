import React from 'react';

function Reviews({ title, description, imgSrc }) {
  return (
    <div className="card rounded-none">
      <figure>
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
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

export default Reviews;
