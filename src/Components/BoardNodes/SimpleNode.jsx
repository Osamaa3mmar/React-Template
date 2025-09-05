import React from 'react'

export default function SimpleNode({dragging}) {
    console.log(dragging)
  return (
    <div className={`${dragging?"bg-transparent text-primary":"bg-primary"} duration-300  text-xl font-bold shadow rounded-3xl shadow-primary w-[140px] flex items-center justify-center aspect-square `}>
      SimpleNode
    </div>
  )
}
