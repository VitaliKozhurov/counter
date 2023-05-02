import React, { useState } from "react";
import "./App.css";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent";
import { DisplayComponent } from "./components/DisplayComponent/DisplayComponent";

const App = () => {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

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
        setIsSettingMode(false);
    };

    const isLimit = counter === maxCounterValue;
    const incButtonIsDisabled = counter === maxCounterValue;
    const resButtonIsDisabled = counter === minCounterValue;

    return (
        <div className="App">
            <SettingsComponent
                minInputTitle={"Min Value"}
                maxInputTitle={"Max Value"}
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
