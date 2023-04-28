import React, { FC } from "react";
import s from "./SettingsInfo.module.css";
import { NumbersInput } from "../NumbersInput/NumbersInput";

type SettingsInfoType = {
    minValue: number;
    maxValue: number;
    minInputTitle: string;
    maxInputTitle: string;
    changeMinCounterValue: (value: string) => void;
    changeMaxCounterValue: (value: string) => void;
};

export const SettingsInfo: FC<SettingsInfoType> = ({
    minValue,
    maxValue,
    minInputTitle,
    maxInputTitle,
    changeMinCounterValue,
    changeMaxCounterValue,
}) => {
    return (
        <div className={s.body}>
            <NumbersInput
                title={maxInputTitle}
                value={maxValue}
                callback={changeMaxCounterValue}
            />
            <NumbersInput
                title={minInputTitle}
                value={minValue}
                callback={changeMinCounterValue}
            />
        </div>
    );
};
