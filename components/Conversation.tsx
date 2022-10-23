import React from "react"
import Image from "next/image"

export const Conversation: React.FC = () => {
  return (
    <a className="flex items-center mx-3 pl-4  py-2 text-sm transition duration-150 ease-in-out  border-gray-300 cursor-pointer hover:bg-[#1b1b1b] rounded-2xl focus:outline-none">
      <div className="rounded-full">
        <Image src={"/profile2.png"} layout="fixed" width={40} height={40} />
      </div>
      <div className="w-full pb-2">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold text-base tracking-[-0.02em] text-white">
            Peter Smith
          </span>
          <span className="block mr-2 text-sm text-gray-600 opacity-80 tracking-[-0.02em]">
            21:10
          </span>
        </div>
        <span className="block ml-2 text-sm tracking-[-0.02em] text-gray-600">
          Lorem ipsum dolor sit ame...
        </span>
      </div>
    </a>
  )
}
