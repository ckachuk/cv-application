import React from "react";
import EducationalItems from "./EducationalItems";

const EducationalExperience = (props)=>{

    return(
        <div className="educationInputs">
            <h2 id="hEducationalExperience">Educational experience</h2>
            <EducationalItems onSubmitEducation={props.onSubmitEducation} inputHandler={props.inputHandler} />
        </div>
    )
}


export default EducationalExperience;