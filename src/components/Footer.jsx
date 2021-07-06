import React from 'react'

import { Container } from 'semantic-ui-react';
import IconLink from './IconLink';
import Text from '../styledComponents/Text'

export default () => {

    const links = [
        {
            name: 'MAIL',
            logo: 'mail outline',
            link: 'mailto:elijah.kajinic@gmail.com'
        },
        {
            name: 'LINKEDIN',
            logo: 'linkedin',
            link: 'https://www.linkedin.com/in/elijah-kajinic/'
        },
        {
            name: 'GITHUB',
            logo: 'github',
            link: 'https://github.com/elk75'
        },
        {
            name: 'INSTAGRAM',
            logo: 'instagram',
            link: 'https://www.instagram.com/elikajinic/'
        },
        {
            name: 'TWITTER',
            logo: 'twitter',
            link: 'https://twitter.com/elikajinic'
        },
    ]

    return (
        <Container>
            <div style={{textAlign: 'center'}}>
                {
                    links.map((link, idx) => {
                        return (
                            <span style={{marginRight: '1.5em'}} key={idx}>
                                <IconLink link={link.link} iconName={link.logo} fontSize='1.2em' newTab>{link.name}</IconLink>
                            </span>
                        )
                    })
                }
            </div>
          <div style={{ textAlign: 'center' }}>
          <Text>Website Design Inspired by <a href="https://brittanychiang.com/">Brittany Chiang</a></Text>
          </div>
        </Container>
    )
}