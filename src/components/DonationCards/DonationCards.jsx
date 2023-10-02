/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationCards = ({ donation }) => {
    const {id, image, title, category, price, buttonBgColor, categoryBgColor, cardBgColor, textColor } = donation || {};

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
            <Link to={`/cards/${id}`}>
                <div className="card card-side shadow-xl" style={cardStyle}>
                    <figure><img src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <button><p className="py-2 px-4 w-2/4 rounded flex  justify-center items-center" style={categoryStyle} >{category}</p></button>
                        <h2 className="card-title text-2xl text-black">{title}</h2>
                        <p className="font-bold">{price}</p>
                        <div className="card-actions">
                            <button className="btn text-white" style={buttonStyle}>View Detail</button>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default DonationCards;