import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'Feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },

        removeFeed: () => {
            return null
        },

        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter(feed => feed._id != action.payload);
            return newFeed;
        }
    }
});

export default feedSlice.reducer;
export const { addFeed, removeFeed, removeUserFromFeed } = feedSlice.actions; 