import React from 'react';
export function Hero() {
  return <section className="relative bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Navigating the World Together
            </h1>
            <p className="text-xl mb-6">
              An intelligent navigation assistant for visually impaired
              individuals, providing real-time descriptive audio feedback about
              environmental obstacles.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#download" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Download Now
              </a>
              <a href="#learn-more" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Person using a smartphone with navigation assistance" className="rounded-lg shadow-2xl max-w-full h-auto" width="500" height="375" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>;
}