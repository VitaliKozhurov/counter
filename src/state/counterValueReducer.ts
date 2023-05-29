type CounterValueStateType = {
    counterValue: number;
    minCounterValue: number;
    maxCounterValue: number;
};

const increaseValueAC = () =>
    ({
        type: "INCREASE-COUNTER-VALUE",
    } as const);

const resetCounterValueAC = () =>
    ({
        type: "RESET-COUNTER-VALUE",
    } as const);

type CounterActionsType =
    | ReturnType<typeof increaseValueAC>
    | ReturnType<typeof resetCounterValueAC>;

const initialState = {
    counterValue: 0,
    minCounterValue: 0,
    maxCounterValue: 5,
};

export const counterValueReducer = (
    state: CounterValueStateType = initialState,
    action: CounterActionsType
) => {
    switch (action.type) {
        case "INCREASE-COUNTER-VALUE":
            return { ...state, counterValue: state.counterValue + 1 };
        case "RESET-COUNTER-VALUE":
            return {
                ...state,
                couterValue: state.minCounterValue,
            };
        default:
            return state;
    }
};
