import React from 'react'

const ElementList = () => {
    return (
        <div>
            {props.smurfs.map(element =>
                <ElementCard
                    isFetching={props.isFetching}
                    error={props.error}
                    isFetched={props.isFetched}
                    getData={props.getlData}
                />
            )}
        </div>
    )
}

export default ElementList
