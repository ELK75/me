import React from 'react'

import Experience from './Experience';
import IconLink from './IconLink';
import ColumnList from './ColumnList';

import Resume from '../downloads/Elijah-Kajinic-Resume.pdf';

export default () => {

    const experiences = [
        {
            company: "Microsoft",
            title: "Software Engineer Intern",
            timeWorked: "Summer 2020",
            description: "I currently work at Microsoft on the OneDrive SharePoint Team."
        },
        {
            company: "Honeywell",
            title: "Software Engineer Intern",
            timeWorked: "Summer 2019",
            description: `At Honeywell I worked in both testing automation and website design. 
                While there, I created a REST API which communicated with our 
                in-house lab and created internal tooling to reduce necessary data for
                automated tests by 50%.`
        }
    ]

    return (
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
    )
}