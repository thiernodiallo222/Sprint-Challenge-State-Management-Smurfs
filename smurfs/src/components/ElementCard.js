import React from 'react'

const ElementCard = () => {
    return (
        <div >
            <button onClick={()=>props.getData()>Fetch API </button>
            <p> {props.isFetching}</p>
            <p> {props.error}</p>
            <p> {props.isFetched}</p>
            <p></p>
          
       
        </div>
    )
}

export default ElementCard
