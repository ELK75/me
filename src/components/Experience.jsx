import React from 'react'

import { Grid } from 'semantic-ui-react';
import Text from '../styledComponents/Text';

export default ({company, title, timeWorked, description}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <Text size="md" weight="400">{company}</Text>
                <Text size="md" style={{ marginTop: '-1em' }}>{title}</Text>
            </Grid.Column>

            <Grid.Column width={6} floated='right'>
                <Text size="md" style={{float: 'right'}}>{timeWorked}</Text>
            </Grid.Column>

            <Text size="sm" style={{marginTop: '-0.5em'}}>{description}</Text>
        </Grid>
    )
}