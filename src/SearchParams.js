import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('Dog');

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

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            type="text"
            value={animal}
            placeholder="Animal"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value="">All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
