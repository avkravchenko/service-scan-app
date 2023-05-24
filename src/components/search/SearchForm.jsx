import React, { useState } from "react";

const SearchForm = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setValue(numericValue);
  };


    return (
        <form>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
        </form>
    )
}

export default SearchForm;