import React from "react";

const EducationalPreview = (props)=>{
    return(
        <div>
            <h2>University name: {props.educationalExperience.universityName}</h2>
            <p>Title study: {props.educationalExperience.titleStudy}</p>
            <p>Country: {props.educationalExperience.country}</p>
            <p>City: {props.educationalExperience.city}</p>
            <p>From: {props.educationalExperience.from}</p>
            <p>To: {props.educationalExperience.to}</p>
            <button id="btnDelete" value={props.educationalExperience.id} onClick={props.deleteEducationOnClick}>DELETE EDUCATION</button>
        </div>
    )
}

export default EducationalPreview;