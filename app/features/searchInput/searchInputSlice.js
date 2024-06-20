import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  string: "",

}

export const searchInputSlice = createSlice({
  name: "searchInputSlice",
  initialState,
  reducers: {
    setInputState: (state, action) => {
      state.string = action.payload 
    },
  reset: (state) => {
    state.string = ""
  }
  },
})

export const { setInputState, reset } = searchInputSlice.actions;

export default searchInputSlice.reducer;