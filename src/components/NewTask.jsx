import React, {useState} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {updateTasks, updateColumns} from '../redux/actions';
import shortid from 'shortid';

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

const NewTask = (
    {
        columnId,
        updateTasks,
        tasks,
        updateColumns,
        columns

    }) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');

    const addNewTaskInRender = () => {
        const index = tasks.length;
        console.log('index', index)
        console.log(tasks[index]);

       
};

    const createNewTask = (value, rowId) => {
        const newObj = {
            id: shortid.generate(),
            row: rowId,
            seq_num: 0,
            text: value
            };
            console.log(newObj);
        const result = [...tasks, newObj];
        updateTasks(result);
         const newColumn = {
            ...columns[columnId],
            taskIds: [...columns[columnId].taskIds, newObj.id]
            };
         const newobjColumns = {...columns,[columnId]: newColumn }; 
         updateColumns(newobjColumns);

    }

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmmit = e => {
        e.preventDefault();
        createNewTask(inputValue,columnId.slice(-1));
        setInputValue('');
        setIsOpen(false);
        addNewTaskInRender();
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

const STP = state => (
    {
        tasks:state.tasks,
        columns:state.columns
    });

const DTP = dispatch => ({
    updateTasks: arr => dispatch(updateTasks(arr)),
    updateColumns: obj => dispatch(updateColumns(obj))
});

export default connect(STP, DTP)(NewTask);