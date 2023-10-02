/* eslint-disable react/prop-types */
import Card from "../Card/Card";


const Cards = ({cards}) => {
    // 
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;