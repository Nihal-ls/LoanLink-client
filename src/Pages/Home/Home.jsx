import React from 'react';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import AvailableLoans from '../../Components/Home/AvailableLoans';
import HowItWorksSection from '../../Components/Home/HowItWorksSection';
import CustomerFeedbackCarousel from '../../Components/Home/CustomerFeedback';
import FAQ from '../../Components/Home/FAQ';
import Highlights from '../../Components/Home/Highlites';
import Statistics from '../../Components/Home/Statistic';
import Blogs from '../../Components/Home/Blogs';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AvailableLoans />
            <HowItWorksSection />
            <Highlights />
            <CustomerFeedbackCarousel />
            <Statistics /> 
             <Blogs />
            <FAQ />
          
        </div>
    );
};

export default Home;