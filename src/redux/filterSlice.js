import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterValue: '',
  };

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filterValue = action.payload;
        },
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;