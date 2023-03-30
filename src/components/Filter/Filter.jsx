import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

import { FilterInput, FilterLabel } from './Filter.style';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getFilter);

  const changeFilter = evt => {
    const filter = evt.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={inputValue} onChange={changeFilter} />
    </FilterLabel>
  );
};
