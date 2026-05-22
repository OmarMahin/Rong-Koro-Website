import React from 'react'
import Flex from './Flex'
import PaintingTools from './PaintingTools'
import ColorPicker from './ColorPicker'

const Toolbar = () => {
  return (
    <Flex className={'flex flex-col w-full gap-y-4'}>
      <Flex className={'flex flex-row justify-between items-center pt-5'}>
        <div>
          <h1>Logo</h1>
        </div>
        <PaintingTools />
      </Flex>
      <Flex className={'flex flex-row justify-around items-center'}>
        <ColorPicker />
      </Flex>
    </Flex>
  )
}

export default Toolbar