import {configureStore} from '@reduxjs/toolkit';
import customStateMgr from '../reduxFeatures/customStateMgr';

export const store = configureStore({
    reducer: {
        customState: customStateMgr,
    }
})