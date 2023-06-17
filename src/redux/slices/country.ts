import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCountry: "",
};

export const country = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentCountry: action.payload,
      };
    },
  },
});

export const { setCountry } = country.actions;
export default country.reducer;
