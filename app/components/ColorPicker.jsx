"use client"

import React, { useState } from 'react'
import Flex from './Flex'
import Color from './Color'
import { useColorPicker } from '../context/ColorPickerContext'

const ColorPicker = ({ children, state, name, onClick }) => {
  
  const {color, setColor} = useColorPicker()

  return (
    <Flex className={"flex flex-row gap-x-5"}>
      <Color state={color === "#ffadad"} onClick={() => setColor("#ffadad")} name={"লাল"} color={"#ffadad"} />
      <Color state={color === "#ffd6a5"} onClick={() => setColor("#ffd6a5")} name={"কমলা"} color={"#ffd6a5"} />
      <Color state={color === "#fdffb6"} onClick={() => setColor("#fdffb6")} name={"হলুদ"} color={"#fdffb6"} />
      <Color state={color === "#caffbf"} onClick={() => setColor("#caffbf")} name={"সবুজ"} color={"#caffbf"} />
      <Color state={color === "#9bf6ff"} onClick={() => setColor("#9bf6ff")} name={"আসমানী"} color={"#9bf6ff"} />
      <Color state={color === "#a0c4ff"} onClick={() => setColor("#a0c4ff")} name={"নীল"} color={"#a0c4ff"} />
      <Color state={color === "#bdb2ff"} onClick={() => setColor("#bdb2ff")} name={"বেগুনি"} color={"#bdb2ff"} />
      <Color state={color === "#ffc6ff"} onClick={() => setColor("#ffc6ff")} name={"গোলাপি"} color={"#ffc6ff"} />
    </Flex>

  )
}

export default ColorPicker