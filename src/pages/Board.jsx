import React, {Component} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {onDragEnd} from '../redux/actions';
import {DragDropContext} from 'react-beautiful-dnd';
import {testData} from '../constants';
//Component
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
    state = {
        render: testData.render,
        tasks:testData.tasks,
        columns:testData.columns
    };

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        const {columns } = this.state;

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
            const newState = {...this.state, columns: {...this.state.columns, [newColumn.id]:newColumn }};
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
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]:newStart,
                [newFinish.id]:newFinish  
            }};

        this.setState(newState);
    }
    render(){
        const {state:{
                render,
                tasks,
                columns },
                onDragEnd } = this;

        return(
            <Wrapper>
                <Box>
                <DragDropContext
                     onDragEnd={onDragEnd}
                    >
                    {render.map(columnName =>(
                        <Column 
                            key={columnName}
                            columnId={columns[columnName].id}
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
    onDragEnd: result => dispatch(onDragEnd(result))
});

export default connect(STP, DTP)(Board);