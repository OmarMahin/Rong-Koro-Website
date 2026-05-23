import React from 'react'
import Flex from './Flex'

const Color = ({ state, name, onClick, color }) => {
  return (
    <Flex className={'flex flex-col gap-y-2 items-center hover:cursor-pointer'} onClick={onClick}>

            <Flex className={`flex md:w-10 md:h-10 w-6 h-6 items-center justify-center rounded-full border-2 border-black text-[25px]  ${state ? "outline-2 outline-offset-4 " : ""} duration-100`} style={{ backgroundColor: color }}>
            </Flex>
            <span>{name}</span>
        </Flex>
  )
}

export default Color