"use client"

import { createContext, useContext, useState } from "react";



const ColorPickerContext = createContext(null)

export function ColorPickerProvider({ children }) {
    const [color, setColor] = useState("#ffadad")

    return (
        <ColorPickerContext.Provider value={{ color, setColor }}>
            {children}
        </ColorPickerContext.Provider>
    )
}


export function useColorPicker(){
    const context = useContext(ColorPickerContext)

    if(!context){
        throw new Error("useColorPicker must be used within a ColorPickerProvider")
    }

    return context
}