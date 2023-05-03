import React, { useEffect, useState } from "react";
import "./App.css";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent";
import { DisplayComponent } from "./components/DisplayComponent/DisplayComponent";
import {
    getFromLocalStorage,
    setToLocalStorage,
} from "./LocalStoragelogic/LocalStorageLogic";

const App = () => {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        const values = getFromLocalStorage();
        if (values) {
            const { min, max } = JSON.parse(values);
            setCounter(min);
            setMinCounterValue(min);
            setMaxCounterValue(max);
        }
    }, []);
    console.log(minCounterValue);

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

    // переменные для определения состояния кнопок и лимитного значения
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
