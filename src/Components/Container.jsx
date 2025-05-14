import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-full lg:w-[1320px] mx-auto px-[20px] lg:px-0">{children}</div>
  )
}

export default Container