import React, { FC, useState } from "react";
import { SettingsInfo } from "./SettingsInfo/SettingsInfo";
import { SuperButton } from "../UI/SuperButton/SuperButton";
import { useSelector } from "react-redux";
import { AppRootState } from "../../state/store";
import { useDispatch } from "react-redux";
import {
    SettingsStateType,
    changeSettingErrorAC,
    changeSettingModeAC,
} from "../../state/settingsModeReducer";
import {
    CounterValueStateType,
    setCounterValueAC,
    setMaxCounterValueAC,
    setMinCounterValueAC,
} from "../../state/counterValueReducer";

export const SettingsComponent = () => {
    const dispatch = useDispatch();

    const { minCounterValue, maxCounterValue } = useSelector<
        AppRootState,
        CounterValueStateType
    >((state) => state.counter);
    const settingMode = useSelector<AppRootState, boolean>(
        (state) => state.settings.settingMode
    );

    // Стейты для изменеия значений в инпутах
    const [minValue, setMinValue] = useState<number>(minCounterValue);
    const [maxValue, setMaxValue] = useState<number>(maxCounterValue);

    // Стейты для обработки ошибок в инпутах
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
                minInputTitle={"Min Value:"}
                maxInputTitle={"Max Value:"}
                minValue={minValue}
                maxValue={maxValue}
                minInputError={minInputError}
                maxInputError={maxInputError}
                changeMinCounterValue={changeMinCounterValue}
                changeMaxCounterValue={changeMaxCounterValue}
            />
            <div className={"btnWrapper"}>
                <SuperButton
                    title={"Set"}
                    disable={btnIsDisabled}
                    callback={setSettingsParamsHandler}
                />
            </div>
        </div>
    );
};
