import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
// import DonationCards from '../DonationCards/DonationCards';

const Home = () => {
  const cards = useLoaderData();
  console.log(cards);
  return (
    <div>
      <Helmet>
        <title>Donation Campagin | Home</title>
      </Helmet>
      <Banner cards={cards}></Banner>
    </div>
  );
};

export default Home;
