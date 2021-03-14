import React from 'react';
import Search from './components/Search';

const items = [
  {
    title: 'Wtat is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'How is React?',
    content: 'React is a front end javascript framework',
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
