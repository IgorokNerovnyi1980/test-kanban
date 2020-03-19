import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
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

const Board = (
    {
        columns = [],
        tasksList = []
    }) => {

    return(
        <Wrapper>
            <Box>
                <DragDropContext
                    onDragStart
                    onDragUpdate
                    onDragEnd
                >
                {columns && columns.map(({title, bg, id }) =>(
                    <Column 
                        key={id}
                        bgTitle={bg}
                        title={title}
                        tasks={tasksList.filter(item => (item.row === id))}
                        id={id}
                    />
                ))}
                </DragDropContext>
            </Box>
        </Wrapper>
    )
};

const STP = state => (
    {
        columns: state.columns,
        tasksList: state.tasks
    });

// const DTP = dispatch => ({
//     fnClick: name => dispatch(handleChangeCurrentPage(name))
// });

export default connect(STP, null)(Board);