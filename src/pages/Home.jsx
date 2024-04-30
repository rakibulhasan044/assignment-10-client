import { useLoaderData } from "react-router-dom";
import CraftSection from "../components/CraftSection";
import Banner from "../components/Banner";

const Home = () => {

    const crafts = useLoaderData([])
    
    return (
        <div>
            <Banner/>
            <CraftSection crafts={crafts}/>
        </div>
    );
};

export default Home;