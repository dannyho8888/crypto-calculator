import React from 'react'

function Currency({amount}) {
  return (
    <div className="">
        <div className="px-1">BTC</div>
        <input className="border-2 border-gray-300 p-1 font-bold px-10"
        type="number" 
        />
    </div>
  )
}

export default Currency