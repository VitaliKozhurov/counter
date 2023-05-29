type SettingsStateType = {
    settingMode: boolean;
    settingError: boolean;
};

const changeSettingModeAC = (settingMode: boolean) =>
    ({
        type: "CHANGE-SETTING-MODE",
        payload: { settingMode },
    } as const);

const changeSettingErrorAC = (errorMode: boolean) =>
    ({
        type: "CHANGE-SETTING-ERROR",
        payload: { errorMode },
    } as const);

type SettingsActionsType =
    | ReturnType<typeof changeSettingModeAC>
    | ReturnType<typeof changeSettingErrorAC>;

const initialState: SettingsStateType = {
    settingMode: false,
    settingError: false,
};

export const settingsReducer = (
    state: SettingsStateType = initialState,
    action: SettingsActionsType
) => {
    switch (action.type) {
        case "CHANGE-SETTING-MODE":
            return { ...state, settingMode: action.payload.settingMode };

        case "CHANGE-SETTING-ERROR":
            return { ...state, settingError: action.payload.errorMode };

        default:
            return state;
    }
};
