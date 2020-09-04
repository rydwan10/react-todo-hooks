import React from 'react';
import styled from 'styled-components';
// Styled Components
const TodoItem = styled.input`
    padding: 5px 8px;
    width: 400px;
    font-size: 24px;
    outline: none;
`;

const DeleteButton = styled.button`
    padding: 10px 19px;
    font-size: 16px;
    background-color: #ff4e4e;
    border: none;
    color: #ffff;
`;

const DoneButton = styled.button`
    padding: 10px 19px;
    font-size: 16px;
    margin-left: 3px;
    background-color: #58d658;
    border: none;
    color: #ffff;
`

const Container = styled.div`
    display: flex;
    padding: 3px;
    flex-direction: row;
    justify-items: center;
`;


const Todo = ({ todo }) => {
    return (
        <Container>
            <TodoItem readOnly={true} value={todo.title}/>
            <DoneButton>Done</DoneButton>
            <DeleteButton>Delete</DeleteButton>
        </Container>
    )
}

export default Todo
