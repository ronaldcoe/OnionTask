import './Menu.css';
import {useContext} from 'react'
import { ContentContext } from './ContentContext';

function Menu() {
    const {content, setContent} = useContext(ContentContext)
    return(
      <div id="overview">
            
              <ul>
                  <li><span class="material-symbols-rounded">
                      dashboard
                      </span><a onClick={() => setContent('dashboard')}>Dashboard</a></li>
                  <li><span class="material-symbols-rounded">
                      edit
                      </span><a>Create new project</a></li>
                  <li><span class="material-symbols-rounded">
                      calendar_today
                      </span>Calendar</li>
                  <li><span class="material-symbols-rounded">
                      notifications
                      </span>Reminders</li>
                  <li><span class="material-symbols-rounded">
                      pages
                      </span><a href="myspace.html">My space</a></li>
                  
              </ul>
  
              <div id="display_tree">
                
                  <ul>
                  <h3>Projects</h3>
                      <li><span class="material-symbols-rounded">
                          folder
                          </span>Web App</li>
        
                          <li onClick={() => setContent('project')}>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">
                              description
                              </span>Front-end</li>
                              <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">
                                  description
                                  </span>Back-end</li>
                                  <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">
                                      description
                                      </span>Marketing</li>
                  </ul>
                  
              </div>
          </div>
    )
}


export default Menu