import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = (selected, setSelected) => {
  if (window.location.pathname === '/dropdown') {
    return (
      <Dropdown
        label='test'
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    );
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown(selected, setSelected)}
      {showTranslate()}
    </div>
  );
};
