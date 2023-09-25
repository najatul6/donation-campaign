import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;