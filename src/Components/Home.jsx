import React from 'react';
import welcomeImage from 'C:\\Users\\Janan\\OneDrive\\Desktop\\cloth donor\\src\\Components\\assests\\Projectx.png'; // Adjust the path as needed

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <img src={welcomeImage} alt="Welcome" className="mb-8 w-full max-w-md h-auto rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Project X
      </h1>
      <p className="text-xl text-gray-600 max-w-md">
        Your Gateway to Unlimited Web Data.
      </p>
    </div>
  );
}

export default Home;
