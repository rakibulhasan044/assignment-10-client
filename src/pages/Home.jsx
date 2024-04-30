import { useLoaderData } from "react-router-dom";
import CraftSection from "../components/CraftSection";
import Banner from "../components/Banner";
import OrginalCollection from "../components/OrginalCollection";
import OurPartner from "../components/OurPartner";

const Home = () => {

    const crafts = useLoaderData([])
    
    return (
        <div className="mb-10">
            <Banner/>
            <CraftSection crafts={crafts}/>
            <OrginalCollection/>
            <OurPartner/>
        </div>
    );
};

export default Home;