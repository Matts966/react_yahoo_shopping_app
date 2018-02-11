const initialState = {
    open: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_TOGGLE':
            return {
                open: !action.payload.open
            };
        default:
            return initialState;
    }
}