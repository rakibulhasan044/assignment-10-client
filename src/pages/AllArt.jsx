import { useState } from "react";


const AllArt = () => {
    const [selectedValue, setSelectedValue] = useState('');

    // Function to handle change in select option
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    console.log(selectedValue);
  
    return (
      <div>
        <select onChange={handleChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected Value: {selectedValue}</p>
      </div>
    );
  }

export default AllArt;