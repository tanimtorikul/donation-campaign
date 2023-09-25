import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import DonationCards from '../DonationCards/DonationCards';

const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <Banner></Banner>
            <DonationCards cards={cards}></DonationCards>

        </div>
    );
};

export default Home;