import React, { FC } from "react";
import s from "./CounterInfo.module.css";

type CounterInfoPropsType = {
    counter: number;
    isLimit: boolean;
};

export const CounterInfo: FC<CounterInfoPropsType> = ({ counter, isLimit }) => {
    const style = isLimit ? s.body + " " + s.limit : s.body;
    return <div className={style}>{counter}</div>;
};
