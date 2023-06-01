import React from "react";
import "./App.css";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent";
import { DisplayComponent } from "./components/DisplayComponent/DisplayComponent";

const App = () => {
     return (
        <div className="App">
            <SettingsComponent />
            <DisplayComponent />
        </div>
    );
};

export default App;
