// DUCKS pattern => Putting as much of the logic for a given feature as possible into a single file.
// Slice file => represents the logic and the data for one slice of your Redux state.

// createSlice => main API function you're going to use to define your Redux logic
// PayloadAction => TypeScript type that represents, 'This is the contents of one given object'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// This is going to represent the shape of the state, inside of our slice that is managed by the reducer.
interface CounterState {
    value: number;
}

// initialState for the slice
const initialState: CounterState = {
    value: 0
}

// Slice that contain reducer logic
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            // it's oky to do this because Immer makes it work
            // under the hood
            state.value++
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})

// Action Creators => function that makes and returns action object
export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;