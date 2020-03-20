// import axios from 'axios';
import {Type} from './types';



function test(str) {
    return {type: Type.GET_TEST, payload: str};
};



export const getTest = function () {

    return async function (dispatch) {
        const result = {status:200, text:'test in store'}
        if (result.status === 200) {
            dispatch(test(result.text));
        }
    };
};

export const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { state } = this;

    console.log()

    if(!destination){ return;}
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ){
        return;
    };

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if(start === finish){

        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...start,
            taskIds:newTaskIds,
        };
        const newState = {...state, columns: {...state.columns, [newColumn.id]:newColumn }};
        this.setState(newState);
        return;
    }
    const startTaskIds =Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);
    const newStart = {
        ...start,
        taskIds:startTaskIds
    };

    const finishTaskIds =Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
        ...finish,
        taskIds:finishTaskIds
    };

    const newState = {
        ...state,
        columns: {
            ...state.columns,
            [newStart.id]:newStart,
            [newFinish.id]:newFinish  
        }};

    this.setState(newState);
}

