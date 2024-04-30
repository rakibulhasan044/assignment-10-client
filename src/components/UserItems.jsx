import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserItems = ({ item, list, setList, index }) => {

  //console.log(list);


    const {
        _id,
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
      const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5005/crafts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = list.filter(item => item._id !== id);
                            setList(remaining);
                            console.log(list);
                        }
                    })

            }
        })
    }
      return (
        <div className="flex flex-col md:flex-row gap-10 mt-5 px-5 md:px-10">
          <div className="h-[500px] lg:h-[506px] w-[380px] lg:w-[380px] border-8 border-black">
            <p>{index}</p>
            <img className="h-[490px] lg:h-[490px] w-[380px] lg:w-[370px] border-8 border-white" src={photourl} alt="" />
            </div>
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <p className="text-2xl font-bold">{itemName}</p>
            <hr />
            <p>Subcategory: {subcategory}</p>
            <div className="flex items-center font-bold text-xl">
              <BsCurrencyDollar size={20} />
              {price}
            </div>
            <div className="flex justify-between lg:pr-28">
                <p>Status: {stock}</p>
                <p>Customizable: {customization}</p>
            </div>
            <p>Processing time: {time}</p>
            <div className="flex justify-between lg:pr-28">
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
            <div className="flex gap-14">
            <Link to={`/update/${_id}`} className="btn btn-sm btn-accent text-white">
                Edit
                </Link>
                <button className="btn btn-sm btn-error text-white"
                onClick={() => handleDelete(_id)}>
                    Delete
                </button>
          </div>
          </div>
        </div>
      );
};

export default UserItems;