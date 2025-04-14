import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'Request',
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },

        removeRequest: (state, action) => {
            const allRequests = state.filter(requests => requests._id != action.payload);
            return allRequests;
        }
    }
});

export default requestSlice.reducer;
export const { addRequest, removeRequest } = requestSlice.actions;