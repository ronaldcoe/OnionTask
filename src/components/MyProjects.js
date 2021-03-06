import React from 'react';

import {useContext} from 'react'
import { ContentContext } from './ContentContext'

function MyProjects(props) {
    const {content, setContent} = useContext(ContentContext)

    return (
        <>
            {props.projects.map((project) => {
                return (
                    <li onClick={() => setContent('project')}><span class="material-symbols-rounded">folder</span>{project.title}</li>
                )
            })}
          
        </>            
            /* <li onClick={() => setContent('project')}>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Front-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Back-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Marketing</li> */
        
    )
}

export default MyProjects
