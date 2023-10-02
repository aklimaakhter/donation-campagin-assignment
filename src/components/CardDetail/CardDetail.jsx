/* eslint-disable react/prop-types */

import swal from "sweetalert";

const CardDetail = ({ card }) => {
    const {id, image, title, description, price, buttonBgColor } = card || {};
    const buttonStyle = {
        backgroundColor: buttonBgColor

    };

    const handleDonation = () => {

        const addedDonationCard = [];

        const donationCard = JSON.parse(localStorage.getItem('donate'));

        if (!donationCard) {
            addedDonationCard.push(card);
            localStorage.setItem('donate', JSON.stringify(addedDonationCard));
            swal("Good job!", "You have successfully added", "success");
        }
        else {
            const isExits = donationCard.find(card => card.id === id);

            if (!isExits) {
                addedDonationCard.push(...donationCard, card);
                localStorage.setItem('donate', JSON.stringify(addedDonationCard));
                swal("Good job!", "You have successfully added", "success");
            }
            else{
                swal("Error!", "No duplicate!", "error");
            }

        }
    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl ">
                <div className="">
                    <figure><img src={image} alt="card" className=" w-full relative" /></figure>
                    <div className="hero-overlay h-[25vh] bg-opacity-70 absolute bottom-32"></div>
                </div>


                <div className="card-actions absolute z-1 bottom-44 left-20 rounded" style={buttonStyle} >
                    <button onClick={handleDonation} className="text-xl text-white px-6 py-4 rounded">Donate  {price}</button>
                </div>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;