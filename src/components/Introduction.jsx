import React from 'react'

import { Container, Icon } from 'semantic-ui-react';

import Text from '../styledComponents/Text'
import Bold from '../styledComponents/Bold'
import TextContainer from '../styledComponents/TextContainer';
import IconAnimation from '../styledComponents/IconAnimation';
import IconLink from './IconLink';
import Emoji from './Emoji';

export default () => {
    return (
        <Container style={{ minHeight: '100vh' }}>
            <TextContainer>
                <Text size="xl">Hi. <Emoji emoji="👋" description="wave" /></Text>
                <Text size="lg">My name is <Bold>Elijah Kajinic.</Bold></Text>
                <Text size="lg">
                    I'm a Software Engineer based in <Bold>Seattle</Bold>. I currently work at <Bold>Microsoft</Bold>.
                </Text>
                <Text size="lg">Scroll down to see more of my work.</Text>
                <div style={{ marginTop: '4em' }} />
                <IconLink link={"mailto:elijah.kajinic@email.com"} iconName={"mail outline"}>elijah.kajinic@gmail.com</IconLink>
                <div />
                <IconAnimation>
                    <Icon name="angle double down" size="large" style={{ color: 'white', marginTop: '3em' }} />
                </IconAnimation>
            </TextContainer>
        </Container>
    )
}
