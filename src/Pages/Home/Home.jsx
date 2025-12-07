import React from 'react';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import AvailableLoans from '../../Components/Home/AvailableLoans';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AvailableLoans/>
        </div>
    );
};

export default Home;