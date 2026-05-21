import React from 'react'

const Flex = ({children, className, ...props}) => {
  return (
    <div className={`lg:flex ${className}`} {...props} >{children}</div>
  )
}

export default Flex