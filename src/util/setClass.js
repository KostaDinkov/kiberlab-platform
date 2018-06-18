import React from "react";

export default function setLayoutPosition(className){

    return (props)=>(
        <div {...props} className={className}/>
    )
}