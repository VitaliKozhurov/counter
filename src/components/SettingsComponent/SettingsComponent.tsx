import React, {useEffect, useState} from 'react';
import {SettingsInfo} from './SettingsInfo/SettingsInfo';
import {SuperButton} from '../UI/SuperButton/SuperButton';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../state/store';
import {useDispatch} from 'react-redux';
import {
    changeSettingErrorAC,
    changeSettingModeAC,
} from '../../state/settingsModeReducer';
import {
    setCounterValueAC,
    setMaxCounterValueAC,
    setMinCounterValueAC,
} from '../../state/counterValueReducer';
import s from './SettingsComponents.module.css';
import {setToLocalStorage} from '../../utils/utils';

export const SettingsComponent = () => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const dispatch = useDispatch();

    const minCounterValue = useSelector<AppRootState, number>((state) => state.counter.minCounterValue);
    const maxCounterValue = useSelector<AppRootState, number>((state) => state.counter.maxCounterValue);
    const settingMode = useSelector<AppRootState, boolean>((state) => state.settings.settingMode);

    // Стейты для изменеия значений в инпутах
    const [minValue, setMinValue] = useState<number>(minCounterValue);
    const [maxValue, setMaxValue] = useState<number>(maxCounterValue);

    // Стейты для обработки ошибок в инпутах
    const [minInputError, setMinInputError] = useState<boolean>(false);
    const [maxInputError, setMaxInputError] = useState<boolean>(false);

    useEffect(()=>{
        setButtonDisabled(!settingMode || minInputError || maxInputError);
    },[settingMode,minInputError,maxInputError])

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

        setToLocalStorage({
            counter: {
                counterValue: minValue,
                minCounterValue: minValue,
                maxCounterValue: maxValue,
            },
            settings: {settingMode: false, settingError: false},
        });
    };

    return (
        <div className={s.elem}>
            <SettingsInfo
                minInputTitle={'Min Value:'}
                maxInputTitle={'Max Value:'}
                minValue={minValue}
                maxValue={maxValue}
                minInputError={minInputError}
                maxInputError={maxInputError}
                changeMinCounterValue={changeMinCounterValue}
                changeMaxCounterValue={changeMaxCounterValue}
            />
            <div className={s.btnWrapper}>
                <SuperButton
                    title={'Set'}
                    disabled={buttonDisabled}
                    onClick={setSettingsParamsHandler}
                />
            </div>
        </div>
    );
};
