import React from 'react'

import { Container, Icon } from 'semantic-ui-react';

import Text from '../styledComponents/Text'
import Bold from '../styledComponents/Bold'
import TextContainer from '../styledComponents/TextContainer';
import IconLink from './IconLink';
import Emoji from './Emoji';

export default () => {
    return (
        <Container style={{paddingTop: '8.5em', height: '100vh'}}>
            <TextContainer>
                <Text fontSize="3.5em">Hi. <Emoji emoji="👋" description="wave" /></Text>
                <Text fontSize="2.5em">My name is <Bold>Elijah Kajinic.</Bold></Text>
                <Text>I am a student at the <Bold>University of Pittsburgh</Bold> graduating in <Bold>2021.</Bold></Text>
                <Text>Feel free to explore and see what I have done or to contact me below.</Text>
                <div style={{marginTop: '4em'}} />
                <IconLink link={"mailto:elijah.kajinic@email.com"} iconName={"mail outline"}>elijah.kajinic@gmail.com</IconLink>
                <div />
                <Icon name="angle double down" size="large" style={{color: 'white', marginTop: '3em'}} />
            </TextContainer>
        </Container>
    )
}
