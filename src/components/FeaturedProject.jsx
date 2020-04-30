import React from 'react'

import { Image } from 'semantic-ui-react';
import FeaturedProjectStyles from '../styledComponents/FeaturedProjectStyles';
import Text from '../styledComponents/Text';
import IconLink from './IconLink';
import TechnologyList from './TechnologyList';

export default ({ name, url, sourceCodeUrl, image, technologies, description }) => {
    return (
        <FeaturedProjectStyles>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image src={image} />
            </a>
            <div style={{marginTop: '1.4em'}}>
                <TechnologyList technologies={technologies} />
            </div>
            <div style={{ marginTop: '1em' }}>
                <Text size="md">{description}</Text>
            </div>
            <div style={{ marginTop: '1.8em', textAlign: 'center' }}>
                <IconLink link={sourceCodeUrl} iconName="github" newTab>Source Code</IconLink>
            </div>
        </FeaturedProjectStyles>
    )
}