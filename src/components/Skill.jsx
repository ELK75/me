import React from 'react'

import Text from '../styledComponents/Text';
import TechnologyList from './TechnologyList';

export default ({ type, skills }) => {
    return (
        <div>
            <Text size="md">{type}</Text>
            <div style={{marginTop: '-.5em', marginBottom: '1.8em'}}>
                <TechnologyList technologies={skills} />
            </div>
        </div>
    )
}