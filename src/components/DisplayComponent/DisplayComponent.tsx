import React from "react";
import { CounterInfo } from "./CounterInfo/CounterInfo";
import { CounterController } from "./CounterController/CounterController";
import { useSelector } from "react-redux";
import { AppRootState } from "../../state/store";
import { useDispatch } from "react-redux";
import {
    increaseCounterValueAC,
    resetCounterValueAC,
} from "../../state/counterValueReducer";

export const DisplayComponent = () => {
    const dispatch = useDispatch();
    const appState = useSelector<AppRootState>(
        (state) => state
    ) as AppRootState;

    const { counterValue, minCounterValue, maxCounterValue } = appState.counter;
    const { settingMode, settingError } = appState.settings;

    // Переменные для определения состояния кнопок и лимитного значения
    const isLimit = counterValue === maxCounterValue;
    const incButtonIsDisabled = counterValue === maxCounterValue || settingMode;
    const resButtonIsDisabled = counterValue === minCounterValue || settingMode;

    const increaseCounter = () => {
        dispatch(increaseCounterValueAC());
    };
    const resetCounter = () => {
        dispatch(resetCounterValueAC());
    };

    return (
        <div className={"elem"}>
            <CounterInfo
                counter={counterValue}
                isLimit={isLimit}
                isSettingMode={settingMode}
                isError={settingError}
            />
            <CounterController
                incButtonIsDisabled={incButtonIsDisabled}
                resButtonIsDisabled={resButtonIsDisabled}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};
