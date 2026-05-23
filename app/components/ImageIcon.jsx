import React from 'react'
import Flex from './Flex'
import Image from 'next/image'

const ImageIcon = ({ state, onClick, imageNum, ...props}) => {
    return (
        <Flex className={'flex flex-col gap-y-2 items-center hover:cursor-pointer'} onClick={onClick} {...props} >

            <Flex className={`flex md:w-14 md:h-14 w-8 h-8 items-center justify-center rounded-full border-2 border-black text-[25px]  ${state ? "outline-2 outline-offset-4 " : ""} p-1 duration-100`}>
                <Image src={`/images/practise_images/p${imageNum}.png`} height={1500} width={1000} alt='Practise Image' loading='eager'/>
            </Flex>
        </Flex>

    )
}

export default ImageIcon