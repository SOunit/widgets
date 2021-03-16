import React from 'react';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
