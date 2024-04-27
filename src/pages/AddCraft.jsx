import { useState } from "react";
import Swal from "sweetalert2";
const AddCraft = () => {
  const [customization, setCustomization] = useState("");
  const [stock, setStock] = useState("");
  const [subcategory, setSubcategory] = useState("");

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
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    //console.log(itemName, subcategory, price, description, rating,time, photourl, userName, userEmail);
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
    console.log("Selected customization:", customization);
    console.log("Selected stock:", stock);
    console.log(newCraft);
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
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 dark:bg-purple-950">
      <div className="flex gap-5">
        <div className=" flex-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <select
              className="input-group p-3 border border-gray-300 rounded-lg"
              onChange={handleCategory}
            >
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing"> Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="1-10"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex items-center pt-5">
            <span className="label-text pr-5">Stock Status: </span>

            <label>
              <input
                type="radio"
                value="in stock"
                name="stock"
                required
                checked={stock === "in stock"}
                onChange={handleStockChange}
              />
              <span className="px-3">In stock</span>
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
              <span className="px-3">Order</span>
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
              <span className="px-3">Out of stock</span>
            </label>
          </div>
        </div>
        <div className="flex-1">
          {/* 2nd */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Processing Time"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex items-center pt-5">
            <span className="label-text pr-5">Customaization: </span>

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
          <span className="label-text">Photo URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="photourl"
            placeholder="Photo URL"
            required
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <input type="submit" value="Add Craft" className="btn btn-block my-5" />
    </form>
  );
};

export default AddCraft;
