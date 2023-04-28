import React, { ChangeEvent, FC } from "react";
import s from "./NumbersInput.module.css";

type NumbersInputType = {
    title: string;
    value: number;
    callback: (value: string) => void;
};

export const NumbersInput: FC<NumbersInputType> = ({
    title,
    value,
    callback,
}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.value);
    };
    return (
        <div className={s.body}>
            <span className={s.text}>{title}</span>
            <input
                className={s.input}
                value={value}
                type="number"
                onChange={onChangeHandler}
            />
        </div>
    );
};
