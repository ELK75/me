import React from 'react';
import Text from './styledComponents/Text';
import Emoji from './components/Emoji';
import Partify from './assets/images/mockups/Partify.png';

const experiences = [
    {
        company: "ServiceLink",
        title: "Data Scientist",
        timeWorked: "Current",
        description: `Currently working at ServiceLink utilizing Python and Optical Character
                    Recognition to extract mortgage data.`
    },
    {
        company: "Microsoft",
        title: "Software Engineer Intern",
        timeWorked: "Summer 2020",
        description: `During my internship at Microsoft, I worked at improving code within Azure SQL
                Workflows. In this time, I managed to reduce boilerplate code in various workflows
                by up to 70% and put measures in place to ensure the protection of user privacy.`
    },
    {
        company: "Honeywell",
        title: "Software Engineer Intern",
        timeWorked: "Summer 2019",
        description: `At Honeywell I worked in both testing automation and full-stack web development. 
                While there, I created a REST API which communicated with our 
                in-house lab as well as internal tooling to reduce necessary data for
                automated tests.`
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
        name: 'Nexter',
        link: 'https://elk75.github.io/Nexter/',
        description:
            <Text>
                A sample real estate website.
            </Text>,
        technologies: ['HTML', 'CSS'],
        sourceCodeUrl: 'https://github.com/ELK75/Nexter'
    },
    {
        name: 'Trillo',
        link: 'https://elk75.github.io/Trillo/',
        description:
            <Text>
                A sample travel website.
            </Text>,
        technologies: ['HTML', 'CSS'],
        sourceCodeUrl: 'https://github.com/ELK75/Trillo'
    },
    {
        name: 'Cooki',
        link: 'https://cooki.now.sh',
        description:
            <Text>
                A website that dynamically filters and saves recipes to help those with allergies and dietary restrictions.
            </Text>,
        technologies: ['React', 'MongoDB'],
        sourceCodeUrl: 'https://github.com/ELK75/Cooki'
    }
]

const skills = [
    {
        type: 'Languages',
        skills: ['Python', 'Javascript', 'Java', 'C', 'C#', 'HTML/CSS']
    },
    {
        type: 'Technologies',
        skills: ['Node', 'MongoDB', 'React', 'Redux', 'React Native', 'Git', 'Docker', 'Flask']
    }
]

export { experiences, skills, projectList, featuredProjects }