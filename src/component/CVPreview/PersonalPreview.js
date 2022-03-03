import React from "react";

const PersonalPreview = (props)=>{
    const personalInformation = props.personalInformation;
    let fullName
    if(personalInformation.firstName !=='' || personalInformation.lastName !== ''){
        fullName = <h2>{personalInformation.lastName +',' + personalInformation.firstName}</h2>;
    }

    return(
        <div>
            {fullName}
            <p>{personalInformation.email}</p>
            <p>{personalInformation.phone}</p>
            <p>{personalInformation.country}</p>
            <p>{personalInformation.address}</p>
        </div>
    )
}

export default PersonalPreview;



