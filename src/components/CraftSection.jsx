import CraftCard from "./CraftCard";
import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CraftSection = ({ crafts }) => {
    const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <div className="py-8 md:py-10 lg:py-16">
      <h2 className="text-3xl font-bold text-center">Our Category</h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 py-2 font-semibold gap-3">
        <Link to ="/subcategory" className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
            
          Landscape Painting
        </Link>
        <div className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
          Portrait Drawing
        </div>
        <div className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
          Watercolour Painting
        </div>
        <div className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
          Oil Painting
        </div>
        <div className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
          Charcoal Sketching
        </div>
        <div className="hover:bg-orange-300 cursor-pointer text-center py-2 rounded-3xl">
          Cartoon Drawing
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-5">
        {crafts.slice(0, 6).map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default CraftSection;
