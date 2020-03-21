// import axios from 'axios';
import {Type} from './types';

function putColumnsInState(obj) {
    return {type: Type.UPDATE_COLUMN, payload: obj};
};

function putTasksInState(arr) {
    return {type: Type.UPDATE_TASKS, payload: arr};
};

export const updateColumns = (obj) => {

    return async function (dispatch) {
        
            dispatch(putColumnsInState(obj));
    };
};

export const updateTasksPosition = (arr) => {
    
    return async function (dispatch) {
        
        dispatch(putTasksInState(arr));
};
};

export const updateTasks = (arr) => {
    console.log('fn')
    return async function (dispatch) {
        
        dispatch(putTasksInState(arr));
};
}