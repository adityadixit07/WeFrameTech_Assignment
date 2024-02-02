import React from 'react'
import threedots from '../assets/icons/threedots.png'
import Image from 'next/image'

const Button = () => {
  return (
      <div className="action-buttons mt-4 flex items-center justify-between">
        <button className="bg-[#E8E9FF] text-sm text-[#7750F1] px-4 py-2 rounded-md mr-2 w-[80%]">
          View
        </button>
        <span className="bg-gray-100  px-3 py-4 rounded-md cursor-pointer">
            <Image src={threedots} alt="view" />
          </span>
      
      </div>
  )
}

export default Button
