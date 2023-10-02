import { useEffect, useState } from "react";
import DonationCards from "../../components/DonationCards/DonationCards";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState('');

    useEffect(() => {

        const donationCard = JSON.parse(localStorage.getItem('donate'));
        if (donationCard) {
            setDonations(donationCard);
        }

        else {
            setNoFound('Not Data Found')
        }

    }, []);


    return (
        <div>
            {noFound ? <p className="text-xl flex justify-center items-center h-[80vh]">{noFound}</p>
                : <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            donations.map(donation=><DonationCards key={donation.id} donation={donation}></DonationCards>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Donation;