import {Type} from './types';

const initialState = {
    test: null,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TEST:
            return { 
                ...state,
                test: action.payload
            };
        default:
            return state;
    }
};
export default reducer;