import React, { Children } from 'react'
import Flex from './Flex'

const Tool = ({ children, state, name, onClick }) => {
    return (
        <Flex className={'flex flex-col gap-y-2 items-center'}>

            <Flex className={`flex  md:w-10 md:h-10 w-7 h-7 items-center justify-center rounded-full border-2  md:text-[25px] text-[19px] hover:cursor-pointer ${state ? "outline-2 outline-offset-4 border-gray-400" : "border-gray-700"} duration-100`} onClick={onClick}>

                {children}
            </Flex>
            <span>{name}</span>
        </Flex>
    )
}

export default Tool