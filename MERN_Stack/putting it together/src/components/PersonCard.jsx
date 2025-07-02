import { useState } from "react";
import React from "react";

const PersonCard = (props) => {

    const { firstname, lastname, age, haircolor } = props
    const [currentage, setcurrentage] = useState(age);

    return (
        <>
            <h1>{firstname} , {lastname}</h1>
            <p>Age: {currentage}</p>
            <p>HairColor : {haircolor}</p>
            <button onClick={() => setcurrentage(currentage + 1)}> + </button>
            <button onClick={() => setcurrentage(age)}>Reset</button>
        </>
    )
}

export default PersonCard;