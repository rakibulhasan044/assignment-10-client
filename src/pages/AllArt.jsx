import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";

const AllArt = () => {
    const crafts = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-5 min-h-[calc(100vh-122px)] mt-5 md:mt-10">
            {
                crafts.map(craft => <CraftCard 
                key={craft._id}
                craft={craft}
                >  
                </CraftCard>)
            }
            </div>
        </div>
    );
};

export default AllArt;