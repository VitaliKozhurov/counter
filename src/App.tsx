import React, { useState } from "react";
import "./App.css";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent";
import { DisplayComponent } from "./components/DisplayComponent/DisplayComponent";
import { getFromLocalStorage, setToLocalStorage } from "./utils/utils";

const App = () => {
    // Без useEffect избавляемся от лишней перерисовки
    const values = getFromLocalStorage();
    let min: number = 0;
    let max: number = 5;
    if (values) {
        const { minSettingsValue, maxSettingsValue } = values;
        min = minSettingsValue;
        max = maxSettingsValue;
    }

    return (
        <div className="App">
            <SettingsComponent />
            <DisplayComponent />
        </div>
    );
};

export default App;
