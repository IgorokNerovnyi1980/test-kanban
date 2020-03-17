import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
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

const testColumns = [
    {title:'ON-HOLD', bg: '#fb7e46', id:'1', tasks:[{text: 'werwd fsde twsf', id:'w1'}]},
    {title:'IN-PROGRESS', bg: '#2a92bf', id:'2', tasks:[]},
    {title:'NEEDS-REVIEW', bg: '#f4ce46', id:'3', tasks:[{text: 'wdfg', id:'w3'}, {text: 'sdfhjjkjky', id:'w32'}]},
    {title:'APPROVED', bg: '#00b961', id:'4', tasks:[{text: 'wefjghjk dfhdgcfxs sdfgfd sgb vettr dgfdfg efgef g', id:'w4'}]}
];

const Board = () => {

    return(
        <Wrapper>
            <Box>
                {testColumns && testColumns.map(({title, bg, id, tasks}) =>(
                    <Column 
                        key={id}
                        bgTitle={bg}
                        title={title}
                        tasks={tasks}
                    />
                ))}
            </Box>
        </Wrapper>
    )
};

export default Board;