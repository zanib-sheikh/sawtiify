import React, { useState, useEffect } from 'react';
import logoo from '../assets/logoo.png';


function FooterComponent() {

  const [isFormVisible, setFormVisible] = useState(false); // State to control the form visibility
  useEffect(() => {
    if (isFormVisible) {
      // Dynamically load the HubSpot form script when the form is to be shown
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = () => {
        window.hbspt.forms.create({
          portalId: "48271536",
          formId: "806a65fc-77c2-48e8-b19a-901938ff149d",
          target: "#hubspot-form-container", // The container for the form
        });
      };
      script.onerror = () => {
        console.error("Error loading HubSpot form script");
      };
      document.body.appendChild(script);
    }

    // Cleanup the script if the form is closed
    return () => {
      const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isFormVisible]);
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-black via-45% to-purple-950 text-white mt-0 py-10 px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Main Section*/}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          
          {/* Left Section*/}
          <div className="flex flex-col sm:items-start sm:text-left lg:items-start lg:text-left">
  <div className="flex items-center relative">
    <img
      src={logoo} 
      alt="Logo"
      className="mr-0 w-10 h-10" 
    />
    <h1 className="text-3xl font-bold text-white">SAWTIFY</h1>
  </div>


            {/* Icons */}
            <div className="flex space-x-3 mt-4">
          
              <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-400 p-3 rounded-full transform transition-transform duration-200 hover:scale-110">
                <img
                  src="https://img.icons8.com/?size=100&id=38158&format=png&color=FFFFFF"
                  alt="Gmail"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>

    
              <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-300 p-3 rounded-full transform transition-transform duration-200 hover:scale-110">
                <img
                  src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                  alt="LinkedIn"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 items-center">
      
            <div>
              <h3 className="py-2 text-1xl text-gray-200 font-medium">Customer Support</h3>
              <ul className="space-y-0 text-gray-300 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            </div>

          {/* Right Section*/}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-balance pl-1 md:pl-4 font-space-grotesk font-semibold">Need Any Help?</h3>
            <button className=" pr-4 mt-2 font-semibold shadow-sm shadow-gray-400/50 bg-gradient-to-tr from-purple-700 via-pink-500 to-pink-600 text-white py-2 px-4 rounded-full transform transition-transform duration-200 hover:scale-105"
        onClick={() => setFormVisible(true)} 
      >
              Contact Sawtify
            </button>
          </div>
        </div>
         {/* Modal for Request Demo Form - For Both Mobile & Desktop */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-lg w-full h-auto overflow-y-auto max-h-[80vh] relative transition-all duration-500 ease-in-out opacity-100 scale-100
         mx-4 sm:mx-auto">
            {/* Exit Button */}
            <button
              onClick={() => setFormVisible(false)} // Close the form on click
              className="absolute top-4 right-4 text-gray-600 text-4xl font-bold hover:text-purple-800 transition-colors"
            >
              &times;
            </button>
            {/* HubSpot Form Container */}
            <div id="hubspot-form-container" className="w-full h-auto"></div>
          </div>
        </div>
      )}

        {/* Bottom Border */}
        <div className="border-t py-1 border-gray-400 w-full mt-8"></div>

      
        <div className="mt-6 text-center font-space-grotesk text-sm">
          Copyright © 2024 Sawtify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
