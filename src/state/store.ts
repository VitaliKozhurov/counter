import { combineReducers, createStore } from "redux";
import {
    CounterValueStateType,
    counterValueReducer,
} from "./counterValueReducer";
import { settingsModeReducer } from "./settingsModeReducer";

const rootAppReducer = combineReducers({
    counter: counterValueReducer,
    settings: settingsModeReducer,
});

export type AppRootState = ReturnType<typeof rootAppReducer>;

const initialState = {
    counter: {
        counterValue: 2,
        minCounterValue: 2,
        maxCounterValue: 5,
    },
    settings: { settingMode: false, settingError: false },
};

export const store = createStore(rootAppReducer, initialState);
