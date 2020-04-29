import React from 'react';

import Introduction from '../components/Introduction';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';

export default () => {

    return (
        <div style={{backgroundColor: 'var(--color-primary)',  paddingBottom: '3em'}}>
            <Introduction />
            <ExperienceList />
            <ProjectList />
        </div>
    )
}
