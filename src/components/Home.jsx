import React from "react";
import '../App.css';
import MyImage from '../assets/my-image.png';
import Play from '../assets/play.png';
import Call from '../assets/call.png';
import Message from '../assets/conversation.png';
import Calender from '../assets/calendar.png';
import bill from '../assets/bill.png';
import tick from '../assets/check-mark.png';
import customer from '../assets/customer.png';
import event from '../assets/event.png';
import mic from '../assets/mic.png';
import revenue from '../assets/revenue.png';
import sparkle from '../assets/sparkle.png';
import analytics from '../assets/analytics.png';
import increase from '../assets/increase.png';
import service from '../assets/service.png';
import ai from '../assets/ai.png';
import shuttle from '../assets/shuttle.png';
import voicenote from '../assets/ChloeJessica Call.wav';
import arrowbutton from '../assets/arrowbutton.png';
import { useEffect, useState, } from 'react';

const Home = () => {
 // State to control the form visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false); 
  useEffect(() => {
    if (isFormVisible) {
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
  

   // audio play/pause state
  const [isPlaying, setIsPlaying] = useState(false); 
  const [selectedItem, setSelectedItem] = useState('Call Routing'); 
  const handlePlayPause = () => {
    const audio = document.getElementById('audio-player');
    if (audio.paused) {
      audio.play();
      setIsPlaying(true); 
    } else {
      audio.pause();
      setIsPlaying(false); 
    }
  };

  // Dynamic content 
  const content = {
    'Call Routing': {
      title: 'Call Routing',
      description:
        'Efficiently direct calls to the right person or department, improving response times and customer satisfaction.',
      stats:
        'Reduces caller wait time by 30-45%, leading to quicker resolutions and happier clients.',
    },
    'Answering FAQs': {
      title: 'Answering FAQs',
      description:
        'Quickly answer frequently asked questions to save time and improve customer experience.',
      stats: 'Improves efficiency by 20-40%, reducing repetitive workload.',
    },
    'Bookings & Reservations': {
      title: 'Bookings & Reservations',
      description:
        'Streamline the booking process to ensure a smooth and hassle-free experience for customers.',
      stats:
        'Increases booking efficiency by 25-50%, leading to better time management.',
    },
    'Billing Inquiries & Appointments': {
      title: 'Billing Inquiries & Appointments',
      description:
        'Easily handle billing-related queries and manage appointment scheduling with precision.',
      stats:
        'Reduces billing errors by 30% and improves customer satisfaction with timely appointments.',
    },
    'Client Intake Pre-Screening': {
      title: 'Client Intake Pre-Screening',
      description:
        'Simplify the client onboarding process by gathering essential details upfront.',
      stats:
        'Speeds up client onboarding by 15-30%, improving overall productivity.',
    },
    'Prequalifying New Clients': {
      title: 'Prequalifying New Clients',
      description:
        'Assess new client needs to ensure they are a good fit for your services.',
      stats:
        'Improves conversion rates by 10-25%, saving time for both clients and staff.',
    },
    'Service Scheduling': {
      title: 'Service Scheduling',
      description:
        'Manage service schedules efficiently, reducing overlaps and missed appointments.',
      stats:
        'Improves scheduling efficiency by 35%, enhancing operational workflows.',
    },
  };

  const icons = [Call, Message, Calender, bill, tick, customer, event];

  //items to be swiped
  const items = [
    'Call Routing',
    'Answering FAQs',
    'Bookings & Reservations',
    'Billing Inquiries & Appointments',
    'Client Intake Pre-Screening',
    'Prequalifying New Clients',
    'Service Scheduling',
  ];

  //previous and next item navigation
  const handleNextItem = () => {
    const currentIndex = items.indexOf(selectedItem);
    const nextIndex = (currentIndex + 1) % items.length; // loop back to the first item
    setSelectedItem(items[nextIndex]);
  };

  const handlePrevItem = () => {
    const currentIndex = items.indexOf(selectedItem);
    const prevIndex = (currentIndex - 1 + items.length) % items.length; // loop back to the last item
    setSelectedItem(items[prevIndex]);
  };


  return (
   
    <div className="min-h-screen backdrop-blur-10 bg-opacity-10 flex-grow font-space-grotesk bg-gradient-to-tr from-purple-900 via-black via-45% to-purple-950 text-white flex flex-col overflow-x-hidden px-4 sm:px-6 md:px-0 lg:px-14">


<div
  className="absolute inset-0 w-full h-full animate-grid"
  style={{
    background: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 120 120%27%3E%3Crect width=%27120%27 height=%27120%27 fill=%27none%27 stroke=%27%23ffffff40%27 stroke-width=%270.5%27/%3E%3C/svg%3E')",
    opacity: 0.3,
    zIndex: 0,
  }}
></div>
    
      <main className="text-center py-20 mt-2 md:mt-16  px-2">

  {/* AI CALLING AGENT */}       
      <div className="relative z-10 flex flex-col items-center  justify-center">
  <h1 className="text-4xl font-space-grotesk font-semibold md:text-5xl py-6 leading-tight animate-fadeIn">
    AI Calling Agent That Handles <br />
    Calls and Scheduling<span className="text-pink-600"> – So You</span><br />
    <span className="text-pink-600">Don't Have to.</span>
  </h1>
  <p className="mt-2 px-4 md:px-11 text-gray-200 animate-fadeIn">
  Save time, reduce costs, and focus on what matters most. Let Sawtify handle <br/>  client calls,schedule appointments, and send confirmations—seamlessly and professionally.
  </p>

  {/* Input and Button Section */}
  <div className="relative z-10 flex flex-col items-center justify-center animate-fadeIn delay-200">
    <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
      <div className="flex w-full md:w-auto border border-gray-200 rounded-full overflow-hidden">
        <select className="bg-transparent text-gray-400 px-2 py-2 w-full md:w-auto">
          <option>+1</option>
          <option>+43</option>
          <option>+44</option>
          <option>+92</option>
          <option>+93</option>
        </select>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="bg-transparent text-gray-400 px-4 py-2 w-15 md:w-60"
        />
      </div>

      <div className="relative w-full md:w-auto mt-4 md:mt-0">
        <button className="bg-gradient-to-tr from-purple-700 to-pink-500 px-4 py-2 rounded-full text-white w-full relative overflow-hidden group transition duration-300 ease-in-out hover:scale-105 active:scale-95">
          <span className="absolute inset-0 bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative z-10">Call Me ➡</span>
        </button>
      </div>
    </div>
  </div>
</div>

      

 {/* What is Sawtify */}
 <div className="w-full mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4 px-4 md:px-12">
          <div className="flex flex-col space-y-6 w-full md:w-[50%]">
         
          <div className="flex justify-start items-start mt-1 ml-0">
  <div
    className="bg-transparent rounded-full px-4 py-3 inline-flex items-center justify-start font-space-grotesk text-white"
    style={{
      border: 'transparent',
      borderImage: 'linear-gradient(to right, pink-800, #6B21A8, #FB923C) 1',
      boxShadow: 'inset 4px 4px 22px rgba(139, 92, 246, 0.5), inset 0px 6px 15px rgba(251, 146, 60, 0.5)',
    }}
  >
    <img
      src={sparkle} // Replace with your logo path
      alt="Sawtify"
      className="mr-1 w-8 h-8"
    />
    What is Sawtify?
  </div></div>
   <p className="text-gray-400 font-space-grotesk text-md pr-7 text-start">Sawtify is an intelligent assistant designed to streamline client interaction processes for businesses. </p>
          </div>

          {/* User Interaction Cards */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-[50%]">
            <div className="flex flex-col  space-y-4 leading-snug animate-pulse text-sm font-sans w-full md:w-[40%]">
              <div className="bg-transparent bg-opacity-40 shadow-sm shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full">
                How are you doing?
              </div>
              <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full">
                I'm talking from XEON Firm
              </div>
            </div>
            <div className="p-4 md:p-6 leading-snug animate-pulse rounded-full border border-purple-600 bg-transparent shadow-inner shadow-pink-500/60 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 overflow-hidden">
  <img src={mic} alt="mic" className="w-[90%] h-[90%] object-contain" />
</div>
 <div className="flex flex-col leading-snug animate-pulse space-y-4 text-sm font-sans w-full md:w-[30%]">
              <div className="bg-transparent bg-opacity-60 shadow-sm shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full">
                Have a nice day.
              </div>
              <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full">
                How can I help you?
              </div>
            </div>
          </div>
        </div>



 {/* Voice Agent Work Section */}
<div className="w-full flex relative flex-col items-center justify-center  mt-20 p-2">

<h1 className="text-4xl md:text-5xl animate-fadeIn font-space-grotesk font-bold mb-4 text-center">
  How Our <span className="text-pink-500">Voice Agent</span><br /> Works for You
</h1>
<p className="text-lg text-gray-400 animate-fadeIn text-center max-w-lg mb-16">
  Easily automate call handling and appointment scheduling, freeing up your team to focus on what matters.
</p>

{/* Desktop Only */}
<div className="hidden lg:block">
  <div className="relative grid grid-cols-1 lg:grid-cols-2 text-left leading-4 animate-slideIn gap-8 max-w-4xl mx-auto">
    {/* Column 1 - Top Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform -translate-y-8">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Get Started With Minimal Effort</h2>
      <p className="text-gray-300 text-sm">Our voice agent integrates smoothly with your existing setup, getting you up and running fast—no complex configurations.</p>
    </div>

    {/* Column 2 - Top Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-24">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Let Your Agent Handle The Basics</h2>
      <p className="text-gray-300 text-sm">Our solution answers calls, gathers essential information, and schedules appointments, reducing manual tasks.</p>
    </div>

    {/* Dashed Lines - Desktop Only */}
    <div className="absolute animate-pulse top-[calc(-1%+3rem)] w-[calc(24%+22px)] h-[20px] border-t border-dashed border-purple-500 transform translate-y-[-50%] right-[25%] lg:block hidden"></div>
    <div className="absolute animate-pulse top-[calc(4%+3rem)] h-[62px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(70%+3rem)] lg:block hidden"></div>

    {/* Column 1 - Bottom Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-12">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Monitor Key Interactions</h2>
      <p className="text-gray-300 text-sm">Stay informed with real-time insights and easily track appointments and call outcomes from a simple dashboard.</p>
    </div>

    {/* Column 2 - Bottom Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-44">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Ongoing Updates & Enhancements</h2>
      <p className="text-gray-300 text-sm">Our voice agent continuously adapts and improves to keep meeting your evolving needs.</p>
    </div>

    {/* Additional Dashed Lines */}
    <div className="absolute animate-pulse top-[calc(60%+6rem)] w-[calc(24%+22px)] h-[20px] border-t border-dashed border-purple-500 transform translate-y-[-50%]  lg:right-[25%] lg:block hidden"></div>
    <div className="absolute animate-pulse top-[calc(64%+6rem)] h-[58px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(70%+3rem)] lg:block hidden"></div>

    <div className="absolute animate-pulse top-[calc(18%+9rem)] w-[calc(26%+16px)] h-[18px] border-t border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(20%+2rem)] lg:block hidden"></div>
    <div className="absolute animate-pulse top-[calc(17%+11rem)] h-[68px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(20%+2rem)] lg:block hidden"></div>

  </div>
</div>

{/* Mobile & Tablet (sm and md) */}
<div className="block sm:block lg:hidden">
  <div className="relative grid grid-cols-1 text-left md:mb-2 gap-12 max-w-md mx-auto">
    {/* Column 1 - Top Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Get Started With Minimal Effort</h2>
      <p className="text-gray-300 text-sm">Our voice agent integrates smoothly with your existing setup, getting you up and running fast—no complex configurations.</p>

      {/* Dashed Line */}
      <div className="absolute left-1/2 animate-pulse transform -translate-x-1/2 bottom-[-48px] h-12 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 2 - Top Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Let Your Agent Handle The Basics</h2>
      <p className="text-gray-300 text-sm">Our solution answers calls, gathers essential information, and schedules appointments, reducing manual tasks.</p>

      {/* Dashed Line */}
      <div className="absolute animate-pulse left-1/2 transform -translate-x-1/2 bottom-[-48px] h-12 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 1 - Bottom Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Monitor Key Interactions</h2>
      <p className="text-gray-300 text-sm">Stay informed with real-time insights and easily track appointments and call outcomes from a simple dashboard.</p>

      {/* Dashed Line */}
      <div className="absolute left-1/2 animate-pulse transform -translate-x-1/2 bottom-[-48px] h-12 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 2 - Bottom Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-purple-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Ongoing Updates & Enhancements</h2>
      <p className="text-gray-300 text-sm">Our voice agent continuously adapts and improves to keep meeting your evolving needs.</p>

      {/* Dashed Line */}
      <div className="absolute left-1/2 animate-pulse transform -translate-x-1/2 bottom-[-48px] h-12 border-l-2 hidden md:mb-26 border-dashed border-purple-500"></div>
    </div>
  </div>
</div>
</div>



{/* Sawtify Simplifies Your Business Section */}
<div className="flex w-full p-2 flex-col md:flex-row px-4 sm:px-4 md:px-2 lg:px-4 mt-0 md:mt-36 justify-between py-12 space-y-8 md:space-y-0 md:space-x-12">
      
        <div className="max-w-lg text-left">
          <h1 className="text-2xl md:text-4xl font-space-grotesk font-semibold text-white mb-6">
            <span className="text-purple-800">Sawtify</span> Simplifies Your <br /> Business
          </h1>
          <p className="text-md text-white">
            Sawtify voice agents can handle a wide range of essential tasks, helping you serve clients faster, stay organized, and focus on growth. See how it can make a difference in your daily operations.
          </p>
        </div>
      </div>

      {/* Sawtify Features Section */}
      <div className="flex flex-col md:flex-row max-w-screen-xl px-1 sm:px-1 md:px-2 lg:px-4 mx-auto font-space-grotesk space-y-6 md:space-y-0 md:space-x-6 justify-center items-center">
        {/* Left Section: Items List */}
        <div className="w-full md:w-[42%] lg:w-[35%] overflow-x-auto flex md:grid md:grid-cols-1 gap-2 text-left text-white md:scrollbar-hide scrollbar-hide">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)} // Update the selected item
              className={`cursor-pointer bg-transparent border ${
                selectedItem === item ? 'border-pink-600 shadow-lg leading-tight animate-pulse shadow-pink-500/50' : 'border-pink-300'
              } p-3 rounded-3xl shadow-sm flex items-center space-x-3 w-full min-w-[250px] mx-auto md:w-full relative overflow-hidden group transition-all duration-200 ease-in-out hover:scale-102 active:scale-98`}
            >
              <span className={`absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-400">
                <img src={icons[index]} alt={`${item} icon`} className="w-5 h-5" />
              </div>
              <span className="text-sm relative z-10">{item}</span>
            </div>
          ))}
        </div>

        {/* Right Section: Dynamic Content */}
        <div className="w-full md:w-[40%] lg:w-[35%] mt-4 mx-auto bg-transparent border border-purple-400 text-left p-6 rounded-3xl shadow-md shadow-gray-500/50 flex flex-col justify-between">
          <h2 className="text-lg md:text-xl font-bold text-purple-200 mt-3 p-2">
            {content[selectedItem].title}
          </h2>
          <p className="text-white text-sm mb-2">{content[selectedItem].description}</p>
          <p className="text-pink-500 text-sm mb-2">{content[selectedItem].stats}</p>
          <div className="mt-3 p-3 bg-transparent border border-purple-300 rounded-3xl shadow-md shadow-gray-500/50 flex flex-col justify-between">
            <h3 className="text-sm md:text-lg font-semibold text-purple-200 mb-2">Demo</h3>
            <p className="text-white text-xs mb-2">{content[selectedItem].description}</p>
            <div className="relative w-full mt-6 mb-6">
              {/* Audio Player */}
              <audio id="audio-player" src={voicenote} className="hidden">
                Your browser does not support the audio element.
              </audio>
              <div className="flex justify-center items-center space-x-1">
                {[...Array(22)].map((_, index) => (
                  <div
                    key={index}
                    className="w-1 h-8 bg-white animate-wave"
                    style={{ animationDelay: `${index * 0.6}s` }}
                  ></div>
                ))}
              </div>
              <button
                className="absolute inset-0 flex items-center justify-center opacity-3 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-60 text-white border border-gray-400 rounded-full"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                onClick={handlePlayPause}
              >
                {isPlaying ? '❚❚' : '▶'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="relative mt-2 md:hidden">
          <div className="absolute left-12 pr-0 top-1/2 justify-end items-end transform -translate-y-1/2 flex flex-row space-x-2 space-y-4">
            <button
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex justify-center items-center shadow-md hover:scale-105 active:scale-95"
              onClick={handlePrevItem}
            >
              {"<"}
            </button>
            <button
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex justify-center items-center shadow-md hover:scale-105 active:scale-95"
              onClick={handleNextItem}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>



{/* why choose sawtify Section*/}
<div className="flex flex-col md:flex-row justify-between px-2 md:px-8 lg:px-8 py-10 space-y-8 md:space-y-0 md:space-x-12 mt-0 md:mt-8">

  <div className="max-w-lg md:w-[40%] lg:w-[35%] text-left mx-auto md:mx-0">
        <h1 className="text-3xl md:text-4xl py-6 font-space-grotesk font-semibold leading-tight">
          Why Choose <br />
          <span className="text-pink-600">Sawtify?</span>
        </h1>
        <p className="text-gray-400 mb-2">
          Sawtify isn’t just a call handler—it’s your all-in-one AI assistant. From pre-screening inquiries to scheduling, follow-ups, and personalized responses. Sawtify integrates seamlessly with your business systems, knowledge base, calendars, and email. It understands your business inside and out, providing clients with accurate, professional, and consistent service—saving your team time and boosting efficiency.
        </p>
         {/* Button to show the form */}
    <button
      className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 items-start py-2 rounded-full text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
      onClick={() => setFormVisible(true)} // Show the form when clicked
    >
      Request a Demo ➡
    </button>

    {/* Modal for Request Demo Form - For Both Mobile & Desktop */}
    {isFormVisible && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-form-title"
      >
        <div
          className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-lg w-full h-auto overflow-y-auto max-h-[80vh] relative transition-transform transform scale-100 mx-4 sm:mx-auto"
        >
          {/* Modal Title */}
          <h2
            id="demo-form-title"
            className="text-lg font-bold text-purple-800 mb-4"
          >
            Request a Demo
          </h2>

          {/* Exit Button */}
          <button
            onClick={() => setFormVisible(false)} // Close the form on click
            className="absolute top-4 right-4 text-gray-600 text-4xl font-bold hover:text-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Close form"
          >
            &times;
          </button>

          {/* HubSpot Form Container */}
          <div
            id="hubspot-form-container"
            className="w-full h-auto overflow-y-scroll max-h-[60vh]" // Make the form container scrollable
          ></div>
        </div>
      </div>
    )}
</div>
  {/* Icons Section */}
  <div className="w-full flex flex-col mt-20 items-start px-1 md:px-8 py-2 text-left md:w-2/3 space-y-4">
  <div className="flex items-center space-x-4">
  <div className="p-1 md:p-2  rounded-full bg-gradient-to-r from-purple-700 to-pink-600 flex items-center justify-center w-14 h-12 md:w-16 md:h-16">
      <img src={increase} alt="Increase" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div>
      <h2 className="text-2xl leading-tight">Increased Capacity</h2>
      <p className="text-gray-400">Handle more client inquiries effortlessly with AI.
      </p>
    </div>
  </div>
  <div className="border-t-2 border-violet-300 animate-pulse border-dashed w-full my-4 last:hidden"></div>

  <div className="flex items-center space-x-4">
  <div className="p-1 md:p-2  rounded-full bg-gradient-to-r from-purple-700 to-pink-600 flex items-center justify-center w-14 h-12 md:w-16 md:h-16">
      <img src={service} alt="Service" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div>
      <h2 className="text-2xl leading-tight">Improved Customer Service</h2>
      <p className="text-gray-400">Deliver consistent, 24/7 professional support.
      </p>
    </div>
  </div>
  <div className="border-t-2 border-pink-300 animate-pulse border-dashed w-full my-4 last:hidden"></div>

  <div className="flex items-center space-x-4">
  <div className="p-1 md:p-2  rounded-full bg-gradient-to-r from-purple-700 to-pink-600 flex items-center justify-center w-14 h-12 md:w-16 md:h-16">
      <img src={ai} alt="AI" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div>
      <h2 className="text-2xl leading-tight">Stay Ahead with AI</h2>
      <p className="text-gray-400">Leverage cutting-edge automation to boost efficiency.
      </p>
    </div>
  </div>
  <div className="border-t-2 border-violet-400 animate-pulse border-dashed w-full my-4"></div>

  <div className="flex items-center space-x-4">
  <div className="p-1 md:p-2  rounded-full bg-gradient-to-r from-purple-700 to-pink-600 flex items-center justify-center w-14 h-12 md:w-16 md:h-16">
      <img src={analytics} alt="Analytics" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex flex-col items-start">
      <h2 className="text-2xl leading-tight">Reduce Costs</h2>
      <p className="text-gray-400">Lower staffing expenses by automating routine tasks.
      </p>
    </div>
  </div>
  <div className="border-t-2 border-pink-300 animate-pulse border-dashed w-full my-4 last:hidden"></div>

  <div className="flex items-center space-x-4">
    <div className="p-1 md:p-2  rounded-full md:rounded-full bg-gradient-to-r from-purple-700 to-pink-600 flex items-center justify-center w-14 h-12 md:w-16 md:h-16">
      <img src={revenue} alt="Revenue" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex flex-col items-start">
      <h2 className="text-2xl text-white">Increase Revenue</h2>
      <p className="text-gray-400">Convert more inquiries into appointments with ease.</p>
    </div>
  </div>
  <div className="border-t-2 border-pink-300 animate-pulse border-dashed w-full my-4 "></div>
</div>
</div>



   {/* last Card */}
   <div className="w-full max-w-5xl mx-auto mt-10 md:mt-2 py-20 px-6 animate-fadeIn rounded-3xl bg-gradient-to-br from-purple-700 via-pink-400 to-orange-500 shadow-lg text-white">
   
   <h1 className="text-4xl md:text-5xl font-semibold font-space-grotesk mb-4 py-2 text-center">Ready to start <br /> your project?</h1>
  <p className="text-sm md:text-lg mb-6 text-center">Contact us today to schedule a free consultation or <br /> request a demo for our solutions.</p>
  <div className="flex flex-col items-center">
    {/* Button to show the form */}
    <button
      className="bg-white px-6 py-3 rounded-full text-pink-600 transition-transform hover:scale-105 active:scale-95 shadow-lg"
      onClick={() => setFormVisible(true)} // Show the form when clicked
    >
      Request a Demo ➡
    </button>

    {/* Modal for Request Demo Form - For Both Mobile & Desktop */}
    {isFormVisible && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-form-title"
      >
        <div
          className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-lg w-full h-auto overflow-y-auto max-h-[80vh] relative transition-transform transform scale-100 mx-4 sm:mx-auto"
        >
          {/* Modal Title */}
          <h2
            id="demo-form-title"
            className="text-lg font-bold text-gray-800 mb-4"
          >
            Request a Demo
          </h2>

          {/* Exit Button */}
          <button
            onClick={() => setFormVisible(false)} // Close the form on click
            className="absolute top-4 right-4 text-gray-600 text-4xl font-bold hover:text-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Close form"
          >
            &times;
          </button>

          {/* HubSpot Form Container */}
          <div
            id="hubspot-form-container"
            className="w-full h-auto overflow-y-scroll max-h-[60vh]" // Make the form container scrollable
          ></div>
        </div>
      </div>
    )}
  </div>
</div>


      </main>
    </div>
  );
}

export default Home;
