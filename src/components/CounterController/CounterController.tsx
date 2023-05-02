import React, { FC } from "react";
import { SuperButton } from "../UI/SuperButton/SuperButton";
import s from "./CounterControlle.module.css";

type CounterControllePropsType = {
    incButtonIsDisabled: boolean;
    resButtonIsDisabled: boolean;
    increaseCounter: () => void;
    resetCounter: () => void;
};

export const CounterController: FC<CounterControllePropsType> = ({
    incButtonIsDisabled,
    resButtonIsDisabled,
    increaseCounter,
    resetCounter,
}) => {
    return (
        <div className={s.body}>
            <SuperButton
                title={"Increase"}
                disable={incButtonIsDisabled}
                callback={increaseCounter}
            />
            <SuperButton
                title={"Reset"}
                disable={resButtonIsDisabled}
                callback={resetCounter}
            />
        </div>
    );
};
