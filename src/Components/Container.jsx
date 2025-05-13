import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-[500px] lg:w-[1320px] mx-auto">{children}</div>
  )
}

export default Container