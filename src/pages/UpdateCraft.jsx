import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const UpdateCraft = () => {

  const craft = useLoaderData()
  console.log(craft);

  const {
    _id,
    itemName,
    price,
    description,
    rating,
    time,
    photourl,
    userName,
    userEmail,
    
  } = craft;
  console.log(craft.customization);
  console.log(_id);

  const [customization, setCustomization] = useState(craft.customization);
  const [stock, setStock] = useState(craft.stock);
  const [subcategory, setSubcategory] = useState(craft.subcategory);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
    const itemName = form.itemName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const photourl = form.photourl.value;
    const updateCraft = {
      itemName,
      subcategory,
      price,
      description,
      rating,
      time,
      photourl,
      stock,
      customization
    }
      fetch(`http://localhost:5005/crafts/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updateCraft)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log('Craft modified successfully')
          alert('hoise')
        }
      })
    }
    

    const handleCategory = (e) => {
      setSubcategory(e.target.value)
    }

    const handleStockChange = e => {
      setStock(e.target.value)
    }

    const handleCustomizationChange = (e) => {
      setCustomization(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className="px-5 dark:bg-purple-950 min-h-[calc(100vh-122px)]">
          <h1>{userName}</h1>
          <h2>{userEmail}</h2>
      <div className="flex flex-col md:flex-row gap-5">
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
                defaultValue={itemName}
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
              defaultValue={subcategory}
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
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex items-center pt-5">
            <span className="label-text pr-2">Stock Status: </span>

            <label>
              <input
                type="radio"
                value="in stock"
                name="stock"
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
                checked={stock === "order"}
                onChange={handleStockChange}
              />
              <span className="px-1 lg:px-3">Order</span>
            </label>
            <label>
              <input
                type="radio"
                value="out of stock"
                name="stock"
                checked={stock === "out of stock"}
                onChange={handleStockChange}
              />
              <span className="px-1 lg:px-3">Out of stock</span>
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
                defaultValue={time}
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
                defaultValue={price}
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
                defaultValue={rating}
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
            defaultValue={photourl}
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <input type="submit" value="Update Craft" className="btn btn-block my-5" />
    </form>
    );
};

export default UpdateCraft;