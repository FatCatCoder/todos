import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

export default function AddTodo(props) {
  const [todoText, setTodoText] = useState('');

  const handleChange = () => {

  }

  const addTodo = async () => {
      const callAPI = await fetch(`http://localhost:5000/api/todos`, {
          method: "POST",
          body: JSON.stringify({
            id: Math.round(Math.random() * (999999 - 1) + 1),
            title: 'random',
            complete: false
          })
      })
      console.log(callAPI);
  }
    return (
        <form onSubmit={addTodo}>
          <MDBInput value={todoText} onChange={() => handleChange()} label='add todo' type='text' />
        </form>
    )
}
