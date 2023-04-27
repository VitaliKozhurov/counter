import React, { FC } from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    title: string;
    callback: () => void;
};

export const SuperButton: FC<SuperButtonPropsType> = ({ title, callback }) => {
    return (
        <button className={s.btn} onClick={callback}>
            {title}
        </button>
    );
};
