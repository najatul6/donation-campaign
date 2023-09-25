import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id, img, title, category, card_bg_color, text_color, category_bg_color } = card || {}

    return (
        <div>
            <Link to={`/card/${id}`}>
                <div style={{ backgroundColor: card_bg_color }} className={`rounded-xl cursor-pointer shadow-md`}>
                    <div className="shadow-none">
                        <img className="w-full rounded-t-xl"
                            src={img}
                            alt={`${title}`}
                        />
                    </div>
                    <div className="p-6">
                        <h4 style={{ color: text_color, backgroundColor: category_bg_color }} className={`font-medium inline-block py-1 px-2 rounded-lg`}>
                            {category}
                        </h4>
                        <p style={{ color: text_color }} className={`mt-3 text-xl font-semibold`}>
                            {title}
                        </p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;