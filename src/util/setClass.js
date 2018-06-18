import React from "react";

export default function setClass(className){

    return (props)=>(
        <div {...props} className={className}/>
    )
}