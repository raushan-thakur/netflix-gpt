import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configslice from "./configslice ";

const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : movieSlice,
        gpt : gptSlice,
        config : configslice,
    }
})

export default appStore;