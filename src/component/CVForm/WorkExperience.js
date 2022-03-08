import React from "react";
import Workitems from "./WorkItems";


const WorkExperience = (props)=>{
    
    return(
        <div className="workInputs">
            <h2 id="hWorkExperience">Work experience</h2>
            <Workitems onSubmitWork={props.onSubmitWork} inputHandler={props.inputHandler}/>
        </div>
    )
}


export default WorkExperience;