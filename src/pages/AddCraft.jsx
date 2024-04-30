import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddCraft = () => {

  const [customization, setCustomization] = useState("");
  const [stock, setStock] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const { user } = useContext(AuthContext)

  const handleCustomizationChange = (event) => {
    setCustomization(event.target.value);
  };

  const handleCategory = (e) => {
    setSubcategory(e.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    const form = event.target;
    const itemName = form.itemName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const photourl = form.photourl.value;
    const userName = user.displayName;
    const userEmail = user.email

    const newCraft = {
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
    };
    fetch("http://localhost:5005/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
// dark:bg-gradient-to-r from-[#532D84] to-[#532],from-[#2E1658] to-[#120632]
  return (
    <form onSubmit={handleSubmit} className="px-5 md:pt-24 lg:pt-28 bg-[#D2B48C] dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31] min-h-[calc(100vh-122px)]">
      <div className="flex flex-col md:flex-row gap-5">
        <div className=" flex-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5]"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Subcategory</span>
            </label>
            <select
              className="input-group p-3 border border-gray-300 rounded-lg dark:text-black dark:bg-[#ECE0F5]"
              required
              onChange={handleCategory}
            >
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5]"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="1-5"
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5]"
              />
            </label>
          </div>
          <div className="flex items-center pt-5">
            <span className="label-text pr-2 dark:text-white">Stock Status: </span>

            <label>
              <input
                type="radio"
                value="in stock"
                name="stock"
                required
                checked={stock === "in stock"}
                onChange={handleStockChange}
              />
              <span className="px-1 lg:px-3">In stock</span>
            </label>
            <label>
              <input
                type="radio"
                value="order"
                name="stock"
                required
                checked={stock === "order"}
                onChange={handleStockChange}
              />
              <span className="px-1 lg:px-3 dark:text-white">Order</span>
            </label>
            <label>
              <input
                type="radio"
                value="out of stock"
                name="stock"
                required
                checked={stock === "out of stock"}
                onChange={handleStockChange}
              />
              <span className="px-1 lg:px-3 dark:text-white">Out of stock</span>
            </label>
          </div>
        </div>
        <div className="flex-1">
          {/* 2nd */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Processing Time"
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5]"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5]"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="userEmail"
                value={user.email || null}
                readOnly
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5] dark:text-black"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userName"
                value={user.displayName || 'null'}
                readOnly
                required
                className="input input-bordered w-full dark:bg-[#ECE0F5] dark:text-black"
              />
            </label>
          </div>
          <div className="flex items-center pt-5">
            <span className="label-text pr-5 dark:text-white">Customaization: </span>

            <label>
              <input
                type="radio"
                value="yes"
                name="custom"
                required
                checked={customization === "yes"}
                onChange={handleCustomizationChange}
              />
              <span className="px-3">Yes</span>
            </label>
            <label>
              <input
                type="radio"
                value="no"
                name="custom"
                required
                checked={customization === "no"}
                onChange={handleCustomizationChange}
              />
              <span className="px-3">NO</span>
            </label>
          </div>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text dark:text-white">Photo URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="photourl"
            placeholder="Photo URL"
            required
            className="input input-bordered w-full dark:bg-[#ECE0F5]"
          />
        </label>
      </div>
      <input type="submit" value="Add Craft" className="btn btn-block my-5 text-white bg-[#331A15] dark:bg-[#250530]" />
    </form>
  );
};

export default AddCraft;
