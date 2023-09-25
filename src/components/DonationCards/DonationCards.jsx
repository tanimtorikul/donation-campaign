import DonationCard from "./DonationCard";


const DonationCards = ({cards}) => {

    return (
        <div className="grid grid-cols-4 gap-6 py-32">
            {
                cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;