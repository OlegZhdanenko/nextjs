'use client';


import React from "react";

export interface ErrorProps{
error:Error,
reset:()=>void
}

export default function ErrorComponent({error,reset}:ErrorProps){
    return(
        <div>
            <p>{`Sompthing went wrong .${error.message}`}</p>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    )
}