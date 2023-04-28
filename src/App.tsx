import React, { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/Wrapper/Wrapper";

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

    const increaseIsDisabled = counter === maxCounterValue;
    const resetIsDisabled = counter === minCounterValue;

    return (
        <div className="App">
            <Wrapper
                counter={counter}
                incDisable={increaseIsDisabled}
                resDisable={resetIsDisabled}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};

export default App;
