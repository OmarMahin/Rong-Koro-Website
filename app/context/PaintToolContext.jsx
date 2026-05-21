"use client"

import { createContext, useContext, useState } from "react";


const PaintToolContext = createContext(null)

export function PaintToolProvider({children}){
    const [tool, setTool] = useState("brush")

    return (
        <PaintToolContext.Provider value = {{tool, setTool}}>
            {children}
        </PaintToolContext.Provider>
    )
}


export function usePaintTool(){
    const context = useContext(PaintToolContext)

    if(!context){
        throw new Error("usePaintTool must be used within a PaintToolProvider")
    }

    return context
}