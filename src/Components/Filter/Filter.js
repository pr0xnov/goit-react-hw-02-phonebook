import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.findForm}>
      <h2 className={s.title}>Find contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>find:</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="Find name"
        />
      </label>
    </div>
  );
};

export default Filter;
