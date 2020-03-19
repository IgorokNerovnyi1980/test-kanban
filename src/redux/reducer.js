import {Type} from './types';

const initialState = {
    tasks: [
        {id: 0, row: "0", seq_num: 0, text: "string1" },
        {id: 1, row: "3", seq_num: 0, text: "string2" },
        {id: 2, row: "2", seq_num: 0, text: "string3" },
        {id: 3, row: "1", seq_num: 0, text: "string4" },
        {id: 4, row: "0", seq_num: 0, text: "string5" },
        {id: 5, row: "3", seq_num: 0, text: "string6" },
        {id: 6, row: "2", seq_num: 0, text: "string7" },
        {id: 7, row: "1", seq_num: 0, text: "string8" },
        {id: 8, row: "0", seq_num: 0, text: "string9" },
        {id: 9, row: "3", seq_num: 0, text: "string10" },
    ],

    columns:[
        {title:'ON-HOLD', bg: '#fb7e46', id:'0'},
        {title:'IN-PROGRESS', bg: '#2a92bf', id:'1'},
        {title:'NEEDS-REVIEW', bg: '#f4ce46', id:'2'},
        {title:'APPROVED', bg: '#00b961', id:'3'}
    ],

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