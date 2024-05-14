import { configureStore } from "@reduxjs/toolkit";
import autoSlice from "./autoSlice";

export const store = configureStore({
    reducer: {
        Autos: autoSlice
    }
})