export const initialState = {
    currentPage: "login",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};
