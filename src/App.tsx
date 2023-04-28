import React, { useState } from "react";
import "./App.css";
import { CounterInfo } from "./components/CounterInfo/CounterInfo";
import { CounterController } from "./components/CounterController/CounterController";
import { SettingsInfo } from "./components/SettingsInfo/SettingsInfo";
import { SuperButton } from "./components/SuperButton/SuperButton";

const App = () => {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounterValue);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const increaseCounter = () => {
        if (counter < maxCounterValue) {
            setCounter(counter + 1);
        }
    };
    const resetCounter = () => {
        setCounter(minCounterValue);
    };
    const changeMinCounterValue = (value: string) => {
        minCounterValue < 0
            ? setError("Minimal value cannot be less than zero")
            : minCounterValue >= maxCounterValue
            ? setError("Minimum value cannot be greater than the maximum")
            : setError(null);
    };

    const changeMaxCounterValue = (value: string) => {
        setMaxCounterValue(+value);
    };

    const incDisable = counter === maxCounterValue;
    const resDisable = counter === minCounterValue;
    const setDisable = !!error;
    console.log(setDisable);
    return (
        <div className="App">
            <div className={"elem"}>
                <SettingsInfo
                    minValue={minCounterValue}
                    maxValue={maxCounterValue}
                    minInputTitle={"min value:"}
                    maxInputTitle={"max value:"}
                    changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}
                />
                <div className={"btnWrapper"}>
                    <SuperButton
                        title={"Set"}
                        disable={setDisable}
                        callback={() => console.log(123)}
                    />
                </div>
            </div>

            <div className={"elem"}>
                <CounterInfo counter={counter} isLimit={incDisable} />
                <CounterController
                    incDisable={incDisable}
                    resDisable={resDisable}
                    increaseCounter={increaseCounter}
                    resetCounter={resetCounter}
                />
            </div>
        </div>
    );
};

export default App;
