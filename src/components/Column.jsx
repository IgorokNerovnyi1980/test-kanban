import React, {Component} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {Droppable} from 'react-beautiful-dnd';
//components
import Task from './Task';
import NewTask from './NewTask';

const Wrapper = styled.div`
    width:20%;
    min-width:100px;
    min-height:30px;
    background-color:${variables.secondaryBG};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .taskBox{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

const Title = styled.div`
    width:100%;
    padding:10px 0;
    background-color:${props => props.bgTitle};
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size:${variables.titleFZ};
    h3{
        padding-left:10px;  
    }
    p{
        padding-left:5px; 
    }  
`;

class Column extends Component{
    render(){
       const {
        title = 'default',
        bgTitle = `${variables.accentBG}`,
        tasks = [],
        columnId = ''

        } = this.props 

        return(
            <Wrapper>
                <Title bgTitle={bgTitle}>
                    <h3>{title}</h3>
                    {tasks.length === 0 ? null : <p>({tasks.length})</p>}
                </Title>
                <Droppable droppableId={columnId}>
                    {(provided) => (
                        <div className="taskBox"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                        
                                {tasks && tasks.map(({id, text},index)=> (
                                    <Task 
                                        key={id}
                                        id={id}
                                        text={text}
                                        index={index}
                                    />
                                    ))}
                            {provided.placeholder}
                        </div>
                        
                    )}
                </Droppable>
                <NewTask />
            </Wrapper>
        )
    }
};

export default Column;