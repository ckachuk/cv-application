import React from "react";
import PersonalItems from "./PersonalItems";

const PersonalInformation = function(props){

    return(
        <div className="personalInputs">
            <h2 id="hPersonalInput">Personal information</h2>
            <PersonalItems cleanPersonalInformationObject={props.cleanPersonalInformationObject} handleChangePersonal={props.handleChangePersonal}/>
        </div>
    )
}

export default PersonalInformation;