import React from 'react'

import { Container, Grid } from 'semantic-ui-react';
import ColumnWrapper from '../styledComponents/ColumnWrapper';
import Text from '../styledComponents/Text';

export default (props) => {

    const { columnText } = props;

    return (
        <Container>
            <ColumnWrapper>
                <Grid stackable columns={2}>
                    <Grid.Column width={4}>
                        <Text color={"var(--color-secondary)"} weight="400" fontSize="1.5em">{columnText}</Text>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {props.children}
                    </Grid.Column>
                </Grid>
            </ColumnWrapper>
        </Container>
    )
}