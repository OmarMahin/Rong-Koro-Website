import React from 'react'
import Flex from './Flex'
import PaintingTools from './PaintingTools'
import Colors from './Colors'

const Toolbar = () => {
  return (
    <Flex className={'flex flex-row justify-between items-center pt-5'}>
        <div>
            <h1>Logo</h1>
        </div>
        <Flex className={'flex flex-row gap-x-2 items-center'}>
            <PaintingTools/>
            <Colors/>
        </Flex>
    </Flex>
  )
}

export default Toolbar