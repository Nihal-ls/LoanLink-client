import React from 'react';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import AvailableLoans from '../../Components/Home/AvailableLoans';
import HowItWorksSection from '../../Components/Home/HowItWorksSection';
import CustomerFeedbackCarousel from '../../Components/Home/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AvailableLoans/>
            <HowItWorksSection/>
            <CustomerFeedbackCarousel/>
        </div>
    );
};

export default Home;