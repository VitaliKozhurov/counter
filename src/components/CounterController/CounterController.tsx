import React, { FC } from "react";
import { SuperButton } from "../SuperButton/SuperButton";
import s from "./CounterControlle.module.css";

type CounterControllePropsType = {
    incDisable: boolean;
    resDisable: boolean;
    increaseCounter: () => void;
    resetCounter: () => void;
};

export const CounterController: FC<CounterControllePropsType> = ({
    incDisable,
    resDisable,
    increaseCounter,
    resetCounter,
}) => {
    return (
        <div className={s.body}>
            <SuperButton
                title={"Increase"}
                disable={incDisable}
                callback={increaseCounter}
            />
            <SuperButton
                title={"Reset"}
                disable={resDisable}
                callback={resetCounter}
            />
        </div>
    );
};
