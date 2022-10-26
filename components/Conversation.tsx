import React from "react"
import Image from "next/image"

export const Conversation: React.FC = () => {
  return (
    <a className="flex items-center pb-[9px] pl-4 mx-4 pt-[14px] text-sm transition duration-150 ease-in-out  border-gray-300 cursor-pointer hover:bg-[#1b1b1b]  rounded-[15px] focus:outline-none">
      <div className="rounded-full ml-[px]">
        <Image src={"/profile2.png"} layout="fixed" width={40} height={40} />
      </div>
      <div className="w-full pb-2">
        <div className="flex justify-between">
          <span className="block ml-2.5 font-semibold text-base tracking-[-0.02em] text-white">
            Peter Smith
          </span>
          <span className="block mr-4 text-sm text-gray-600 opacity-80 tracking-[-0.02em]">
            21:10
          </span>
        </div>
        <span className="block ml-2.5 mt-[2px] w-full leading-[14px] text-sm tracking-[-0.02em] text-gray-600">
          Lorem ipsum dolor sit ame...
        </span>
      </div>
    </a>
  )
}
