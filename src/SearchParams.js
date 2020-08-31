import React, { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          location
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
