import React, {useEffect, useState} from 'react';
import {CounterInfo} from './CounterInfo/CounterInfo';
import {CounterController} from './CounterController/CounterController';
import {AppRootState} from '../../state/store';
import {useDispatch, useSelector} from 'react-redux';
import {
    CounterValueStateType,
    increaseCounterValueAC,
    resetCounterValueAC,
} from '../../state/counterValueReducer';
import {SettingsStateType} from '../../state/settingsModeReducer';
import s from './DisplayComponent.module.css';

export const DisplayComponent = () => {
    const [isLimit, setIsLimit] = useState<boolean>(false);
    const [incDisable, setIncDisable] = useState<boolean>(false);
    const [resDisable, setResDisable] = useState<boolean>(true);

    const dispatch = useDispatch();
    const {
        counterValue,
        minCounterValue,
        maxCounterValue
    } = useSelector<AppRootState, CounterValueStateType>((state) => state.counter);
    const {settingMode, settingError} = useSelector<AppRootState, SettingsStateType>((state) => state.settings);

    useEffect(() => {
        setIsLimit(counterValue === maxCounterValue);
        setIncDisable(counterValue === maxCounterValue || settingMode);
        setResDisable(counterValue === minCounterValue || settingMode);
    }, [counterValue, minCounterValue, maxCounterValue, settingMode])


    const increaseCounter = () => {
        dispatch(increaseCounterValueAC());
    };
    const resetCounter = () => {
        dispatch(resetCounterValueAC());
    };

    return (
        <div className={s.elem}>
            <CounterInfo
                counter={counterValue}
                isLimit={isLimit}
                isSettingMode={settingMode}
                isError={settingError}
            />
            <CounterController
                incButtonIsDisabled={incDisable}
                resButtonIsDisabled={resDisable}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};
