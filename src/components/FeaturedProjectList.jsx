import React from 'react'

import ColumnList from './ColumnList';
import FeaturedProject from './FeaturedProject';

import { featuredProjects as projects } from '../data';

export default () => {

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