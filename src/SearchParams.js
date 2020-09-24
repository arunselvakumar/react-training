import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropDown from './hooks/useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setbreeds] = useState([]);
  const [breeds, setbreeds] = useState([]);

  const [animal, AnimalDropDown] = useDropDown('Animal', 'Dog', ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown('Breed', '', breeds);

  useEffect(() => {
    setbreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setbreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setbreeds]);

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
