import React from 'react';
import Text from './styledComponents/Text';
import Emoji from './components/Emoji';
import Partify from './assets/images/mockups/Partify.png';

const experiences = [
    {
        company: "Microsoft",
        title: "Software Engineer Intern",
        timeWorked: "Summer 2020",
        description: "I currently work at Microsoft on the OneDrive SharePoint Team."
    },
    {
        company: "Honeywell",
        title: "Software Engineer Intern",
        timeWorked: "Summer 2019",
        description: `At Honeywell I worked in both testing automation and full-stack web development. 
                While there, I created a REST API which communicated with our 
                in-house lab as well as internal tooling to reduce necessary data for
                automated tests by 50%.`
    }
]

const featuredProjects = [
    {
        name: 'Partify',
        url: 'https://partify-us.com/',
        sourceCodeUrl: 'https://github.com/ELK75/Partify/',
        image: Partify,
        technologies: ['React', 'Typescript'],
        description: `Partify is a website 
                that uses the Spotify API to scrape the 
                data of multiple users and create a shared 
                playlist catering to everyone’s taste.`
    }
]

const projectList = [
    {
        name: 'SnackCheck',
        link: 'https://expo.io/@threatofjoy1999/SnackCheck',
        description:
            <div>
                <Text>
                    A React Native mobile app which takes a user's allergen information to dynamically generate a list of recipes.
                    </Text>
                <Text><Emoji emoji="🏆" description="trophy" /><span style={{ marginRight: '.5em' }} />Winner for Best Use of Big Data at the 2019 Pitt Challenge Hackathon.</Text>
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

const skills = [
    {
        type: 'Languages',
        skills: ['Python', 'Javascript', 'Java', 'C', 'HTML/CSS']
    },
    {
        type: 'Technologies',
        skills: ['Node', 'MongoDB', 'React', 'Redux', 'React Native', 'Git', 'Docker', 'Flask']
    }
]

export { experiences, skills, projectList, featuredProjects }