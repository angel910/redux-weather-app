import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  string: "",

}

export const searchInputSlice = createSlice({
  name: "searchInputSlice",
  initialState,
  reducers: {
    printText: (state, action) => {
      state.string = action.payload
      console.log(action.payload)
    },
  reset: (state) => {
    state.string = ""
  }
  },
})

export const { printText, reset } = searchInputSlice.actions;

export default searchInputSlice.reducer;