import React, { FC } from "react";
import s from "./Wrapper.module.css";
import { CounterInfo } from "../CounterInfo/CounterInfo";
import { CounterController } from "../CounterController/CounterController";

type WrapperPropsType = {
    counter: number;
    incDisable: boolean;
    resDisable: boolean;
    increaseCounter: () => void;
    resetCounter: () => void;
};

export const Wrapper: FC<WrapperPropsType> = ({
    counter,
    incDisable,
    resDisable,
    increaseCounter,
    resetCounter,
}) => {
    return (
        <div className={s.body}>
            <CounterInfo counter={counter} isLimit={incDisable} />
            <CounterController
                incDisable={incDisable}
                resDisable={resDisable}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};
