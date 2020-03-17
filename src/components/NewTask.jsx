import React, {useState} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Form = styled.form`
    width:100%;
    margin-top:10px;
    padding:5px 10px;
    display:flex;
    flex-direction:column;
    align-items:center;   
    textArea{
        padding:5px;
        min-width:100%;
        min-height:100px;
        resize:none;
        background-color:${variables.textAreaBG};
        color:${variables.secondaryClr};
        
    };
`;

const BtnBox = styled.div`
    width:100%;
    margin-top:10px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const Btn = styled.button`
    min-width: ${props => props.width ? '60%': '10%'};
    height:40px;
    background-color:${props => props.bg ? `${variables.textAreaBG}`: `${variables.secondaryBG}`};
    margin-left:${props => props.left ? '5px' : 'unset'};
    display:flex;
    justify-content:${props => props.center ? 'center': 'flex-start'};
    align-items:center;
    color:${variables.secondaryClr};
    cursor:pointer;
    transition:0.2s;
    :hover{
        background-color:${props => props.hover ? `${variables.taskBG}` : 'unset'};
    }
    p{
        padding-left:10px;
    }
`;

const Icon = styled.span`
    font-size:${variables.iconFZ};
`;

const NewTask = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmmit = e => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue('');
        setIsOpen(false);
    };

    const changeInputValue = e => {
        setInputValue(e.target.value);
    };

    return(
        
            isOpen ? 
                <Form onSubmit={handleSubmmit}>
                    <textarea
                        onChange={changeInputValue}
                        value={inputValue}
                    />
                    <BtnBox>
                        <Btn 
                            type='submit'
                            width 
                            bg
                            center
                            hover
                            
                        >
                            Добавить карточку
                        </Btn>
                        <Btn 
                            left
                            hover
                            center
                            onClick={handleClose}
                        >
                            <Icon>&#215;</Icon>
                        </Btn>
                    </BtnBox>
                </Form> 
            : 
            <Btn onClick={handleOpen} >
                <Icon>&#43;</Icon>
            <p>Добавить карточку</p>
            </Btn>
        )
};
export default NewTask;