const HANDLE_TOGGLE = open => ({
    type: 'HANDLE_TOGGLE',
    payload: { open },
});

export const handleToggle = open => {
    return (dispatch, getState) => {
        dispatch(HANDLE_TOGGLE(open));
    };
};