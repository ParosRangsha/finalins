import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className="w-[450px] lg:w-[1320px] mx-auto">{children}</div>
  )
}

export default Container