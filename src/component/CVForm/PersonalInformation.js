import React from "react";
import PersonalItems from "./PersonalItems";

const PersonalInformation = function(props){

    return(
        <div>
            <h2>Personal information</h2>
            <PersonalItems cleanPersonalInformationObject={props.cleanPersonalInformationObject} handleChangePersonal={props.handleChangePersonal}/>
        </div>
    )
}

export default PersonalInformation;