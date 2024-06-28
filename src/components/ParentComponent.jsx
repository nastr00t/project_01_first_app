import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export const ParentComponent = () => {
    const [response, setRresponse] = useState();
    //Definir un estado local
    const [message] = useState("¡¡hola desde el componete padre!!")
    //Esta es una fucion para recibir la respuesta del hijo

    const handleChildResponse = (chilMessage) => {
        setRresponse(chilMessage);
    }

    return (

        <div className='parent'>
            <h2>Parent Component</h2>
            <ChildComponent message={message} onRespond={handleChildResponse} />
            { response}
        </div>
    )
}

