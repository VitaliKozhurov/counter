import { combineReducers, createStore } from "redux";
import {
    CounterValueStateType,
    counterValueReducer,
} from "./counterValueReducer";
import { settingsModeReducer } from "./settingsModeReducer";
import {getFromLocalStorage} from '../utils/utils';

const rootAppReducer = combineReducers({
    counter: counterValueReducer,
    settings: settingsModeReducer,
});

export type AppRootState = ReturnType<typeof rootAppReducer>;

const initialState = getFromLocalStorage();

export const store = createStore(rootAppReducer, initialState);

