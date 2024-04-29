import { BsCurrencyDollar } from "react-icons/bs";

const UserItems = ({ item }) => {
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
      } = item;
      const intRating = parseInt(rating);
      return (
        <div className="flex flex-col md:flex-row gap-10 mt-5 px-5 md:px-10">
          <img className="h-[500px] lg:h-[600px] w-[380px] lg:w-[420px] border-8 border-black" src={photourl} alt="" />
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
                />
              ))}
            </div>
            <p><span className="font-medium text-primary">Description: </span>{description}</p>
          </div>
        </div>
      );
};

export default UserItems;