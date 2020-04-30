import React from 'react'

import Link from '../styledComponents/Link';
import { Icon } from 'semantic-ui-react';

export default (props) => {
    const { link, iconName, fontSize, newTab } = props;
    const target = newTab ? '_blank' : undefined;

    return (
        <Link href={link} target={target} fontSize={fontSize} rel="noopener noreferrer">
            <Icon name={iconName} style={{ marginRight: '0.5em', marginBottom: '1em' }} />
            {props.children}
        </Link>
    )
}