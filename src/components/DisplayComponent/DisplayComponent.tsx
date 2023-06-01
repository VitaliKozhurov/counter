import React from 'react';
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

export const DisplayComponent = () => {
    const dispatch = useDispatch();

    const {
        counterValue,
        minCounterValue,
        maxCounterValue
    } = useSelector<AppRootState, CounterValueStateType>((state) => state.counter);

    const {settingMode, settingError} = useSelector<AppRootState, SettingsStateType>((state) => state.settings);

    // Переменные для определения состояния кнопок и лимитного значения
    const isLimit = counterValue === maxCounterValue;
    const incButtonIsDisabled = counterValue === maxCounterValue || settingMode;
    const resButtonIsDisabled = counterValue === minCounterValue || settingMode;

    const increaseCounter = () => {
        dispatch(increaseCounterValueAC());
    };
    const resetCounter = () => {
        dispatch(resetCounterValueAC());
    };

    return (
        <div className={'elem'}>
            <CounterInfo
                counter={counterValue}
                isLimit={isLimit}
                isSettingMode={settingMode}
                isError={settingError}
            />
            <CounterController
                incButtonIsDisabled={incButtonIsDisabled}
                resButtonIsDisabled={resButtonIsDisabled}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
};
