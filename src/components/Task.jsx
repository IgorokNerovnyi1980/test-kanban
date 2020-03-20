import React, {Component} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {Draggable}from 'react-beautiful-dnd';

const Wrapper = styled.div`
    width:95%;
    min-height:50px;
    background-color:${variables.taskBG};
    margin-top:10px;
    :last-child{
        margin-bottom:10px;
    }
`;
const Content = styled.div`
    padding:5px;
    span{
        font-weight:bold;
        color:${variables.mainClr};
    }
    p{
        padding-top:10px;
        color:${variables.secondaryClr};
        :last-child{
            padding-bottom:10px;
        }
    }
`;

class Task extends Component{

    render(){
        const {
            id,
            text,
            index
        } = this.props;

        return(
            <Draggable
                draggableId={id}
                index={index}
                >
                {(provided) => (
                    <Wrapper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Content>
                            <p><span>id:</span> {id}</p>
                            <p>{text}</p>
                        </Content>
                    </Wrapper>
                )}
                </Draggable>

        )

    }
};

export default Task;