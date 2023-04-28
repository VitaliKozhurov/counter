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

    const increaseCounter = () => {
        if (counter < maxCounterValue) {
            setCounter(counter + 1);
        }
    };
    const resetCounter = () => {
        setCounter(minCounterValue);
    };
    const changeMinCounterValue = (value: string) => {
        setMinCounterValue(+value);
    };
    const changeMaxCounterValue = (value: string) => {
        setMaxCounterValue(+value);
    };

    const incDisable = counter === maxCounterValue;
    const resDisable = counter === minCounterValue;

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
