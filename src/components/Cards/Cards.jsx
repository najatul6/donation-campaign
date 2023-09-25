import Card from "../Card/Card";

const Cards = ({cards}) => {
    
    return (
        <div className="pt-10">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;