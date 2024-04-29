import { useState } from "react";


const UpdateCraft = () => {

  const [customization, setCustomization] = useState("");
  const [stock, setStock] = useState("");
  const [subcategory, setSubcategory] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

    }

    const handleCategory = (e) => {
      e.preventDefault();
    }

    const handleStockChange = e => {
      e.preventDefault();
    }

    const handleCustomizationChange = (e) => {
      e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="px-5 dark:bg-purple-950">
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
              required
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
          <div className="flex items-center pt-5">
            <span className="label-text pr-2">Stock Status: </span>

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
              <span className="px-1 lg:px-3">Order</span>
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
      <input type="submit" value="Update Craft" className="btn btn-block my-5" />
    </form>
    );
};

export default UpdateCraft;