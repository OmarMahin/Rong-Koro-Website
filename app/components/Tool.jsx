import React, { Children } from 'react'
import Flex from './Flex'

const Tool = ({ children , state, onClick}) => {
    return (
        <Flex className={`w-10 h-10 items-center justify-center rounded-full border-2  text-[25px] hover:cursor-pointer ${state ? "outline-2 outline-offset-4 border-gray-400" : "border-gray-700"} duration-100`} onClick={onClick}>

            {children}
        </Flex>
    )
}

export default Tool