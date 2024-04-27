import { useLoaderData } from "react-router-dom";
import CraftSection from "../components/CraftSection";

const Home = () => {

    const crafts = useLoaderData([])
    
    return (
        <div>
            <h3>home: {crafts.length}</h3>
            <CraftSection crafts={crafts}/>
        </div>
    );
};

export default Home;