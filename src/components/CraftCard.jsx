import { BsCurrencyDollar } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CraftCard = ({craft}) => {
    const { _id, photourl, itemName, price, subcategory, stock} = craft
    return (
        <div className="flex gap-5 font-medium">
            <img className="h-[250px] border-4 border-black" src={photourl} alt="" />
            <div className="space-y-2">
            <p>{itemName}</p>
            <div className="flex items-center">
                <BsCurrencyDollar size={20}/>
                {price}
            </div>
            <div className="flex items-center gap-2">
                <IoColorPaletteOutline size={20}/>
                {subcategory}
            </div>
                <p>Status: {stock}</p>
                <Link to={`/craftDetails/${_id}`} className="btn btn-sm bg-secondary text-gray-200">View details</Link>
            </div>
        </div>
    );
};

export default CraftCard;