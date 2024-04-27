import CraftCard from "./CraftCard";

const CraftSection = ({crafts}) => {
    return (
        <div>
            <h2>Our collection{crafts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-5">
            {
                crafts.slice(0, 6).map(craft => <CraftCard 
                key={craft._id}
                craft={craft}
                >  
                </CraftCard>)
            }
            </div>
        </div>
    );
};

export default CraftSection;