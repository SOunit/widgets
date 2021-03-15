import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    // 1. helper function
    const search = async () => {
      await axios.get('');
    };
    search();

    // 2. immidiate invoke function
    (async () => {
      await axios.get('');
    })();

    // 3. use promise
    axios.get('').then(() => {});
  }, [term]);

  return (
    <div>
      <div className='ui form'>
        <label>Enter Search Term</label>
        <input
          className='input'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
