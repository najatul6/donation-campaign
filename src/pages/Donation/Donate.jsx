import { Link } from "react-router-dom";

const Donate = ({ donate }) => {
    const { id, img, title, category, price, card_bg_color, text_color, category_bg_color } = donate;

    return (
        <div>
            <div style={{ backgroundColor: card_bg_color }} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h4 style={{ color: text_color, backgroundColor: category_bg_color }} className="rounded-lg py-2 px-2 mb-2 inline-block">
                        {category}
                    </h4>
                    <h6 className="text-2xl font-semibold mb-2">
                        {title}
                    </h6>
                    <p style={{ color: text_color }} className="font-semibold text-xl">
                        $ {price}.00
                    </p>

                    <Link to={`/card/${id}`}>
                        <button style={{ backgroundColor: text_color }} className="py-2 px-4 text-white font-semibold text-lg mt-5 rounded-xl">View Details</button>
                    </Link>
                </div>
            </div>
           
        </div>
    );
};

export default Donate;