import { useLoaderData } from "react-router-dom";
import CraftSection from "../components/CraftSection";

const Home = () => {

    const crafts = useLoaderData([])
    
    return (
        <div>
            <CraftSection crafts={crafts}/>
        </div>
    );
};

export default Home;