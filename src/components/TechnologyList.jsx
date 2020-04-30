import React from 'react'

import Technology from '../styledComponents/Technology';

export default ({ technologies }) => {
    return (
        <div>
            {technologies.map((technology, idx) => {
                return (
                    <Technology key={idx}>{technology}</Technology>
                )
            })}
        </div>
    )
}