import React from 'react'

import ColumnList from './ColumnList';
import Project from './Project';
import Text from '../styledComponents/Text';
import Emoji from './Emoji';

export default () => {

    const projectList = [
        {
            name: 'SnackCheck',
            link: 'https://expo.io/@threatofjoy1999/SnackCheck',
            description:
                <div>
                    <Text>
                        A React Native mobile app which takes a user's allergen information to dynamically generate a list of recipes.
                    </Text>
                    <Text><Emoji emoji="🏆" description="trophy" /><span style={{ marginRight: '.5em' }} />Winner for Best Use of Big Data at the Pitt Challenge Hackathon</Text>
                </div>,
            technologies: ['React Native'],
            sourceCodeUrl: 'https://github.com/ELK75/SnackCheck'
        },
        {
            name: 'CryptoCurrency Tracker',
            link: 'https://crypto-track.herokuapp.com/',
            description:
                <Text>
                    A website that displays information of over 3000 different CryptoCurrencies through various calls to the CryptoCompare API.
                </Text>,
            technologies: ['React', 'Redux', 'Node', 'Express', 'Heroku'],
            sourceCodeUrl: 'https://github.com/ELK75/Crypto_Tracker'
        },
        {
            name: 'Cooki',
            link: 'https://cooki.now.sh',
            description:
                <Text>
                    A website that dynamically filters and saves recipes.
                </Text>,
            technologies: ['React', 'MongoDB'],
            sourceCodeUrl: 'https://github.com/ELK75/Cooki'
        },
        {
            name: 'TutorTitan',
            link: 'https://tutortitan.appspot.com/',
            description:
                <Text>
                    A Q&amp;A website that allows students to ask and answer questions from students at the same university.
                </Text>,
            technologies: ['React', 'Flask'],
            sourceCodeUrl: 'https://github.com/ELK75/TutorTitan'
        }
    ]

    return (
        <ColumnList columnText="Other Projects">
            {
                <div>
                    {projectList.map((project, idx) => {
                        return (
                            <div key={idx} style={{ marginBottom: '5em' }}>
                                <Project {...project} />
                            </div>
                        )})};
                    <div style={{ marginBottom: '-5em' }} />
                </div>
            }
        </ColumnList>
    )
}