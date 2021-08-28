import React from 'react';
import PropTypes from 'prop-types';
import s from "./Filter.module.css";

const Filter = ({ value, onChange, onBlur }) => (
  <div className = {s.filter}>
  <label className={s.label}>
      Find contacts by name
      <div className={s.castomInput}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={s.input}
        />
     </div>
  </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;