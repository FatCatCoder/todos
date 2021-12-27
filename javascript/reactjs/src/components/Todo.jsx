import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


export default function Todo({props}) {
    const [completed, setCompleted] = useState(props.complete);

    return (
        <li class="list-group-item text-info m-0 p-0">
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='10' md='11'>
                        <MDBBtn onClick={() => setCompleted(!completed)} className={`${completed? 'text-decoration-line-through text-muted' : ''} text-start w-100 bg-transparent shadow-0 text-info p-3`}>
                            <h3>{props.title || 'Todo Title'}</h3>
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol size='2' md='1' className='my-auto p-0'>
                        <MDBBtn className='' color='danger' onClick={() => console.log('Deleted Todo')}>x</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>   
        </li>
    )
}
