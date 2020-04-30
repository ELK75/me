import React from 'react'

import ColumnList from './ColumnList';
import Skill from './Skill';

export default () => {

    const skills = [
        {
            type: 'Languages',
            skills: ['Python', 'Javascript', 'Java', 'C', 'HTML/CSS']
        },
        {
            type: 'Technologies',
            skills: ['Node', 'MongoDB', 'React', 'Redux', 'React Native', 'Git', 'Docker', 'Flask']
        }
    ]

    return (
        <ColumnList columnText="Skills">
            <div>
                {skills.map((skill, idx) => {
                    return (
                        <Skill {...skill} key={idx} />
                    )
                })}
            </div>
        </ColumnList>
    )
}