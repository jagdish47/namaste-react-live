import { useState } from "react";

const FilterRestaurant = () => {
  const [selectOption, setSelectOption] = useState("");

  console.log(selectOption);

  return (
    <div>
      <select onChange={(e) => setSelectOption(e.target.value)}>
        <option value="top">Top</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default FilterRestaurant;
