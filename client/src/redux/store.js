import { configureStore } from '@reduxjs/toolkit';
import reducer from '../utils/reducer'

const store = configureStore({ reducer: reducer });
export default store;