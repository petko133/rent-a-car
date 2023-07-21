import React, { useEffect, useRef, useState } from 'react';
import classes from './Dropdown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  });

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes['dropdown-container']}>
      <div
        className={classes['dropdown-input']}
        onClick={handleInputClick}
        ref={inputRef}
      >
        <div className={classes['dropdown-selected-value']}>{getDisplay()}</div>
        <div className={classes['dropdown-tools']}>
          <div className={classes['dropdown-tool']}>
            <FaChevronDown />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={classes['dropdown-menu']}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${classes['dropdown-item']} ${
                isSelected(option) && 'selected'
              }`}
              onClick={() => onItemClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
