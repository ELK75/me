import React from 'react'

import Link from '../styledComponents/Link';
import { Icon } from 'semantic-ui-react';

export default (props) => {
    const { link, iconName, newTab } = props;
    const target = newTab ? '_blank' : undefined;

    return (
        <Link href={link} target={target}><Icon name={iconName} style={{marginRight: '0.5em'}}/>
            {props.children}
        </Link>
    )
}