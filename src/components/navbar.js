// Navbar component
import React from 'react';

const Navbar = ({ handleOptionChange }) => {
  const onSelectChange = (e) => {
    // Retrieve the selected value
    const selectedValue = e.target.value;
    
    // Pass the selected value to the parent component's function
    handleOptionChange(selectedValue);
  };

  return (
    <div className="navbar">
      <select onChange={onSelectChange}>
      <option value="KanbanColumn">Display</option>
        <option value="group-by-user">Group by User</option>
        <option value="sort-by-priority">Sort by Priority</option>
        
      </select>
    </div>
    
  );
};

export default Navbar;


