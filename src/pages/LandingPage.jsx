import React from 'react';

import Introduction from '../components/Introduction';
import ExperienceList from '../components/ExperienceList';
import FeaturedProjectList from '../components/FeaturedProjectList';
import ProjectList from '../components/ProjectList';
import SkillList from '../components/SkillList';
import Footer from '../components/Footer';

export default () => {

    return (
        <div style={{backgroundColor: 'var(--color-primary)',  paddingBottom: '3em'}}>
            <Introduction />
            <ExperienceList />
            <FeaturedProjectList />
            <ProjectList />
            <SkillList />
            <Footer />
        </div>
    )
}
