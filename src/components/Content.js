import React, { useContext } from 'react';
import './Content.css';
import { ContentContext } from './ContentContext';
import CreateProject from './CreateProject';
import Dashboard from './Dashboard';
import Displayproject from './Displayproject';

function Content(props) {
    const {content, setContent} = useContext(ContentContext)
    let display;

    if (content === 'dashboard') {
        display = <Dashboard projects = {props.projects} />;
    } else if (content === 'project') {
        display = <Displayproject />;
    } else if (content === 'newProject') {
        display = <CreateProject />
    }
   
    return (
        <div id='content'>
        
            {display}
            
        </div>
    )
}

export default Content
