import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropDown from './hooks/useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setbreeds] = useState([]);

  const [animal, AnimalDropDown] = useDropDown('Animal', 'Dog', ANIMALS);
  const [breed, BreedDropDown] = useDropDown('Breed', '', breeds);

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

        <AnimalDropDown />

        <BreedDropDown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
