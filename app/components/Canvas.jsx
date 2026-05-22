"use client"

import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import { usePaintTool } from '../context/PaintToolContext'
import { useColorPicker } from '../context/ColorPickerContext'
import Image from 'next/image'

const Canvas = () => {

    const canvasRef = useRef(null)
    const flexRef = useRef(null)
    const contextRef = useRef(null)
    const lastCoord = useRef({ x: 0, y: 0 })

    const [offsets, setOffsets] = useState({ x: 0, y: 0 })
    const [painting, setPainting] = useState(false)
    const [picNum, setPicNum] = useState(1)

    const { tool, setTool } = usePaintTool()
    const { color, setColor } = useColorPicker()

    const getCoordinates = (e) => {
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - offsets.x,
                y: e.touches[0].clientY - offsets.y
            }
        }
        return {
            x: e.clientX - offsets.x,
            y: e.clientY - offsets.y
        }
    }
    const mouseDown = (e) => {
        setPainting(true)

        lastCoord.current = getCoordinates(e)

    }

    const mouseUp = (e) => {
        setPainting(false)

        contextRef.current.stroke()
        contextRef.current.beginPath()
    }

    const movment = (e) => {
        if (!painting) {
            return
        }

        if (e.cancelable) {
            e.preventDefault()
        }


        contextRef.current.lineCap = "round"
        contextRef.current.lineJoin = "round"

        if (tool === "brush") {
            contextRef.current.lineWidth = 20
            contextRef.current.strokeStyle = color
        }
        else if (tool === "eraser") {
            contextRef.current.lineWidth = 30
            contextRef.current.strokeStyle = "white"
        }

        const {
            x: current_x,
            y: current_y
        } = getCoordinates(e)

        const mid_x = (lastCoord.current.x + current_x) / 2
        const mid_y = (lastCoord.current.y + current_y) / 2

        contextRef.current.quadraticCurveTo(lastCoord.current.x, lastCoord.current.y, mid_x, mid_y)

        contextRef.current.stroke()

        lastCoord.current = {
            x: current_x,
            y: current_y
        }
    }


    const randomPic = (max) => {
        setPicNum(Math.floor(Math.random() * (max - 1 + 1)) + 1)
        const clearEvent = new CustomEvent('clearCanvas')
        window.dispatchEvent(clearEvent)
    }

    const updateOffsets = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect()
            setOffsets({ x: rect.left, y: rect.top })
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const flex = flexRef.current

        if (canvas && flex) {

            const rect = canvas.getBoundingClientRect()

            canvas.width = flex.clientWidth - 4
            canvas.height = flex.clientHeight - 4

            contextRef.current = canvas.getContext("2d")

            updateOffsets()
        }

        const clearCanvas = () => {
            contextRef.current.clearRect(0, 0, canvas.width, canvas.height)
            setTool("brush")
        }

        const handleTouchMove = (e) => {
            setPainting((currentPainting) => {
                if (currentPainting) {
                    movment(e)
                }
                return currentPainting
            })
        }

        window.addEventListener("clearCanvas", clearCanvas)
        window.addEventListener("resize", updateOffsets)
        window.addEventListener("scroll", updateOffsets)

        if (canvas) {
            canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
        }

        return () => {
            window.removeEventListener("clearCanvas", clearCanvas)
            window.addEventListener("resize", updateOffsets)
            window.addEventListener("scroll", updateOffsets)
            if (canvas) {
                canvas.removeEventListener("touchmove", handleTouchMove)
            }

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Flex className={"flex w-full h-[calc(100vh-250px)] md:mt-10 mt-6 mb-20 border-2 border-gray-200 rounded-2xl relative"} ref={flexRef}>
            <button className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-400 hover:cursor-pointer py-2 px-4 border-none outline-none rounded-full z-30 font-semibold md:text-xl text-sm' onClick={() => randomPic(3)}>নতুন ছবি</button>
            <canvas ref={canvasRef} className='relative block w-full h-full z-10 touch-none' onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={(e) => painting && movment(e)} onTouchStart={mouseDown} onTouchEnd={mouseUp} onTouchMove={movment} />
            <Image src={`/images/practise_images/p${picNum}.png`} height={1500} width={1000} className='absolute z-20 pointer-events-none mix-blend-multiply w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%]' alt='Practise Image' loading='eager'></Image>
        </Flex>
    )
}

export default Canvas