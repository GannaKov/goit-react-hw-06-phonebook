import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiltrLabel, FiltrInput } from './Filter.styled';
import { putFilter } from 'redux/actions';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
    dispatch(putFilter(e.currentTarget.value));
  };
  return (
    <FiltrLabel>
      Find contacts by name
      <FiltrInput type="text" value={filter} onChange={changeFilter} />
    </FiltrLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
