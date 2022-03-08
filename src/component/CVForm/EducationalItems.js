import React from "react";

const EducationalItems = function(props){
    
    

    return(
        <form onSubmit={props.onSubmitEducation} >
            <input
                type="text"
                name="universityName"
                className="education"
                id="universityNameInput"
                placeholder="University name"
                onChange={props.inputHandler}
                required
            />

             <input
                type="text"
                name="country"
                className="education"
                id="countryInput"
                placeholder="Country"
                onChange={props.inputHandler}
                required
            />

            <input
                type="text"
                name="city"
                className="education"
                id="cityInput"
                placeholder="City"
                onChange={props.inputHandler}
                required
            />

            <input
                type="text"
                name="titleStudy"
                className="education"
                id="titleStudyInput"
                placeholder="Title study"
                onChange={props.inputHandler}
                required
            />

             <input
                type="date"
                name="from"
                className="education"
                id="fromInput"
                placeholder="From"
                onChange={props.inputHandler}
                required
            />

            <input
                type="date"
                name="to"
                className="education"
                id="toInput"
                placeholder="To"
                onChange={props.inputHandler}
                required
            />
            
            <button id="btnSubmitEducation" type="submit">ADD</button>
        </form>
    )
}


export default EducationalItems;