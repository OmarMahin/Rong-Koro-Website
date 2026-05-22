import React from 'react'
import Flex from './Flex'

const Color = ({ state, name, onClick, color }) => {
  return (
    <Flex className={'flex flex-col gap-y-2 items-center'}>

            <Flex className={`flex w-10 h-10 items-center justify-center rounded-full border-2 border-black text-[25px] hover:cursor-pointer ${state ? "outline-2 outline-offset-4 " : ""} duration-100`} onClick={onClick} style={{ backgroundColor: color }}>
            </Flex>
            <span>{name}</span>
        </Flex>
  )
}

export default Color