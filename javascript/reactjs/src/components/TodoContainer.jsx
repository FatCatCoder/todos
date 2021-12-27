import React from 'react'
import Todo from './Todo'

export default function TodoContainer(props) {
    // const data = [
    //     {
    //         id: 1,
    //         title: "express api",
    //         complete: true
    //     },
    //     {
    //         id: 2,
    //         title: "build node api",
    //         complete: true
    //     },
    //     {
    //         id: 3,
    //         title: "design the react ui, with really long text just in case of text overflow happening but it really should not in most cases, but now I need more text to test extra large screen viewports for responsive design",
    //         complete: false
    //     }
    // ]
    const data = props?.data;

    return (
    <>
        {data.length? 
            <ul class="list-group shadow-5">
                {  data.map(x => <Todo key={x.id} data={x} todosData={props.todosData} setTodosData={props.setTodosData}/> ) }
            </ul>
            :
            <div className='display-5 fst-italic text-center'>Hmmm... time to do something!</div>
        }
    </>
    )
}
