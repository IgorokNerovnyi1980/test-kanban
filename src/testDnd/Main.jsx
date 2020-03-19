import React, {Component} from 'react';
import styled from 'styled-components';
import {initialData} from './data';
import {DragDropContext} from 'react-beautiful-dnd';
//components
import Column from './Column';

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    padding:20px;
    background-color:darkblue;
    display:flex;
    justify-content:space-evenly;

`;
class MainPage extends Component{
    state = initialData;

    onDragEnd = result => {
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

    render(){
        const {state, onDragEnd } = this;

        console.log('state', state)
        
        // console.log(state.columns['column-1'].taskIds);

        return(
            <Wrapper>
                <DragDropContext
                 onDragEnd={onDragEnd}
                >
    
                {state.columnOrder.map(id => {
                    const column = state.columns[id];
                    const tasks = column.taskIds.map(id => state.tasks[id]);
    
                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
                </DragDropContext>
            </Wrapper>
        )

    }
}

// const MainPage = () =>{

//     const [ state, setState ] = useState(initialData);

//     const onDragEnd = result => {
//         const { destination, source, draggableId } =result;

//         if(!destination) return;
//         if(
//             destination.droppableId === source.droppableId &&
//             destination.index === source.index
//         ){
//             return;
//         };

//         const column = state.columns[source.droppableId];
//         const newTaskIds = Array.from(column.taskIds);
//         newTaskIds.splice(source.index,1);
//         newTaskIds.splice(destination.index, 0, draggableId);
//         const newColumn = {
//             ...column,
//             taskIds:newTaskIds,
//         };
//         setState({...state, [newColumn.id]:newColumn});
//     }

//     console.log(state.columns['column-1'].taskIds);

//     return(
//         <Wrapper>
//             <DragDropContext
//              onDragEnd={onDragEnd}
//             >

//             {state.columnOrder.map(id => {
//                 const column = state.columns[id];
//                 const tasks = column.taskIds.map(id => state.tasks[id]);

//                 return <Column key={column.id} column={column} tasks={tasks} />;
//             })}
//             </DragDropContext>
//         </Wrapper>
//     )
// };
export default MainPage;