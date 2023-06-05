import React, {FC} from 'react';
import s from './CounterInfo.module.css';

type CounterInfoPropsType = {
    counter: number;
    isLimit: boolean;
    isSettingMode: boolean;
    isError: boolean;
};

export const CounterInfo: FC<CounterInfoPropsType> = ({counter, isLimit, isSettingMode, isError,}) => {

    let message: number | string = counter;
    if (isError) {
        return <div className={s.body + ' ' + s.error}>Incorrect value</div>
    }
    if (isSettingMode) {
        return <div className={s.body + ' ' + s.settings}>Settings mode</div>
    }

    return <div className={s.body + (isLimit ? ' ' + s.limit : '')}>{message}</div>;
};
