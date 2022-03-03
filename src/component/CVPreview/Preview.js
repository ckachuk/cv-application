
import React from "react";
import PersonalPreview from "./PersonalPreview";


const Preview = (props)=>{
    return(
        <div>
            <PersonalPreview personalInformation = {props.personalInformation}/>
        </div>
    )
}

export default Preview; 