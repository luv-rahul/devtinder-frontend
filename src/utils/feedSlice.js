import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: () => {
      return null;
    },
    removeUser: (state, action) => {
      const newFeed = state.filter((item) => item._id != action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeFeed, removeUser } = feedSlice.actions;
export default feedSlice.reducer;
