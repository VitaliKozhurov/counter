export type CounterValueStateType = {
    counterValue: number;
    minCounterValue: number;
    maxCounterValue: number;
};

export const setCounterValueAC = (value: number) =>
    ({
        type: "SET-COUNTER-VALUE",
        payload: { value },
    } as const);
export const increaseCounterValueAC = () =>
    ({
        type: "INCREASE-COUNTER-VALUE",
    } as const);

export const resetCounterValueAC = () =>
    ({
        type: "RESET-COUNTER-VALUE",
    } as const);

export const setMinCounterValueAC = (value: number) =>
    ({
        type: "SET-MIN-COUNTER-VALUE",
        payload: { value },
    } as const);

export const setMaxCounterValueAC = (value: number) =>
    ({
        type: "SET-MAX-COUNTER-VALUE",
        payload: { value },
    } as const);

type CounterActionsType =
    | ReturnType<typeof setCounterValueAC>
    | ReturnType<typeof increaseCounterValueAC>
    | ReturnType<typeof resetCounterValueAC>
    | ReturnType<typeof setMinCounterValueAC>
    | ReturnType<typeof setMaxCounterValueAC>;

const initialState: CounterValueStateType = {
    counterValue: 0,
    minCounterValue: 0,
    maxCounterValue: 5,
};

export const counterValueReducer = (
    state: CounterValueStateType = initialState,
    action: CounterActionsType
): CounterValueStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE":
            return { ...state, counterValue: action.payload.value };
        case "INCREASE-COUNTER-VALUE":
        case "RESET-COUNTER-VALUE":
        case "SET-MIN-COUNTER-VALUE":
        case "SET-MAX-COUNTER-VALUE":
        case "INCREASE-COUNTER-VALUE":
            return { ...state, counterValue: state.counterValue + 1 };
        case "RESET-COUNTER-VALUE":
            return {
                ...state,
                counterValue: state.minCounterValue,
            };
        case "SET-MIN-COUNTER-VALUE":
            return {
                ...state,
                minCounterValue: action.payload.value,
            };
        case "SET-MAX-COUNTER-VALUE":
            return {
                ...state,
                maxCounterValue: action.payload.value,
            };
        default:
            return state;
    }
};
