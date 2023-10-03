import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import bannerImage from "../../../assets/images/background-image.jpg"
import CardDetail from "../../CardDetail/CardDetail";

const Banner = () => {
    const [text, setText] = useState("");
    const onChange = ({ target }) => setText(target.value);

    const handleCategory = (e) => {
        e.preventDefault();
        const category ='';
        if(category ==='Food'){
            <CardDetail></CardDetail>
        }
    }
    return (
        <div className=''>
            <div className="hero " >
                <div className="relative w-full ">
                    <img className="w-full h-[60vh]" src={bannerImage} alt="" />
                </div>
                <div className="hero-overlay h-[60vh] bg-opacity-80 absolute "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="relative flex w-full max-w-[600px] mx-auto">
                            <Input
                                type="text"
                                placeholder="Search here"
                                value={text}
                                onChange={onChange}
                                className="py-2 px-4 rounded"

                            />
                            <Button

                                onClick={handleCategory}
                                onChange={setText}
                                color={text ? "gray" : "blue-gray"}
                                className=" text-gr absolute right-1 top-1 rounded"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;