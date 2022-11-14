import { combineReducers, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getName } from "./asyncThunks";
import { pokemonApi } from "./RTKQuery";


export interface LoaderState {
    getName: 'idle' | 'loading' | 'failed',
    getAge: 'idle' | 'loading' | 'failed',
}

export interface State {
    name: string | null,
    status: LoaderState,
}
export interface State2 {
    age: number | null,
    status: LoaderState
}

export interface Payload1 {
    name: string | null
}
export interface Payload2 {
    age: number | null
}

const initialState: State = {
    name: null,
    status: {
        getName: 'idle',
        getAge: 'idle'
    }
}

const initialState2: State2 = {
    age: null,
    status: {
        getName: 'idle',
        getAge: 'idle'
    }
}

const slice = createSlice({
    name: "AppState",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<Payload1>) => {
            state.name = action.payload.name;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getName.pending, (state) => {
            state.status.getName = 'loading'
        }).addCase(getName.fulfilled, (state, action) => {
            state.status.getName = 'idle'
            state.name = action.payload.name;
        })
            .addCase(getName.rejected, (state) => {
                state.status.getName = 'failed'
            });
    }
})

const slice2 = createSlice({
    name: 'slice2',
    initialState: initialState2,
    reducers: {
        setAge: (state, action: PayloadAction<Payload2>) => {
            state.age = action.payload.age;
        }
    }
})
export const reducers = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    slice: slice.reducer,
    slice2: slice2.reducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})


setupListeners(store.dispatch)
// export const actions = { slice1: slice.actions, slice2: slice2.actions };
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export default slice.reducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const actions = { slice1: slice.actions, slice2: slice2.actions }
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;