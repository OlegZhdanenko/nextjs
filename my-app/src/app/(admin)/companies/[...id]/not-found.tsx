import React from "react";
import Link from "next/link";

export interface NotFoundProps{}

export default function ({}:NotFoundProps){
return(
    <div>
        <p>{'Sompthing went wrong'}</p>
        <Link href={'/companies'}> Back to companies</Link>
    </div>
)
}