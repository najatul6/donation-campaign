import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const DonationDetail = () => {
    const [donationCard, setDonationCard] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);
    const donationCards = useLoaderData();
    useEffect(() => {
        const findDonationCard = donationCards.find(donationCard => donationCard.id === idInt);
        setDonationCard(findDonationCard)
    }, [id, donationCards])

    return (
        <div>
            <DonationDetails donationCard={donationCard}></DonationDetails>
        </div>
    );
};

export default DonationDetail;