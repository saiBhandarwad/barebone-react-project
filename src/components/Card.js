import React from 'react'

export default function Card({amount,bgColor,msg}) {
  return (
    <div className='rounded-lg border-2 inline-block px-4 py-2 border-slate-700' style={{"backgroundColor":bgColor}}>
      <div className='text-center font-bold'>{amount}</div>
      <div className='text-center'>{msg}</div>
    </div>
  )
}
