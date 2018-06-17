import React from "react";

export default function setLayoutPosition(cssClassName){
    return (props)=>(
        <div {...props} className={cssClassName}/>
    )
}