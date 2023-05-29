import { combineReducers, createStore } from "redux";
import { counterValueReducer } from "./counterValueReducer";
import { settingsReducer } from "./settingsReducer";

const rootAppReducer = combineReducers({
    counter: counterValueReducer,
    settings: settingsReducer,
});

export type AppRootState = ReturnType<typeof rootAppReducer>;

export const store = createStore(rootAppReducer);
