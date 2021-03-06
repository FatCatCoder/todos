import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


export default function Todo(props) {
    const [completed, setCompleted] = useState(props.data.complete);

    const updateTodo = async (id) => {
        const sendData = {...props.data, complete: !completed};
        console.log(sendData, props.data, completed);

        const callAPI = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendData)
        })

        console.log(callAPI);

        if(callAPI.status === 200){
            props.setTodosData(
                [...props.todosData.map(x => x)]
            );
        }
    }

    const deleteTodo = async (id) => {
        const callAPI = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "DELETE"
        })

        if(callAPI.status === 200){
            props.setTodosData(
                props.todosData.filter(x => x.id !== id)
            );
        }
    }

    return (
        <>
        <li class="list-group-item text-info m-0 p-0">
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='10' md='11'>
                        <MDBBtn onClick={() => {setCompleted(!completed); updateTodo(props.data.id);}} className={`${completed? 'text-decoration-line-through text-muted' : ''} text-start w-100 bg-transparent shadow-0 text-info p-3`}>
                            <h3>{props.data.title || 'Todo Title'}</h3>
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol size='2' md='1' className='my-auto p-0'>
                        <MDBBtn className='' color='danger' onClick={() => deleteTodo(props.data.id)}>x</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>   
        </li>
        </>
    )
}
