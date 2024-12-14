import React, { useState, useEffect } from "react";
import logoo from '../assets/logoo.png';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false); // State to control the form visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <nav className="w-full fixed top-0 z-20 bg-gradient-to-br from-gray-700 to-gray-900 px-4 sm:px-6 md:px-10 py-2 flex items-center justify-between shadow-md font-space-grotesk">
   
      <div className="flex items-center space-x-0 mr-0 relative">
 
    <img
      src={logoo} 
      alt="Logo"
      className="mr-0 w-10 h-10" 
    />

    <h1 className="text-2xl font-bold text-white">SAWTIFY</h1>
  </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white space-x-8">
        <li className="hover:text-gray-300 cursor-pointer">Product</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">How it works</li>
        <li className="hover:text-gray-300 cursor-pointer">Use Cases</li>
      </ul>

      {/* Request a Demo Button - Desktop */}
      <button
        className="hidden md:block bg-gradient-to-r from-purple-600 to-orange-400 px-4 py-2 rounded-full text-white transition-transform hover:scale-105"
        onClick={() => setFormVisible(true)} 
      >
        Request A Demo ➡
      </button>

      {/* Mobile View - Request a Demo Button */}
      <div className="md:hidden flex items-center">
      <button
          className="mr-2 bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-sm rounded-full text-white relative overflow-hidden group transition duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={() => setFormVisible(true)} 
        >
          <span className="absolute inset-0 bg-gradient-to-l from-pink-700 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-100"></span>
          <span className="relative z-10">Request Demo</span>
        </button>
       

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-white text-sm rounded focus:outline-none from-purple-400 to-pink-500 bg-gradient-to-tr"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg flex flex-col items-center space-y-4 py-4 mt-2">
          <ul className="flex flex-col items-center space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Product</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">How it works</li>
            <li className="hover:text-gray-300 cursor-pointer">Use Cases</li>
           
          </ul>
        </div>
      )}


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
    </nav>
  );
}

export default Navbar;
