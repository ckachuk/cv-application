import React from "react";
import EducationalItems from "./EducationalItems";

const EducationalExperience = (props)=>{

    return(
        <div>
            <EducationalItems onsubmit={props.onsubmit} inputHandler={props.inputHandler}/>
        </div>
    )
}


export default EducationalExperience;