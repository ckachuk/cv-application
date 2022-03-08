import React from "react";

const Workitems = (props)=>{
    return(
        <form onSubmit={props.onSubmitWork}>
            <input
                type="text"
                name="companyName"
                id="companyNameInput"
                className="work"
                placeholder="Company name"
                onChange={props.inputHandler}
            />
            
            <input
                type="text"
                name="position"
                id="positionInput"
                className="work"
                placeholder="Position"
                onChange={props.inputHandler}
            />
            

            <input
                type="date"
                name="from"
                id="fromInputWork"
                className="work"
                placeholder="From"
                onChange={props.inputHandler}
            />

            <input
                type="date"
                name="to"
                id="toInputWork"
                className="work"
                placeholder="To"
                onChange={props.inputHandler}
            />

            <button id="btnSubmitWork">ADD</button>
        </form>
    )
}

export default Workitems;