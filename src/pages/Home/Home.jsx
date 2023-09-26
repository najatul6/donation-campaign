import { useLoaderData, useOutletContext } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    let cards = useLoaderData();
    const searchText = useOutletContext()
    if(searchText.includes('health') || searchText.includes('Health')){
        cards = cards.filter(card => card.category === 'Health')
    }
    else if(searchText.includes('education') || searchText.includes('Education')){
        cards = cards.filter(card => card.category === 'Education')
    }
    else if(searchText.includes('food') || searchText.includes('Food')){
        cards = cards.filter(card => card.category === 'Food')
    }
    else if(searchText.includes('clothing') || searchText.includes('Clothing')){
        cards = cards.filter(card => card.category === 'Clothing')
    }
    return (
        <div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;