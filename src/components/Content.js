import React, { useContext } from 'react';
import './Content.css';
import { ContentContext } from './ContentContext';
import Dashboard from './Dashboard';
import Displayproject from './Displayproject';

function Content() {
    const {content, setContent} = useContext(ContentContext)
    let display;

    if (content === 'dashboard') {
        display = <Dashboard />;
    } else if (content === 'project') {
        display = <Displayproject />;
    }
   
    return (
        <div id='content'>
        
            {display}
            
        </div>
    )
}

export default Content
