import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'Wtat is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Wtat is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Wtat is React?',
    content: 'React is a front end javascript framework',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
