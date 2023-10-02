import DonationCard from "./DonationCard";

const DonationCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 md:py-32">
      {cards.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;
