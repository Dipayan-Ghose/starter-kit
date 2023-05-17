import button from 'kutty/src/button';
import React from 'react';
import "./Headers.css";

const Headers = () => {
    return (
        <header className="z-30 w-full px-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-400 sm:px-4">
  <div className="flex items-center justify-between mx-auto max-w-7xl">
    <a href="/" title="The Starter Kit" className="flex items-center">
      <span className="fs-5 font-bold text-xl ">Starter KiT</span>
    </a>
    <div className="flex items-center space-x-1">
      <div className="hidden space-x-1 md:inline-flex">
        <a href="#" className="btn btn-sm btn-link">Features</a>
        <a href="#" className="btn btn-sm btn-link">Pricing</a>
        <a href="#" className="btn btn-sm btn-link">Blog</a>
        <a href="#" className="btn btn-sm btn-link">Company</a>
        <a href="#" className="btn btn-sm btn-link">Sign in</a>
      </div>
      <a href="#" className="btn btn-sm btn-primary">Connect</a>
      <div className="inline-flex md:hidden" x-data="{ open: false }">
        <button className="flex-none px-2 btn btn-link btn-sm" >    
          <span className="sr-only">Connect</span>
        </button>
        <div className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow" x-cloak>
          <button className="self-end flex-none px-2 ml-2 btn btn-link btn-icon" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close Menu</span>
          </button>
          <a href="#" className="w-full btn btn-link">Features</a>
          <a href="#" className="w-full btn btn-link">Pricing</a>
          <a href="#" className="w-full btn btn-link">Blog</a>
          <a href="#" className="w-full btn btn-link">Company</a>
          <a href="#" className="w-full btn btn-link">Sign in</a>
        </div>
      </div>
    </div>
  </div>
</header>



    );
};

export default Headers;