'use client';

import { useEffect, useState } from "react";
import { ButtonProps } from "./button";




export default function MagicButton (props:ButtonProps){
    const [count,setCount]=useState<number>(0);

    useEffect(()=>{
        if (count>=2) {
            throw new Error('Unexpected errors')
        }
    },[count])
    return(
        <div>
            <button {...props} onClick={()=>setCount(count+1)}>Magic Button</button>
        </div>
    )
}
