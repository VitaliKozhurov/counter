// Функция загрузки значения в LocalStorage
import {AppRootState} from '../state/store';

export const setToLocalStorage = (state:AppRootState) => {
    localStorage.setItem("state", JSON.stringify(state));
};

// Функция выгрузки значения из LocalStorage
export const getFromLocalStorage = () => {
    const values = localStorage.getItem("state");
    if (values) {
        return JSON.parse(values);
    }
};
