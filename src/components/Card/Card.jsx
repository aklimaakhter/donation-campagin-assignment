/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { image, id, title, category, categoryBgColor, cardBgColor, textColor } = card || {};

    const cardStyle = {
        backgroundColor: cardBgColor,
        color: textColor,
    };
    const categoryStyle = {
        backgroundColor: categoryBgColor,
    };
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className='card card-compact bg-base-100 shadow-xl' style={cardStyle} >
                    <figure><img src={image} alt="Image" /></figure>
                    <div className="card-body">

                        <button><p className="py-2 px-4 w-1/3 rounded flex  justify-center items-center" style={categoryStyle} >{category}</p></button>
                        <h2 className="card-title">{title}</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;