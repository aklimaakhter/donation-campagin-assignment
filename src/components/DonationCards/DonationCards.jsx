/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationCards = ({ donation }) => {
    const { id, image, title, category, price, buttonBgColor, categoryBgColor, cardBgColor, textColor } = donation || {};

    const cardStyle = {
        backgroundColor: cardBgColor,
        color: textColor

    };

    const categoryStyle = {
        backgroundColor: categoryBgColor,
    };
    const buttonStyle = {
        backgroundColor: buttonBgColor

    };
    return (
        <div >
            <div className="card card-side shadow-xl" style={cardStyle}>
                <figure><img className="h-[300px] w-[260px]" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <button><p className="py-2 px-4 w-2/4 rounded flex  justify-center items-center" style={categoryStyle} >{category}</p></button>
                    <h2 className="card-title text-2xl text-black">{title}</h2>
                    <p className="font-bold">{price}</p>
                    <Link to={`/cards/${id}`}>
                        <div className="card-actions">
                            <button className="btn text-white" style={buttonStyle}>View Detail</button>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default DonationCards;