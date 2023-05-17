import React from "react";
import Headers from "../Components/Headers/Headers";

const LandingPage = () => {
  return (
    <div>
      <Headers></Headers>
      <div>
        <div class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
          <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <span class="mb-3 text-white bg-blue-900 badge">Pre Beta</span>
            <h1 class="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
              Great customer relationships start here.
            </h1>
            <form class="w-full mb-6">
              <label class="sr-only">Your Email</label>
              <div class="block lg:hidden">
                <input
                  class="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  class="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
              <div class="hidden w-full form-append lg:flex">
                <input
                  class="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  class="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p class="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
              Get the #1 Business Messenger and start delivering personalized
              experiences at every stage of the customer journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              alt="3 women looking at a laptop"
              class="object-cover w-full h-64 bg-gray-100 md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
