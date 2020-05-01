import React from 'react'

import ColumnList from './ColumnList';
import Skill from './Skill';

import { skills } from '../data';

export default () => {

    return (
        <ColumnList columnText="Skills">
            <div>
                {skills.map((skill, idx) => {
                    return (
                        <div data-aos="fade-up" key={idx}>
                            <Skill {...skill} />
                        </div>
                    )
                })}
            </div>
        </ColumnList>
    )
}