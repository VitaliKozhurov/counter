import React, { FC, useState } from "react";
import { SettingsInfo } from "./SettingsInfo/SettingsInfo";
import { SuperButton } from "../UI/SuperButton/SuperButton";

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

    const changeMinCounterValue = (value: string) => {
        // Проверка что значение двух инпутов равны
        /* if (+value === maxCounterValue) {
            setMinInputError(true);
            setMaxInputError(true);
            setSettingError();
        } */
        // Сетаем значение только один раз (если ошибки не было, если ошибка была, то нет смысла сетать ее ещё раз)
        if ((+value < 0 || +value >= maxCounterValue) && !minInputError) {
            setMinInputError(true);
            setSettingError();
        }

        if (+value >= maxCounterValue && !minInputError) {
            setMinInputError(true);
            setMaxInputError(true);
            setSettingError();
        }

        // Тоже самое если возвращаемся в валидное состояние
        if (+value >= 0 && +value < maxCounterValue && minInputError) {
            setMinInputError(false);
            removeSettingError();
        }
        // Устанавливаем режим настроек если они не были установлены
        if (!isSettingMode) {
            activateSettingMode();
        }
        setMinValue(+value);
    };

    const changeMaxCounterValue = (value: string) => {
        if (+value < minCounterValue && !maxInputError) {
            setMaxInputError(true);
            setSettingError();
        }
        if (+value > minCounterValue && maxInputError) {
            setMaxInputError(false);
            removeSettingError();
        }
        if (!isSettingMode) {
            activateSettingMode();
        }
        setMaxValue(+value);
    };

    const setSettingsParamsHandler = () => {
        setSettingsParams(minCounterValue, maxCounterValue);
    };

    /* if (minInputError || maxInputError) {
        setSettingError();
    } else {
        removeSettingError();
    } */

    const btnIsDisabled = minInputError || maxInputError;

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
