import React, { FC, useEffect, useState } from "react";
import { SettingsInfo } from "./SettingsInfo/SettingsInfo";
import { SuperButton } from "../UI/SuperButton/SuperButton";
import {log} from 'util';

type SettingsComponentPopsType = {
    minInputTitle: string;
    maxInputTitle: string;
    minSettingsValue: number;
    maxSettingsValue: number;
    isSettingMode: boolean;
    buttonTitle: string;
    activateSettingMode: () => void;
    setSettingError: () => void;
    removeSettingError: () => void;
    setSettingsParams: (minValue: number, maxValue: number) => void;
};

export const SettingsComponent: FC<SettingsComponentPopsType> = ({
    minInputTitle,
    maxInputTitle,
    minSettingsValue,
    maxSettingsValue,
    isSettingMode,
    buttonTitle,
    activateSettingMode,
    setSettingError,
    removeSettingError,
    setSettingsParams,
}) => {
    const [minCounterValue, setMinValue] = useState<number>(minSettingsValue);
    const [maxCounterValue, setMaxValue] = useState<number>(maxSettingsValue);
    const [minInputError, setMinInputError] = useState<boolean>(false);
    const [maxInputError, setMaxInputError] = useState<boolean>(false);

    useEffect(() => {
        setMinValue(minSettingsValue);
        setMaxValue(maxSettingsValue);
    }, [minSettingsValue, maxSettingsValue]);

    const changeMinCounterValue = (value: string) => {
        // Сетаем значение только один раз (если ошибки не было, если ошибка была, то нет смысла сетать ее ещё раз)
        if ((+value < 0 || +value >= maxCounterValue) && !minInputError) {
            setMinInputError(true);
            setSettingError();
            +value >= maxCounterValue && setMaxInputError(true);
        }
        // Сетаем значение только один раз если возвращаемся в валидное состояние
        if (+value >= 0 && +value < maxCounterValue && minInputError) {
            setMinInputError(false);
            setMaxInputError(false);
            removeSettingError();
        }
        // Устанавливаем режим настроек в том случае если они не были установлены
        if (!isSettingMode) {
            activateSettingMode();
        }
        // Сетаем новое значение
        setMinValue(+value);
    };

    const changeMaxCounterValue = (value: string) => {
        // Сетаем ошибку
        if ((+value <= minCounterValue || +value < 0) && !maxInputError) {
            setMaxInputError(true);
            !minInputError && setMinInputError(true);
            setSettingError();
        }
        // Убираем состояние ошибки
        if (+value > minCounterValue && +value > 0 && maxInputError) {
            setMaxInputError(false);
            if (minCounterValue >= 0) {
                setMinInputError(false);
                removeSettingError();
            }
        }
        // Устанавливаем режим настроек в том случае если они не были установлены
        if (!isSettingMode) {
            activateSettingMode();
        }
        // Сетаем значение
        setMaxValue(+value);
    };

    const setSettingsParamsHandler = () => {
        setSettingsParams(minCounterValue, maxCounterValue);
    };

    const btnIsDisabled = !isSettingMode || minInputError || maxInputError;

    return (
        <div className={"elem"}>
            <SettingsInfo
                minInputTitle={minInputTitle}
                maxInputTitle={maxInputTitle}
                minValue={minCounterValue}
                maxValue={maxCounterValue}
                minInputError={minInputError}
                maxInputError={maxInputError}
                changeMinCounterValue={changeMinCounterValue}
                changeMaxCounterValue={changeMaxCounterValue}
            />
            <div className={"btnWrapper"}>
                <SuperButton
                    title={buttonTitle}
                    disable={btnIsDisabled}
                    callback={setSettingsParamsHandler}
                />
            </div>
        </div>
    );
};
