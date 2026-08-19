import {configureStore} from '@reduxjs/toolkit';
import Authreducer from '../pages/auth/state/auth.slice.js'
export const store =configureStore({
    reducer:{
        auth:Authreducer,
    }
})
