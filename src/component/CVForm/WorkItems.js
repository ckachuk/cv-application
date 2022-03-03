import React from "react";

const Workitems = (props)=>{
    return(
        <form>
            <input
                type="text"
                name="companyName"
                id="companyNameInput"
                placeholder="Company name"
            />
            
            <input
                type="text"
                name="position"
                id="positionInput"
                placeholder="Position"
            />
            
            <input
                type="text"
                name="city"
                id="cityInput"
                placeholder="City"
            />

            <input
                type="date"
                name="from"
                id="fromInput"
                placeholder="From"
            />

            <input
                type="date"
                name="to"
                id="toInput"
                placeholder="To"
            />

            <button>ADD</button>
        </form>
    )
}

export default Workitems;