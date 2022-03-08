import React from "react";

const WorkPreview = (props)=>{
    return(
        <div>
            <h2>Company name: {props.workExperience.companyName}</h2>
            <p>Position: {props.workExperience.position}</p>
            <p>From: {props.workExperience.from}</p>
            <p>To: {props.workExperience.to}</p>
            <button id="btnDelete" value={props.workExperience.id} onClick={props.deleteWorkOnClick}>DELETE WORK</button>
        </div>
    )
}

export default  WorkPreview;