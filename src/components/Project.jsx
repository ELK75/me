import React from 'react'

import { Icon } from 'semantic-ui-react';

import Link from '../styledComponents/Link';
import IconLink from './IconLink';
import TechnologyList from './TechnologyList';

export default ({ name, link, description, technologies, sourceCodeUrl }) => {
    return (
        <div>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                {name}
                <Icon name="arrow right"  style={{marginLeft: '0.5em'}}/>
            </Link>
            <div style={{marginTop: '1.6em'}}></div>
            <TechnologyList technologies={technologies} />
            <div style={{marginTop: '1em'}} />
            {description}
            <div style={{marginTop: '1.4em' }}>
                <IconLink link={sourceCodeUrl} iconName="github" newTab fontSize="1.2em">Source Code</IconLink>
            </div>
        </div>
    )
}