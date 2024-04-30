import { useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const CraftDetails = () => {

  const craft = useLoaderData();
  
  const {
    itemName,
    subcategory,
    price,
    description,
    rating,
    time,
    photourl,
    userName,
    userEmail,
    stock,
    customization,
  } = craft;

  const intRating = parseInt(rating);
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-5 px-5 md:px-10 py-10 min-h-[calc(100vh-149px)]">
      <div className="h-[406px] lg:h-[506px] w-[316px] lg:w-[380px] border-8 border-black">
            <img className="h-[390px] lg:h-[490px] w-[300px] lg:w-[370px] border-8 border-white" src={photourl} alt="" />
            </div>
      <div className="space-y-2 flex-1">
        <p className="text-2xl font-bold">{itemName}</p>
        <hr />
        <p>Subcategory: {subcategory}</p>
        <div className="flex items-center font-bold text-xl">
          <BsCurrencyDollar size={20} />
          {price}
        </div>
        <div className="flex justify-between">
            <p>Status: {stock}</p>
            <p>Customizable: {customization}</p>
        </div>
        <p>Processing time: {time}</p>
        <div className="flex justify-between">
            <p>Artist: {userName}</p>
            <p>{userEmail}</p>
        </div>
        <div className="rating">
          {[...Array(10)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name="rating-2"
              value="1"
              className="mask mask-star-2 bg-orange-400"
              checked={index === intRating - 1}
              readOnly
            />
          ))}
        </div>
        <p><span className="font-medium text-primary">Description: </span>{description}</p>
      </div>
    </div>
  );
};

export default CraftDetails;
