import React, { useEffect, useState } from "react";
import "./App.css";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent";
import { DisplayComponent } from "./components/DisplayComponent/DisplayComponent";
import { getFromLocalStorage, setToLocalStorage } from "./utils/utils";

const App = () => {
    // Без useEffect избавляемся от лишней перерисовки
    const values = getFromLocalStorage();
    let min: number = 0;
    let max: number = 5;
    if (values) {
        const { minSettingsValue, maxSettingsValue } = values;
        min = minSettingsValue;
        max = maxSettingsValue;
    }

    const [minCounterValue, setMinCounterValue] = useState<number>(min);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(max);
    const [counter, setCounter] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    // Вариант с использованием useEffect, но тогда придется в компоненте с настройками добавлять useEffect или обращаться к LS
    /* useEffect(() => {
        const values = getFromLocalStorage();
        if (values) {
            const { minSettingsValue, maxSettingsValue } = values;
            setCounter(minSettingsValue);
            setMinCounterValue(minSettingsValue);
            setMaxCounterValue(maxSettingsValue);
        }
    }, []); */

    const increaseCounter = () => {
        if (counter < maxCounterValue) {
            setCounter(counter + 1);
        }
    };
    const resetCounter = () => {
        setCounter(minCounterValue);
    };
    const activateSettingMode = () => {
        setIsSettingMode(true);
    };
    const setSettingError = () => {
        if (!error) {
            setError(true);
        }
    };
    const removeSettingError = () => {
        setError(false);
    };
    const setSettingsParams = (minValue: number, maxValue: number) => {
        setMinCounterValue(minValue);
        setMaxCounterValue(maxValue);
        setCounter(minValue);
        setIsSettingMode(false);
        setToLocalStorage(minValue, maxValue);
    };

    // Переменные для определения состояния кнопок и лимитного значения
    const isLimit = counter === maxCounterValue;
    const incButtonIsDisabled = counter === maxCounterValue || isSettingMode;
    const resButtonIsDisabled = counter === minCounterValue || isSettingMode;

    return (
        <div className="App">
            <SettingsComponent
                minInputTitle={"Min Value:"}
                maxInputTitle={"Max Value:"}
                minSettingsValue={minCounterValue}
                maxSettingsValue={maxCounterValue}
                isSettingMode={isSettingMode}
                buttonTitle={"Set"}
                activateSettingMode={activateSettingMode}
                setSettingError={setSettingError}
                removeSettingError={removeSettingError}
                setSettingsParams={setSettingsParams}
            />
            <DisplayComponent
                counter={counter}
                isLimit={isLimit}
                isSettingMode={isSettingMode}
                isError={error}
                incButtonIsDisabled={incButtonIsDisabled}
                resButtonIsDisabled={resButtonIsDisabled}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};

export default App;
