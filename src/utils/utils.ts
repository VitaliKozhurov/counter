// Функция загрузки значения в LocalStorage
export const setToLocalStorage = (
    minSettingsValue: number,
    maxSettingsValue: number
) => {
    const obj = {
        minSettingsValue,
        maxSettingsValue,
    };
    localStorage.setItem("values", JSON.stringify(obj));
};

// Функция выгрузки значения из LocalStorage
export const getFromLocalStorage = () => {
    const values = localStorage.getItem("values");
    if (values) {
        return JSON.parse(values);
    }
};
