import React from 'react';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import AvailableLoans from '../../Components/Home/AvailableLoans';
import HowItWorksSection from '../../Components/Home/HowItWorksSection';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AvailableLoans/>
            <HowItWorksSection/>
        </div>
    );
};

export default Home;