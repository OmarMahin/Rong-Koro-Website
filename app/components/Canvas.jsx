"use client"

import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import { usePaintTool } from '../context/PaintToolContext'

const Canvas = () => {

    const canvasRef = useRef(null)
    const flexRef = useRef(null)
    const contextRef = useRef(null)
    const lastCoord = useRef({ x: 0, y: 0 })

    const [offsets, setOffsets] = useState({ x: 0, y: 0 })
    const [painting, setPainting] = useState(false)

    const {tool, setTool} = usePaintTool()

    const mouseDown = (e) => {
        setPainting(true)

        lastCoord.current = ({
            x: e.clientX - offsets.x,
            y: e.clientY - offsets.y
        })

    }

    const mouseUp = (e) => {
        setPainting(false)

        contextRef.current.stroke()
        contextRef.current.beginPath()
    }

    const movment = (e) => {
        if (!painting){
            return
        }
        
        
        contextRef.current.lineCap = "round"
        contextRef.current.lineJoin = "round"

        if (tool === "brush"){
            contextRef.current.lineWidth = 20
            contextRef.current.strokeStyle = "#a041bf"
        }
        else if (tool === "eraser"){
            contextRef.current.lineWidth = 30
            contextRef.current.strokeStyle = "white"
        }

        const current_x = e.clientX - offsets.x
        const current_y = e.clientY - offsets.y

        const mid_x = (lastCoord.current.x + current_x) / 2
        const mid_y = (lastCoord.current.y + current_y) / 2

        contextRef.current.quadraticCurveTo(lastCoord.current.x, lastCoord.current.y, mid_x, mid_y)

        contextRef.current.stroke()

        lastCoord.current = {
            x: current_x,
            y: current_y
        }
    }

    useEffect(()=>{
        const canvas = canvasRef.current
        const flex = flexRef.current
        
        if (canvas && flex ){
            
            const rect = canvas.getBoundingClientRect()
            
            canvas.width = flex.clientWidth - 4
            canvas.height = flex.clientHeight - 4

            contextRef.current = canvas.getContext("2d")

            setOffsets({
                x: rect.left,
                y: rect.top
            })
        }

        const clearCanvas = () => {
            contextRef.current.clearRect(0, 0, canvas.width, canvas.height)
            setTool("brush")
        }

        window.addEventListener("clearCanvas", clearCanvas)

        return () => {
            window.removeEventListener("clearCanvas", clearCanvas)
        }


    },[])
    

    return (
        <Flex className={"w-full h-[calc(100vh-120px)] mt-10 mb-20 border-2 border-gray-200 rounded-2xl"} ref={flexRef}>
            <canvas  ref = {canvasRef} className='block w-full h-full' onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={movment}/>
        </Flex>
    )
}

export default Canvas