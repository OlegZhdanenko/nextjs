'use client'

import React from "react"

export interface GlobalErrorProps{}

export default function GlobalError({}:GlobalErrorProps){
    return(
        <html><body><p>{`Sompting went wrong globbaly`}</p></body></html>
    )
}