"use client"

import React, { useState } from 'react'
import Flex from './Flex'
import { FaPaintBrush } from "react-icons/fa"
import { BsEraserFill } from "react-icons/bs"
import { MdDeleteForever } from "react-icons/md"
import Tool from './Tool'
import { usePaintTool } from '../context/PaintToolContext'
import { speakInBangla } from '../utils/textToSpeech'

const PaintingTools = () => {

    const {tool, setTool} = usePaintTool()

    const clearCanvas = ()=>{
        const clearEvent = new CustomEvent('clearCanvas')
        window.dispatchEvent(clearEvent)
    }

    
    return (
        <Flex className={"flex flex-row gap-x-5"}>
            <Tool state = {tool === "brush" } onClick={() => 
            setTool("brush")

                
            } name={"তুলি"}>
                <FaPaintBrush className='text-[#a041bf]'/>
            </Tool>
            <Tool state = {tool === "eraser"} onClick={() => setTool("eraser")} name={"রাবার"}>
                <BsEraserFill className='text-[#419bbf]'/>
            </Tool>
            <Tool onClick={() => clearCanvas()} name={"মুছে ফেলো"}>
                <MdDeleteForever className='text-[#e0224e] text-center'/>
            </Tool>
        </Flex>
    )
}

export default PaintingTools