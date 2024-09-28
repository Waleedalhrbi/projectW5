import React from 'react';

function Videos() {
  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Videos</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start">
          <div className="relative">
            <img 
              src="https://img.freepik.com/premium-photo/fruit-vegetables-are-low-calories-nutrient-dense_957032-417.jpg" 
              alt="Main video thumbnail" 
              className="w-full h-auto" 
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="btn btn-circle btn-lg bg-white text-black shadow-xl">▶</span>
            </button>
          </div>
          <h2 className="text-2xl font-semibold mt-6 text-center lg:text-left">
            Dianna Adams visits the Sooto Restaurant | Uncovered Miami
          </h2>
          <p className="mt-2 text-gray-500 text-center lg:text-left">
            A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget...
          </p>
        </div>

      
        <div className="flex flex-col items-center lg:items-start">
          <ul className="space-y-4">
            {[
              {
                title: "Family Dinner - Latea pulvinar scelerisque",
                thumbnail: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg",
              },
              {
                title: "Lobortis turpis turpis vehicula laoreet egestas enim ornare",
                thumbnail: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg",
              },
              {
                title: "Tempus quis ac viverra condimentum sit nulla viverra",
                thumbnail: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg",
              },
              {
                title: "Quis mauris egestas enim urna dictum",
                thumbnail: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg",
              }
            ].map((video, idx) => (
              <li key={idx} className="flex space-x-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-24 h-24 object-cover" 
                />
                <div>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-gray-500">Enim imperdiet fames nisl, purus et diam aliquet</p>
                </div>
              </li>
            ))}
          </ul>

          <button
              type="submit"
              className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-60 mt-4"
            >
              VIEW ALL VIDEOS
            </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
