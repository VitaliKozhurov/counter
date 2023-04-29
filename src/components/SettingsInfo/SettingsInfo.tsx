import React, {FC, useState} from 'react';
import s from './SettingsInfo.module.css';
import {NumbersInput} from '../NumbersInput/NumbersInput';

type SettingsInfoType = {
    minInputTitle: string;
    maxInputTitle: string;
    isSettingMode: boolean;
    setSettingMode: () => void;
    /*    changeMinCounterValue: (value: string) => void;
        changeMaxCounterValue: (value: string) => void;*/
};

export const SettingsInfo: FC<SettingsInfoType> = ({
                                                       minInputTitle,
                                                       maxInputTitle,
                                                       isSettingMode,
                                                       setSettingMode
                                                       /*    minValue,
                                                           maxValue,*/
                                                       /*    changeMinCounterValue,
    changeMaxCounterValue,*/
                                                   }) => {
    const [minValue, setMinValue] = useState<number>(0);
    const [minValueError, setMinValueError] = useState<boolean>(false);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [maxValueError, setMaxValueError] = useState<boolean>(false);

    const changeMinCounterValue = (value: string) => {
        if ((+value < 0 || +value >= maxValue) && !minValueError) {
            alert('Error');
            setMinValueError(true);
        }

        if (+value >= 0 && +value < maxValue && minValueError) {
            alert('Not error');
            setMinValueError(false);
        }

        if (!isSettingMode) {
            setSettingMode();
        }
        setMinValue(+value);
    };

    const changeMaxCounterValue = (value: string) => {
        if (+value < minValue) {
            alert('Error')
        }
        setMaxValue(+value);
        if (!isSettingMode) {
            setSettingMode()
        }
    };

    /*    const changeMaxCounterValue = (value: string) => {
            setMaxCounterValue(+value);
            if (!isSettingMode) {
                setIsSettingMode(true)
            }
        };*/

    return (
        <div className={s.body}>
            <NumbersInput
                title={maxInputTitle}
                value={maxValue}
                error={false}
                callback={changeMaxCounterValue}
            />
            <NumbersInput
                title={minInputTitle}
                value={minValue}
                error={minValueError}
                callback={changeMinCounterValue}
            />
        </div>
    );
};
