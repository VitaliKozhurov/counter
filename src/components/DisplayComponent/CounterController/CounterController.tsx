import React, {FC} from 'react';
import {SuperButton} from '../../UI/SuperButton/SuperButton';
import s from './CounterControlle.module.css';

type CounterControllerPropsType = {
    incButtonIsDisabled: boolean;
    resButtonIsDisabled: boolean;
    increaseCounter: () => void;
    resetCounter: () => void;
};

export const CounterController: FC<CounterControllerPropsType> = ({
                                                                     incButtonIsDisabled,
                                                                     resButtonIsDisabled,
                                                                     increaseCounter,
                                                                     resetCounter,
                                                                 }) => {
    return (
        <div className={s.body}>
            <SuperButton
                title={'Increase'}
                disabled={incButtonIsDisabled}
                onClick={increaseCounter}
            />
            <SuperButton
                title={'Reset'}
                disabled={resButtonIsDisabled}
                onClick={resetCounter}
            />
        </div>
    );
};
