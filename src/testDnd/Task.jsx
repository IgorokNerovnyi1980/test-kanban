import React,{Component} from 'react';
import styled from 'styled-components';
import {Draggable}from 'react-beautiful-dnd';


const Wrapper = styled.div`
    width:120px;
    border:1px solid grey;
    margin-top:15px;
    text-align:center;
    :last-child{
        margin-bottom:15px;
    }
    p{
        padding:5px;
    }
`;

class Task extends Component {

    render(){
        const {
            text,
            id,
            index
        } = this.props
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
                            <p>{text}</p>      
                        </Wrapper>
                    )}
            </Draggable>
        )
    }
}


// const Task = (
//     {
//         text,
//         id,
//         index
//     }) =>{

//         console.log(index,id)

//         return(
//             <Draggable
//                 draggableId={id}
//                 index={index}
//             >
//                 {
//                     (provided) =>(
//                         <Wrapper
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         innerRef={provided.innerRef}
//                         >
//                             <p>{text}</p>      
//                         </Wrapper>
//                     )
//                 }
//             </Draggable>
//         )

// };
export default Task;