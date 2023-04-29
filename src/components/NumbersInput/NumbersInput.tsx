import React, {ChangeEvent, FC} from 'react';
import s from './NumbersInput.module.css';

type NumbersInputType = {
    title: string;
    value: number;
    error: boolean;
    callback: (value: string) => void;
};

export const NumbersInput: FC<NumbersInputType> = ({
                                                       title,
                                                       value, error,
                                                       callback,
                                                   }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.value);
        console.log(error)
    };
    return (
        <div className={s.body}>
            <span className={s.text}>{title}</span>
            <input
                className={s.input + ' ' + (error ? s.error : '')}
                value={value}
                type="number"
                onChange={onChangeHandler}
            />
        </div>
    );
};
