import React, {FC} from 'react';
import s from './CounterInfo.module.css';

type CounterInfoPropsType = {
    counter: number;
    isLimit: boolean;
    isSettingMode: boolean;
    error: boolean
};

export const CounterInfo: FC<CounterInfoPropsType> = ({counter, isLimit, isSettingMode, error}) => {
    const style =`${s.body} ${isLimit?s.limit:''} ${isSettingMode?s.settins:''} ${error?s.error:''}`;

    let message: number | string = counter;

    if (isSettingMode) {
        message = 'Settings mode';
    }
    if (error) {
        message = 'Incorrect value';
    }

    return <div className={style}>{message}</div>;
};
