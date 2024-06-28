import React from 'react'

const ChildComponent = ({ message, onRespond }) => {

    const handleClick = () => {
        onRespond("hola Respuesta del HIJO")
    }
    return (
        <div className='child'>
            <h2>hola soy el Hijo</h2>
            <div>{message}</div>
            <button onClick={handleClick}>Enviar Respuesta al padre</button>

        </div>
    )
}

export default ChildComponent