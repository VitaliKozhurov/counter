import React, { FC, useState } from "react";
import { SettingsInfo } from "./SettingsInfo/SettingsInfo";
import { SuperButton } from "../UI/SuperButton/SuperButton";
import { useSelector } from "react-redux";
import { AppRootState } from "../../state/store";
import { useDispatch } from "react-redux";
import {
    changeSettingErrorAC,
    changeSettingModeAC,
} from "../../state/settingsModeReducer";
import {
    setCounterValueAC,
    setMaxCounterValueAC,
    setMinCounterValueAC,
} from "../../state/counterValueReducer";

type SettingsComponentPopsType = {
    minInputTitle: string;
    maxInputTitle: string;
    buttonTitle: string;
};

export const SettingsComponent: FC<SettingsComponentPopsType> = ({
    minInputTitle,
    maxInputTitle,
    buttonTitle,
}) => {
    const dispatch = useDispatch();
    const appState = useSelector<AppRootState>(
        (state) => state
    ) as AppRootState;

    const { minCounterValue, maxCounterValue } = appState.counter;
    const { settingMode } = appState.settings;

    const [minValue, setMinValue] = useState<number>(minCounterValue);
    const [maxValue, setMaxValue] = useState<number>(maxCounterValue);

    const [minInputError, setMinInputError] = useState<boolean>(false);
    const [maxInputError, setMaxInputError] = useState<boolean>(false);

    const changeMinCounterValue = (value: string) => {
        const newValue = Number(value);
        // Сетаем значение только один раз (если ошибки не было, если ошибка была, то нет смысла сетать ее ещё раз)
        if ((newValue < 0 || newValue >= maxValue) && !minInputError) {
            setMinInputError(true);
            newValue >= maxValue && setMaxInputError(true);
            dispatch(changeSettingErrorAC(true));
        }
        // Сетаем значение только один раз если возвращаемся в валидное состояние
        if (newValue >= 0 && newValue < maxValue && minInputError) {
            setMinInputError(false);
            setMaxInputError(false);
            dispatch(changeSettingErrorAC(false));
        }
        // Устанавливаем режим настроек в том случае если они не были установлены
        if (!settingMode) {
            dispatch(changeSettingModeAC(true));
        }
        // Сетаем новое значение
        setMinValue(newValue);
    };

    const changeMaxCounterValue = (value: string) => {
        const newValue = Number(value);
        // Сетаем ошибку
        if ((newValue <= minValue || newValue < 0) && !maxInputError) {
            setMaxInputError(true);
            !minInputError && setMinInputError(true);
            dispatch(changeSettingErrorAC(true));
        }
        // Убираем состояние ошибки
        if (newValue > minValue && newValue > 0 && maxInputError) {
            setMaxInputError(false);
            if (minValue >= 0) {
                setMinInputError(false);
                dispatch(changeSettingErrorAC(false));
            }
        }
        // Устанавливаем режим настроек в том случае если они не были установлены
        if (!settingMode) {
            dispatch(changeSettingModeAC(true));
        }
        // Сетаем значение
        setMaxValue(newValue);
    };

    const setSettingsParamsHandler = () => {
        dispatch(setCounterValueAC(minValue));
        dispatch(setMinCounterValueAC(minValue));
        dispatch(setMaxCounterValueAC(maxValue));
        dispatch(changeSettingModeAC(false));
        /* setToLocalStorage(minValue, maxValue); */
    };

    const btnIsDisabled = !settingMode || minInputError || maxInputError;

    return (
        <div className={"elem"}>
            <SettingsInfo
                minInputTitle={minInputTitle}
                maxInputTitle={maxInputTitle}
                minValue={minValue}
                maxValue={maxValue}
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
