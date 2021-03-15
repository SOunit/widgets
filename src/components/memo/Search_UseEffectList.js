import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('1. first render only');
  }, []);
  useEffect(() => {
    console.log('2. all render');
  });
  useEffect(() => {
    console.log('3. first render and when data changed');
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
