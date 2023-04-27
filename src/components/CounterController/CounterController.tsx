import React from "react";
import { SuperButton } from "../SuperButton/SuperButton";
import s from "./CounterControlle.module.css";

export default function CounterController() {
    return (
        <div className={s.body}>
            <SuperButton
                title={"Increase"}
                callback={() => console.log("Inc")}
            />
            <SuperButton title={"Reset"} callback={() => console.log("Res")} />
        </div>
    );
}
