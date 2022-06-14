import React from 'react'

const dateStyle = {
    backgroundColor: 'rgb(226, 255, 197)', 
    color: 'rgb(64, 110, 18)',
}


function Recent(props) {
    return (
        <div class="recent">
        <a href="project.html">
            <span class="project1_link"><p>{props.projectInfo.title}</p></span>
        
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
}

export default Recent
