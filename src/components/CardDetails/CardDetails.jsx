import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

const CardDetails = () => {

    const [card, setCard] = useState({});

    const { id } = useParams();
    
    const cards = useLoaderData();
    

    useEffect(() => {
        const findCard = cards?.find(card => card.id === id);
        setCard(findCard)
    }, [id, cards])
    

    return (
        <div className="max-w-[1200px] mx-auto flex justify-center items-center">
            <CardDetail card={card}></CardDetail>
        </div>
    );
};

export default CardDetails;