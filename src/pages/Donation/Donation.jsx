import { useEffect, useState } from "react";
import DonationCards from "../../components/DonationCards/DonationCards";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        const donationCard = JSON.parse(localStorage.getItem('donate'));
        if (donationCard) {
            setDonations(donationCard);
        }

        else {
            setNoFound('Not Data Found')
        }

    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setDonations([]);
        setNoFound('No Data Found');
    }


    return (
        <div>
            {noFound ? <p className="text-xl flex justify-center items-center h-[80vh]">{noFound}</p>
                : <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            isShow ? donations.map(donation => <DonationCards key={donation.id} donation={donation}></DonationCards>)

                                : donations.slice(0, 4).map(donation => <DonationCards key={donation.id} donation={donation}></DonationCards>)
                        }
                    </div>
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <div className="">
                            {
                                isShow ? " " : <button onClick={() => setIsShow(!isShow)} className="btn bg-green-600 text-white hover:bg-green-700">See All</button>
                            }
                        </div>
                        <div className="">
                            {
                                donations.length > 0 && <button onClick={handleRemove} className="btn bg-green-600 text-white hover:bg-green-700">Remove All</button>
                            }
                        </div>
                    </div>
                </div>}

        </div>
    );
};

export default Donation;