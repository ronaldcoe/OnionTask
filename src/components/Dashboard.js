import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import {db} from './firebase'
import { collection, getDocs } from 'firebase/firestore'
const dateStyle = {
    backgroundColor: 'rgb(226, 255, 197)', 
    color: 'rgb(64, 110, 18)',
}


// const description = db.collection('Tasks').get()
function Dashboard() {

    const [projects, setProjects] = useState([]);
    const projectsCollectionRef = collection(db, 'Projects')

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef);
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getProjects();
    }, [])


    return (        
        <div id="recent_section">
            <h2>Recent</h2>
            {projects.map((project) => {
                return (
                    <div class="recent">
                        <a href="project.html">
                            <span class="project1_link"><p>{project.title}</p></span>
                        
                        <p class="project_description"></p>
                        <div class="recent_description">
                            <div class="recent_announcements">
                                <span class="material-symbols-rounded">
                                    campaign
                                </span>
                                <p>6</p>
                            </div>
                            
                            <div class="date" style={dateStyle}>
                                <p>
                                    <span class="material-symbols-rounded">
                                        schedule
                                    </span>
                                    June 16
                                </p>
                            </div>
                            <div class="priority"><p>● Important</p></div>
                        </div>
                        </a>
                    </div>
                )
            })}
            
        </div>
                
       
    )
}


export default Dashboard
