import React from 'react';
import styled from 'styled-components';

// styled component
const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-items: center;
    margin-bottom: 30px;
`;

const InputText = styled.input`
    padding: 5px 8px;
    width: 502px;
    font-size: 24px;

`;

const Button = styled.button`
    padding: 10px 19px;
    margin-left: 5px;
    font-size: 24px;
    background-color: #61dafb;
    border: none;
    color: #ffff;

`


const InputTodo = ({ inputText, setInputText, setTodos, todos }) => {

    // Handle action
    const handleInputText = (e) => {
        setInputText(e.target.value);
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputText === '') {
            alert("Hei! it's empty!");
            return
        }
        setTodos([
            ...todos, 
            {
                id: Math.random() * 100,
                title: inputText,
                completed: false
            }
        ]);
        setInputText('');
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            handleAddTodo(e)
        }
    }

    return (
        <Form>
            <InputText onKeyPress={handleKeyPress} onChange={handleInputText} placeholder="What will we do next?" value={inputText}/>
            <Button onClick={handleAddTodo}>+</Button>
        </Form>
    )
}

export default InputTodo;
