import React from 'react'

import ColumnList from './ColumnList';
import Project from './Project';

import { projectList } from '../data';

export default () => {
    return (
        <ColumnList columnText="Other Projects">
            {
                <div data-aos="fade-up">
                    {projectList.map((project, idx) => {
                        return (
                            <div key={idx} style={{ marginBottom: '5em' }}>
                                <Project {...project} />
                            </div>
                        )})};
                    <div style={{ marginBottom: '-5em' }} />
                </div>
            }
        </ColumnList>
    )
}