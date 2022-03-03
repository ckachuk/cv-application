import React from "react";


const PersonalItems = (props) =>{
    
    const cleanPersonalInformation = ()=>{
        props.cleanPersonalInformationObject();
        const inputs = document.querySelectorAll('input');
        
        inputs.forEach(element => {
            element.value = '';
        });
    }
    
    return(
        <div>
            <input
                type="text"
                name="firstName"
                id="firstNameInput"
                placeholder="First name"
                onChange={props.handleChangePersonal}
            />
            
            <input
                type="text"
                id="lastNameInput"
                name="lastName"
                placeholder="Last name"
                onChange={props.handleChangePersonal}
            />
            
            <input
                type="email"
                id="emailInput"
                name="email"
                placeholder="Email"
                onChange={props.handleChangePersonal}
            />
            
            <input
                type="text"
                id="countryInput"
                name="country"
                placeholder="Country"
                onChange={props.handleChangePersonal}
            />

            <input
                type="text"
                id="addressInput"
                name="address"
                placeholder="Address"
                onChange={props.handleChangePersonal}
            />

            <input
                type="tel"
                id="phoneInput"
                name="phone"
                placeholder="Phone number"
                onChange={props.handleChangePersonal}
            />

            <button onClick={cleanPersonalInformation}>Clean data</button>
        </div>
    )
}

export default PersonalItems;