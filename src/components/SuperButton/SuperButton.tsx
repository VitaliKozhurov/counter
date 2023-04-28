import React, { FC } from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    title: string;
    disable: boolean;
    callback: () => void;
};

export const SuperButton: FC<SuperButtonPropsType> = ({
    title,
    disable,
    callback,
}) => {
    return (
        <button className={s.btn} disabled={disable} onClick={callback}>
            {title}
        </button>
    );
};
