import React, { useState } from 'react'
import { MDBInput, MDBBtn, MDBRow } from 'mdb-react-ui-kit';

export default function AddTodo(props) {
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoText(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiCall = await addTodo();

    if(apiCall.status === 201){
      const newTodo = await apiCall.json();
      props.setTodosData([...props.todosData, newTodo])
    }
  }

  const addTodo = async () => {
      const callAPI = await fetch(`http://localhost:5000/api/todos`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            id: Math.round(Math.random() * (999999 - 1) + 1),
            title: todoText,
            complete: false
          })
      })
      return callAPI;
  }
    return (
        <form onSubmit={handleSubmit}>
          <MDBInput value={todoText} onChange={(e) => handleChange(e)} label='add todo' type='text' onKeyUp={(ev) => {if (ev.keyCode === 13) {handleSubmit()}}}>
            <MDBBtn block='inline' type='submit'>Submit</MDBBtn>
          </MDBInput>
        </form>
    )
}
