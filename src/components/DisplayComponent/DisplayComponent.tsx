import React, { FC } from "react";
import { CounterInfo } from "../CounterInfo/CounterInfo";
import { CounterController } from "../CounterController/CounterController";
import { useSelector } from "react-redux";
import { AppRootState } from "../../state/store";

type DisplayPropsComponent = {
    counter: number;
    isLimit: boolean;
    isSettingMode: boolean;
    isError: boolean;
    incButtonIsDisabled: boolean;
    resButtonIsDisabled: boolean;
    increaseCounter: () => void;
    resetCounter: () => void;
};

export const DisplayComponent: FC<DisplayPropsComponent> = ({
    counter,
    isLimit,
    isSettingMode,
    isError,
    incButtonIsDisabled,
    resButtonIsDisabled,
    increaseCounter,
    resetCounter,
}) => {
    const counterState = useSelector<AppRootState>((state) => state.counter);
    console.log(counterState);

    return (
        <div className={"elem"}>
            <CounterInfo
                counter={counter}
                isLimit={isLimit}
                isSettingMode={isSettingMode}
                isError={isError}
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
