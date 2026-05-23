"use client"

import React, { useState } from 'react'
import Flex from './Flex'
import Color from './Color'
import { useColorPicker } from '../context/ColorPickerContext'

const ColorPicker = ({ children, state, name, onClick }) => {
  
  const {color, setColor} = useColorPicker()

  return (
    <Flex className={"flex flex-row md:gap-x-5 gap-x-2 justify-center flex-wrap gap-y-1"}>
      <Color state={color === "#e6261f"} onClick={() => setColor("#e6261f")} name={"লাল"} color={"#e6261f"} />
      <Color state={color === "#eb7532"} onClick={() => setColor("#eb7532")} name={"কমলা"} color={"#eb7532"} />
      <Color state={color === "#f7d038"} onClick={() => setColor("#f7d038")} name={"হলুদ"} color={"#f7d038"} />
      <Color state={color === "#a3e048"} onClick={() => setColor("#a3e048")} name={"সবুজ"} color={"#a3e048"} />
      <Color state={color === "#34bbe6"} onClick={() => setColor("#34bbe6")} name={"আসমানী"} color={"#34bbe6"} />
      <Color state={color === "#4355db"} onClick={() => setColor("#4355db")} name={"নীল"} color={"#4355db"} />
      <Color state={color === "#d23be7"} onClick={() => setColor("#d23be7")} name={"বেগুনি"} color={"#d23be7"} />
      <Color state={color === "#ee55c8"} onClick={() => setColor("#ee55c8")} name={"গোলাপি"} color={"#ee55c8"} />
    </Flex>

  )
}

export default ColorPicker