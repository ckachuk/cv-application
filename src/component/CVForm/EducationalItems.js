import React from "react";

const EducationalItems = function(props){

    return(
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                name="universityName"
                id="universityNameInput"
                placeholder="University name"
                onChange={props.inputHandler}
                required
            />

             <input
                type="text"
                name="country"
                id="countryInput"
                placeholder="Country"
                onChange={props.inputHandler}
                required
            />

            <input
                type="text"
                name="city"
                id="cityInput"
                placeholder="City"
                onChange={props.inputHandler}
                required
            />

            <input
                type="text"
                name="titleStudy"
                id="titleStudyInput"
                placeholder="Title study"
                onChange={props.inputHandler}
                required
            />

             <input
                type="date"
                name="from"
                id="fromInput"
                placeholder="From"
                onChange={props.inputHandler}
                required
            />

            <input
                type="date"
                name="to"
                id="toInput"
                placeholder="To"
                onChange={props.inputHandler}
                required
            />
            
            <button type="submit">ADD</button>
        </form>
    )
}


export default EducationalItems;