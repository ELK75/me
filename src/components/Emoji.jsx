import React from 'react'

export default ({emoji, description}) => {
    return (
        <span role="img" aria-label={description}>{emoji}</span>
    )
}