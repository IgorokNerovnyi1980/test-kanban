import React, {Component} from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
//components
import Task from './Task';


const Wrapper = styled.div`
    width:150px;
    border:1px solid grey;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

const TaskList = styled.div`
    width:135px;
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid grey;
    padding:5px;


`;

class Column extends Component{

    render(){
        const {
            column = {},
            tasks = [],
        } = this.props
        return(
            <Wrapper>
                <h2>{column.title}</h2>
                <Droppable droppableId={column.id}>
                    {(provided) => (
                    <TaskList
                       ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map( ({text,id},index) => (
                            <Task 
                                key={id}
                                text={text}
                                id={id}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                    )}
                </Droppable>
            </Wrapper>
        )
    }
}

export default Column;