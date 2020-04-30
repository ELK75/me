import React from 'react'

import ColumnList from './ColumnList';
import FeaturedProject from './FeaturedProject';

import Partify from '../assets/images/mockups/Partify.png';

export default () => {

    const projects = [
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

    return (
        <div>
            <ColumnList columnText="Featured Project">
                {projects.map((project, idx) => {
                    return <FeaturedProject {...project} key={idx} />
                })}
            </ColumnList>
        </div>
    )
}