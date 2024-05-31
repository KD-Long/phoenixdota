import React from 'react';

const Background = () => {
  return (
    <div className="relative">
      <div className="h-1/2">
        <img
          src="./your-background-image.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-transparent to-black"></div>
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Background;