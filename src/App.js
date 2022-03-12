import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const selectMenus = [
    {
      id: 1,
      label: 'Menu 1',
      name: 'menu1',
      buttonLabel: 'Menu 1',
      defaultValue: '2',
      options: [
        {
          text: 'option 1 select 1',
          value: '1',
        },
        {
          text: 'option 2 select 1',
          value: '2',
        },
        {
          text: 'option 3 select 1',
          value: '3',
        },
      ],
    },
    {
      id: 2,
      label: 'Menu 2',
      name: 'menu2',
      buttonLabel: 'Menu 2',
      defaultValue: '1',
      options: [
        {
          text: 'option1 select 2',
          value: '1',
        },
        {
          text: 'option 2 select 2',
          value: '2',
        },
        {
          text: 'option 3 select 2',
          value: '3',
        },
      ],
    },
    {
      id: 3,
      label: 'Menu 3',
      name: 'menu3',
      buttonLabel: 'Menu 3',
      defaultValue: '3',
      options: [
        {
          text: 'test3 select 3',
          value: '1',
        },
        {
          text: 'option 2 select 3',
          value: '2',
        },
        {
          text: 'option 3 select 3',
          value: '3',
        },
      ],
    },
  ];

  const [value, setValue] = useState({
    menu1: selectMenus[0].defaultValue,
    menu2: selectMenus[1].defaultValue,
    menu3: selectMenus[2].defaultValue,
  });

  console.log(value);

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let initialVisibleInfoBoxes = {
    info0: false,
    info1: false,
    info2: false,
  };

  const [visibleInfo, setVisible] = useState(initialVisibleInfoBoxes);

  const showInfo = (e, key) => {
    e.preventDefault();
    setVisible({
      ...visibleInfo,
      [key]: true,
    });
  };

  const hideInfo = (e, key) => {
    e.preventDefault();
    setVisible({
      ...visibleInfo,
      [key]: false,
    });
  };

  return (
    <div>
      {selectMenus.map((selectmenu, i) => (
        <div>
          <label>{selectmenu.label}</label>
          <button onClick={(e) => showInfo(e, `info${i}`)}>Info</button>
          {visibleInfo[`info${i}`] && (
            <div>
              Info
              <button onClick={(e) => hideInfo(e, `info${i}`)}>Close</button>
            </div>
          )}
          <select
            value={value[`menu1${i}`]}
            name={selectmenu.name}
            onChange={(e) => onChange(e)}
          >
            {selectmenu.options.map((option) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
