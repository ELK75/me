import React from 'react'

import Experience from './Experience';
import IconLink from './IconLink';
import ColumnList from './ColumnList';

import Resume from '../downloads/Elijah-Kajinic-Resume.pdf';

import { experiences } from '../data';

export default () => {
    return (
        <div data-aos="fade-up">
            <ColumnList columnText='Experience'>
                {experiences.map((experience, idx) => {
                    return (
                        <div style={{ marginBottom: '2em' }} key={idx}>
                            <Experience {...experience} />
                        </div>
                    )
                })}
                <div style={{ marginTop: '4em' }}>
                    <IconLink link={Resume} iconName="file outline" newTab>See My Resume (pdf)</IconLink>
                </div>
            </ColumnList>
        </div>
    )
}