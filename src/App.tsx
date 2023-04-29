import React, {useState} from 'react';
import './App.css';
import {CounterInfo} from './components/CounterInfo/CounterInfo';
import {CounterController} from './components/CounterController/CounterController';
import {SettingsInfo} from './components/SettingsInfo/SettingsInfo';
import {SuperButton} from './components/SuperButton/SuperButton';


const App = () => {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const increaseCounter = () => {
        if (counter < maxCounterValue) {
            setCounter(counter + 1);
        }
    };
    const resetCounter = () => {
        setCounter(minCounterValue);
    };


    /*  const changeMinCounterValue = (value: string) => {
          setMinCounterValue(+value);
          if (!isSettingMode) {
              setIsSettingMode(true)
          }
      };

      const changeMaxCounterValue = (value: string) => {
          setMaxCounterValue(+value);
          if (!isSettingMode) {
              setIsSettingMode(true)
          }
      };*/

    /*   if (minCounterValue < 0) {
           setError(true)
       } else if (minCounterValue >= maxCounterValue) {
           setError(true)
       }*/

    const setSettingMode = () => {
        setIsSettingMode(true)
    }

    const incDisable = counter === maxCounterValue;
    const resDisable = counter === minCounterValue;

    return (
        <div className="App">
            <div className={'elem'}>
                <SettingsInfo
                    minInputTitle={'min value:'}
                    maxInputTitle={'max value:'}
                    setSettingMode={setSettingMode}
                    isSettingMode={isSettingMode}
                    /*                    minValue={minCounterValue}
                                        maxValue={maxCounterValue}*/
                    /*changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}*/
                />
                <div className={'btnWrapper'}>
                    <SuperButton
                        title={'Set'}
                        disable={error}
                        callback={() => setIsSettingMode(false)}
                    />
                </div>
            </div>

            <div className={'elem'}>
                <CounterInfo counter={counter} isLimit={incDisable} isSettingMode={isSettingMode}  error={error} />
                <CounterController
                    incDisable={incDisable}
                    resDisable={resDisable}
                    increaseCounter={increaseCounter}
                    resetCounter={resetCounter}
                />
            </div>
        </div>
    );
};

export default App;
