import React from 'react'

import { Grid } from 'semantic-ui-react';
import Text from '../styledComponents/Text';

export default ({company, title, timeWorked, description}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <Text fontSize="1.5em" weight="400">{company}</Text>
                <Text fontSize="1.5em" style={{ marginTop: '-1em' }}>{title}</Text>
            </Grid.Column>

            <Grid.Column width={6} floated='right'>
                <Text fontSize="1.5em" style={{float: 'right'}}>{timeWorked}</Text>
            </Grid.Column>

            <Text fontSize="1.2em" style={{marginTop: '-0.5em'}}>{description}</Text>
        </Grid>
    )
}