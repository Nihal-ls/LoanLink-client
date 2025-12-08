import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required base styles

// Importing an icon for the quote marks and stars
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';

const CustomerFeedbackCarousel = () => {
  // Static data for the carousel slides
  const feedbackData = [
    {
      id: 1,
      quote: "The process was unbelievably fast! I had been searching for a loan for weeks, but using this link platform, I found the perfect offer and was approved within 24 hours. Highly recommend the soft credit check feature!",
      name: "Sarah M.",
      location: "California",
      rating: 5,
    },
    {
      id: 2,
      quote: "I appreciated the transparency and the variety of options presented. The side-by-side comparison made choosing a lender straightforward, and the funding timeline was exactly as promised.",
      name: "John D.",
      location: "Texas",
      rating: 4,
    },
    {
      id: 3,
      quote: "Excellent service! The form was simple, and the immediate pre-qualification saved me so much time. It's truly the easiest way to navigate the loan market.",
      name: "Lisa K.",
      location: "Florida",
      rating: 5,
    },
  ];
  
  // Helper function to render star ratings
  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <FaStar 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-orange-400' : 'text-gray-300'}`} 
        aria-hidden="true" 
      />
    ));
  };

  return (
    <section id="feedback" className="py-16 bg-transparent sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Trust & Success Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            What Our Customers Say
          </p>
        </div>

        {/* --- Carousel Integration --- */}
        <Carousel
          showArrows={true} // Show next/prev arrows
          showStatus={false} // Hide the "1 of 3" status text
          showIndicators={true} // Show the navigation dots
          infiniteLoop={true} // Loop back to the first slide
          autoPlay={true} // Auto-slide feature
          interval={2000} // Slide every 5 seconds
          // Customize the navigation dots styling using a render prop
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <li
                className={`inline-block mx-1 h-2 w-2 rounded-full transition duration-300 ${
                  isSelected ? 'bg-orange-400 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {feedbackData.map((feedback) => (
            // Each child of the Carousel component becomes a slide
            <div 
              key={feedback.id} 
              className="p-8 md:p-12 border border-gray-200 rounded-lg shadow-xl bg-transparent text-left"
            >
              <div className="flex justify-start">
                {/* Quote Icon */}
                <FaQuoteLeft className="h-8 w-8 text-orange-400 opacity-70 mb-4" />
              </div>

              {/* Quote Text */}
              <p className="text-xl italic  leading-relaxed mb-6">
                "{feedback.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(feedback.rating)}
              </div>

              {/* Customer Info */}
              <div className="mt-4">
                <p className="text-lg font-bold ">{feedback.name}</p>
                <p className="text-sm text-orange-400 font-medium">{feedback.location}</p>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default CustomerFeedbackCarousel;