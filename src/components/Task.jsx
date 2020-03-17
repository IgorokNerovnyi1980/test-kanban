import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.div`
    width:95%;
    min-height:50px;
    background-color:black;
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

const Task = (
    {
        id ='test',
        text = 'default'
    }) => {
        return(
            <Wrapper>
                <Content>
                    <p><span>id:</span> {id}</p>
                    <p>{text}</p>
                </Content>
            </Wrapper>
        )
    };

    export default Task;