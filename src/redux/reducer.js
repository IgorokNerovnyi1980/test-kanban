import {Type} from './types';

const initialState = {
    tasks: [
        {id: '0', row: "1", seq_num: 0, text: "redux 2" },
        {id: '1', row: "0", seq_num: 0, text: "redux 3" },
        {id: '2', row: "0", seq_num: 0, text: "redux 4" },
        {id: '3', row: "2", seq_num: 0, text: "redux 6" },
        {id: '4', row: "2", seq_num: 0, text: "redux 7" },
        {id: '5', row: "2", seq_num: 0, text: "redux 8" },
        {id: '6', row: "2", seq_num: 0, text: "redux 9" },
    ],

    columns:{
        row_0:{title:'ON-HOLD', bg: '#fb7e46', id:'0', taskIds:[] },
        row_1:{title:'IN-PROGRESS', bg: '#2a92bf', id:'1', taskIds:[]},
        row_2:{title:'NEEDS-REVIEW', bg: '#f4ce46', id:'2', taskIds:[]},
        row_3:{title:'APPROVED', bg: '#00b961', id:'3', taskIds:[]}
    }
    ,
    render:[ 'row_0', 'row_1', 'row_2', 'row_3' ],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.UPDATE_COLUMN:
            return{
                ...state,
                columns:action.payload
            };
        case Type.UPDATE_TASKS:
            return{
                ...state,
                tasks:action.payload
            };
        default:
            return state;
    }
};
export default reducer;