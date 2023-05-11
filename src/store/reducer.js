
const initialState = {
    contents: null,
    clientWidth: null,
    clientHeight: null,
}

const reducer = (state = initialState, action = '') => {
    console.log("🚀 ~ file reducer.js:7 ~ reducer ~ action:", action)
    switch (action.type) {
        case 'SET_WINDOW_SIZE':
            return {
                ...state,
                clientWidth: action.payload.width,
                clientHeight: action.payload.height,
            };
        case 'SET_ALL_CONTENTS':
            return {
                ...state,
                contents: action.payload,
            };
        default:
            return state;
    }
}

export { reducer }