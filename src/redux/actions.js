// import axios from 'axios';
import {Type} from './types';

// UPDATE_COLUMN UPDATE_TASKS

function putColumnsInState(obj) {
    return {type: Type.UPDATE_COLUMN, payload: obj};
};

function putTasksInState(arr) {
    return {type: Type.UPDATE_TASKS, payload: arr};
};

function test(str) {
    return {type: Type.GET_TEST, payload: str};
};


export const updateColumns = (obj) => {

    return async function (dispatch) {
        
            dispatch(putColumnsInState(obj));
    };
}

export const getTest = function () {

    return async function (dispatch) {
        const result = {status:200, text:'test in store'}
        if (result.status === 200) {
            dispatch(test(result.text));
        }
    };
};
