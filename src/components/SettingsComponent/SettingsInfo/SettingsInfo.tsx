import React, { FC } from "react";
import s from "./SettingsInfo.module.css";
import { NumbersInput } from "../../UI/NumbersInput/NumbersInput";

type SettingsInfoType = {
    minInputTitle: string;
    maxInputTitle: string;
    minValue: number;
    maxValue: number;
    minInputError: boolean;
    maxInputError: boolean;
    changeMinCounterValue: (value: string) => void;
    changeMaxCounterValue: (value: string) => void;
};

export const SettingsInfo: FC<SettingsInfoType> = ({
    minInputTitle,
    maxInputTitle,
    minValue,
    maxValue,
    minInputError,
    maxInputError,
    changeMinCounterValue,
    changeMaxCounterValue,
}) => {
    console.log(minValue);
    return (
        <div className={s.body}>
            <NumbersInput
                title={maxInputTitle}
                value={maxValue}
                error={maxInputError}
                callback={changeMaxCounterValue}
            />
            <NumbersInput
                title={minInputTitle}
                value={minValue}
                error={minInputError}
                callback={changeMinCounterValue}
            />
        </div>
    );
};
