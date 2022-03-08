
import React from "react";
import EducationalPreview from "./EducationalPreview";
import PersonalPreview from "./PersonalPreview";
import WorkPreview from "./WorkPreview";


const Preview = (props)=>{

    return(
        <div>
            <div className="personalInfo">
                {(props.personalInformation !== undefined) &&
                    <PersonalPreview personalInformation = {props.personalInformation}/>
                }
            </div>
            
            <div className="educationInfo">
                <h1>Educational experience</h1>
                {(props.educationalExperience !== undefined)&&
                    props.educationalExperience.map((item,index)=>(
                         <EducationalPreview key={index} educationalExperience={item} deleteEducationOnClick={props.deleteEducationOnClick}/>
                    ))
                }
            </div>
            
            <div className="workInfo">
                <h1>Work experience</h1>
                    {(props.workExperience !== undefined)&&
                        props.workExperience.map((item,index)=>(
                        <WorkPreview key={index} workExperience={item} deleteWorkOnClick={props.deleteWorkOnClick}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Preview; 