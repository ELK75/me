import React from 'react'

import { Container, Icon } from 'semantic-ui-react';

import Text from '../styledComponents/Text'
import Bold from '../styledComponents/Bold'
import TextContainer from '../styledComponents/TextContainer';
import IconLink from './IconLink';
import Emoji from './Emoji';

export default () => {
    return (
        <Container style={{minHeight: '100vh' }}>
            <TextContainer>
                <Text size="xl">Hi. <Emoji emoji="👋" description="wave" /></Text>
                <Text size="lg">My name is <Bold>Elijah Kajinic.</Bold></Text>
                <Text size="lg">I am a student at the <Bold>University of Pittsburgh</Bold> graduating in <Bold>2021.</Bold></Text>
                <Text size="lg">Feel free to explore and see what I have done or to contact me below.</Text>
                <div style={{marginTop: '4em'}} />
                <IconLink link={"mailto:elijah.kajinic@email.com"} iconName={"mail outline"}>elijah.kajinic@gmail.com</IconLink>
                <div />
                <Icon name="angle double down" size="large" style={{color: 'white', marginTop: '3em'}} />
            </TextContainer>
        </Container>
    )
}
