export const setToLocalStorage = (min: number, max: number) => {
    const obj = {
        min,
        max,
    };
    localStorage.setItem("values", JSON.stringify(obj));
};

export const getFromLocalStorage = () => {
    const values = localStorage.getItem("values");
    return values;
};
