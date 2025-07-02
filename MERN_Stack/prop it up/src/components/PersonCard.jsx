
import React from "react";

const PersonCard = (props) => {

    const {firstname , lastname , age , haircolor} = props
    
    return (
        <>
        <h1>{firstname} , {lastname}</h1>
        <p>Age: {age}</p>
        <p>HairColor : {haircolor}</p>

        </>
    )
}

export default PersonCard;