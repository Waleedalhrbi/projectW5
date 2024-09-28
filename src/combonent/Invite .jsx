import React from 'react';

function Invite() {
  return (
    <div className="bg-[#C97C6A] text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        Invite me to your restaurant.
      </h1>
      <h2 className="text-3xl font-bold mb-6">
        Get exposure of millions food lovers.
      </h2>
      <p className="mb-8 max-w-md mx-auto text-gray-100">
        Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer
        amet eget blandit phasellus est natoque blandit facilisi eleifend.
      </p>
      <button
              type="submit"
              className="border border-[rgb(255,255,255)] bg-white text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-32"
            >
               LET'S TALK
            </button>
    </div>
  );
}

export default Invite;
