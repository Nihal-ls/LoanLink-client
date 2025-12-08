import React from 'react';
// Import specific icons from react-icons/fa6 (Font Awesome 6)
import { FaRegFileLines, FaMagnifyingGlassDollar, FaMoneyBillTransfer } from 'react-icons/fa6';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FaRegFileLines, 
      title: 'Step 1: Tell Us About Yourself',
      description: 'Fill out our short, secure online form with basic information and your desired loan details. Our smart system instantly analyzes your profile to find the best lender matches.',
      details: 'Time to complete: Under 5 minutes.',
    },
    {
      icon: FaMagnifyingGlassDollar, 
      title: 'Step 2: Review Your Personalized Offers',
      description: 'Receive a list of pre-qualified loan options from multiple lenders in one place. Compare rates, terms, and monthly payments. Viewing offers is **no-obligation** and uses a soft credit pull.',
      details: 'No Obligation | Soft Credit Check',
    },
    {
      icon: FaMoneyBillTransfer,
      title: 'Step 3: Finalize and Get Funded!',
      description: 'Click on your chosen offer and finalize the application directly with the lender. Approved funds are typically disbursed directly to your bank account within **1-2 business days**.',
      details: 'Funds disbursed in 1-2 business days',
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-transparent sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Your Path to Funding</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"> 
            How It Works: Securing Your Loan in 3 Simple Steps
          </p>
          <p className="mt-4 max-w-2xl text-xl  lg:mx-auto">
            Our platform connects you directly with the best lenders tailored to your financial needs. Getting started is fast, free, and secure.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative p-6 bg-transparent rounded-lg shadow-xl border border-gray-100"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-50 text-orange-400 shadow-md">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  
                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base ">
                    {step.description}
                  </p>
                  
                  <div className="mt-4 p-3 bg-orange-100 rounded-md">
                      <p className="text-sm font-medium text-orange-600">{step.details}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute hidden md:block top-1/2 right-[-1.5rem] w-8 h-1 bg-orange-300 transform -translate-y-1/2">
                      <svg className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;