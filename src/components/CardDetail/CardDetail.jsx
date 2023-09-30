
const CardDetail = ({ card }) => {
    const { image, title, description, price, buttonBgColor } = card || {};
    const buttonStyle = {
        backgroundColor: buttonBgColor

    };
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl ">
                    <div className="">
                        <figure><img src={image} alt="card" className=" w-full relative" /></figure>
                        <div className="hero-overlay h-[30vh] bg-opacity-70 absolute bottom-32"></div>
                    </div>


                    <div className="card-actions absolute z-1 bottom-44 left-20 rounded" style={buttonStyle} >
                        <button className="text-xl text-white px-6 py-4 rounded">Donate  {price}</button>
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