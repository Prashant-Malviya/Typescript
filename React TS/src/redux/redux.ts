import { configureStore,createAction,createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";


// this is using rootreducer method --------------------

// interface StateType{
//     count: number
// }

// const increament = createAction("increament")
// const decreament = createAction("decreament")

// const initialState: StateType = { count: 0};

// const rootReducer = createReducer(initialState,(builder)=>{
//     builder.addCase(increament,(state) => {
//         state.count = state.count+1;
//     }).addCase(decreament,(state) => {
//         state.count = state.count-1;
//     })
// })

// export const store = configureStore({reducer: rootReducer});


//-----------------using create slice------------


interface StateType{
    count: number;
}

const initialState : StateType = {count: 0};


const rootSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increament:(state)=>{
            state.count += 1
        },
        decreament:(state)=>{
            state.count -= 1
        },
        increamentByValue:(state,action:PayloadAction<number>)=>{
            state.count += action.payload;
        }
    }
})

export const{increament,decreament,increamentByValue} = rootSlice.actions
// export const reducer = rootSlice.reducer


export const store = configureStore({reducer: rootSlice.reducer});


