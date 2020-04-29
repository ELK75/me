import React from 'react'

import { Card } from 'semantic-ui-react';
import ColumnList from './ColumnList';
import Text from '../styledComponents/Text';

import Partify from '../assets/images/mockups/Partify.png';

export default () => {

    const projects = [
        {
            name: 'Partify',
            url: 'https://partify-us.com/',
            image: Partify,
            description: 'bruh moment'
        }
    ]

    return (
        <div style={{ marginTop: '8em' }}>
            <ColumnList columnText="Projects">
                <Text fontSize="1.5em">bruh</Text>
            </ColumnList>
        </div>
    )
}