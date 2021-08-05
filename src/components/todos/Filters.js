import React from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const filterOptions = ["All", "Urgent", "Not Urgent"];
const sortOptions = ["Newest", "Oldest", "Urgent", "Not Urgent"];

function Filters({ handleFilter, handleSort, filter, sort, isWorldsTodo }) {
  return (
    <div className="filters-container">
      <div className="title">
        <h2>{isWorldsTodo ? "World's todo" : "My todo"}</h2>
      </div>
      <div className="filters">
        <div>
          <span className="icon">
            <FaFilter />
          </span>
          <select defaultValue={filter} onChange={handleFilter}>
            {filterOptions.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span className="icon">
            <FaSort />
          </span>
          <select defaultValue={sort} onChange={handleSort}>
            {sortOptions.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
