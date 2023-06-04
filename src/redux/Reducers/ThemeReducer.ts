import { createSlice } from '@reduxjs/toolkit'

export const ThemeReducer = createSlice({
  name: 'theme',
  initialState: {
    status: 'light'
  },
  reducers: {
    setTheme: (state, action) => {
      state.status = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = ThemeReducer.actions;

export default ThemeReducer.reducer;