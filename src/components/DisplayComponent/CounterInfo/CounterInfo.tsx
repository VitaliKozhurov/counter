import React, { FC } from "react";
import s from "./CounterInfo.module.css";

type CounterInfoPropsType = {
    counter: number;
    isLimit: boolean;
    isSettingMode: boolean;
    isError: boolean;
};

export const CounterInfo: FC<CounterInfoPropsType> = ({
    counter,
    isLimit,
    isSettingMode,
    isError,
}) => {
    const style = `${s.body} ${isLimit ? s.limit : ""} ${
        isSettingMode ? s.settins : ""
    } ${isError ? s.error : ""}`;

    let message: number | string = counter;

    if (isSettingMode) {
        message = "Settings mode";
    }
    if (isError) {
        message = "Incorrect value";
    }

    return <div className={style}>{message}</div>;
};
