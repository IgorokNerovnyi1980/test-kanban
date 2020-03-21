import React, {Component} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import {updateColumns, updateTasksPosition} from '../redux/actions';
//Components
import Column from '../components/Column';

const Wrapper = styled.div`
    width:100vw;
    min-height:100vh ;
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:flex-start;
`;
const Box = styled.div`
    width:95vw;
    margin-top:50px;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
`;

class Board extends Component {

    newTaskPosition = (arr, columnId) => {
        const { tasks, updateTasksPosition } = this.props;
        const result = tasks.map( task => {
            const findId = arr.find(id => (id === task.id));
            const item = findId ? {...task,row:columnId} : {...task}; 
            return item;
        });

        updateTasksPosition(result);
    }

    sortTasks = () => {
        const { tasks,columns,render, updateColumns } = this.props;

        let result = {};

        render.map(column => {

            const newColumn = {
            ...columns[column],
            taskIds: tasks.filter( (task) => task.row === columns[column].id).map((task) => task.id)
            };
            return result = {...result,[column]: newColumn };       
    })

    return updateColumns(result);
};

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        const { props:{columns, updateColumns}, newTaskPosition } = this;

        if(!destination){ return;}
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        };

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];
        if(start === finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index,1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds:newTaskIds,
            };
            const newDataForState = {...columns, [`row_${newColumn.id}`]:newColumn };
            updateColumns(newDataForState);
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
        newTaskPosition(finishTaskIds,newFinish.id);

        const newDataForState = {
                ...columns,
                [`row_${newStart.id}`]:newStart,
                [`row_${newFinish.id}`]:newFinish  
            };
        updateColumns(newDataForState);
    };

    componentDidMount(){
        this.sortTasks();
    }

 
    render(){
        const {
                props:{
                    render,
                    tasks,
                    columns  
                },
                onDragEnd } = this;

                console.log(tasks)
        return(
            <Wrapper>
                <Box>
                <DragDropContext
                     onDragEnd={onDragEnd}
                    >
                    {render.map(columnName =>(
                        <Column 
                            key={columnName}
                            columnId={`row_${columns[columnName].id}`}
                            bgTitle={columns[columnName].bg}
                            title={columns[columnName].title}
                            tasks={columns[columnName].taskIds.map(id =>(
                                tasks.find(task => task.id === id)
                            ))}
                        />
                    ))}
                     </DragDropContext>
                </Box>    
            </Wrapper>
        )
    }

};

const STP = state => (
    {
        render: state.render,
        tasks:state.tasks,
        columns:state.columns
    });

const DTP = dispatch => ({
    updateColumns: obj => dispatch(updateColumns(obj)),
    updateTasksPosition: arr => dispatch(updateTasksPosition(arr))
});

export default connect(STP, DTP)(Board);