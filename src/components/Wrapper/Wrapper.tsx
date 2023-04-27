import React from "react";
import s from "./Wrapper.module.css";
import CounterInfo from "../CounterInfo/CounterInfo";
import CounterController from "../CounterController/CounterController";

export default function Wrapper() {
    return (
        <div className={s.body}>
            <CounterInfo />
            <CounterController />
        </div>
    );
}
