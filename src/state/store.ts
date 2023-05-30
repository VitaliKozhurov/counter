import { combineReducers, createStore } from "redux";
import { counterValueReducer } from "./counterValueReducer";
import { settingsModeReducer } from "./settingsModeReducer";

const rootAppReducer = combineReducers({
    counter: counterValueReducer,
    settings: settingsModeReducer,
});

export type AppRootState = ReturnType<typeof rootAppReducer>;

export const store = createStore(rootAppReducer);
