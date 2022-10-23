import React, { useState } from "react"
import { Conversation } from "./Conversation"
import Image from "next/image"

export const ChatList: React.FC = () => {
  const [isPersonal, setIsPersonal] = useState<boolean>(true)

  return (
    <div className="container rounded-2xl  bg-[#141414] h-full   lg:col-span-1">
      <div className="flex justify-around  items-start">
        <div className="">
          <h2 className="mt-8  ml-6 text-[20px] tracking-[-0.02em] font-semibold text-white">
            Chats
          </h2>
        </div>
        <div className="flex flex-row gap-4 mt-6 items-baseline text-white">
          <h1
            onClick={() => setIsPersonal(true)}
            className={`${
              isPersonal ? "py-3 px-4 bg-[#b882e1]" : "text-[#575757] py-2"
            } tracking-[-0.02em] cursor-pointer text-sm rounded-xl `}
          >
            Personal
          </h1>
          <h1
            onClick={() => setIsPersonal(false)}
            className={`${
              isPersonal
                ? "text-[#575757] py-2"
                : " text-white py-3 px-4 bg-[#b882e1] rounded-xl"
            }  text-sm cursor-pointer  tracking-[-0.02em] ml-0.5`}
          >
            Work
          </h1>
        </div>
      </div>
      <div className="ml-8 mr-4 mt-3 bg-[#0F0F0F] rounded-xl ">
        <div className="relative  ">
          <span className="absolute  inset-y-0 left-0 flex items-center  pl-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <circle
                  cx="11.5"
                  cy="11.5"
                  r="6.5"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M16.3047 16.3022L20.7201 20.7177"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </span>
          <input
            type="search"
            className="block w-full  rounded-2xl py-3 pl-12  bg-[#0f0f0f] text-white placeholder-[#575757] placeholder-opacity-80 text-base  outline-none"
            name="search"
            placeholder="Search user"
            required
          />
          <div className="bg-[#6054F0] absolute left-64 ml-0.5 top-16 rounded-full w-1 h-[100px]"></div>
        </div>
      </div>
      <ul className="overflow-auto scroller  h-full">
        <span className=" ml-8 flex mb-4 mt-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6C14 8.73125 10.3438 13.5938 8.74062 15.6C8.35625 16.0781 7.64375 16.0781 7.25938 15.6C5.62813 13.5938 2 8.73125 2 6C2 2.68625 4.68625 0 8 0C11.3125 0 14 2.68625 14 6Z"
              fill="white"
              fillOpacity="0.15"
            />
          </svg>
          <div className="">
            <p className="text-sm ml-2.5  text-[#373737] font-medium">Pinned</p>
          </div>
        </span>
        <li>
          <a className="flex items-center mx-3 pl-4  py-2 text-sm transition duration-150 ease-in-out  border-gray-300 cursor-pointer bg-[#1b1b1b] rounded-2xl focus:outline-none">
            <div className="rounded-full">
              <Image
                src={"/profile.png"}
                layout="fixed"
                width={40}
                height={40}
              />
            </div>
            <div className="w-full pb-2">
              <div className="flex justify-between">
                <span className="block ml-2 font-semibold text-base tracking-[-0.02em] text-white">
                  Peter White
                </span>
              </div>
              <span className="block ml-2 text-sm font-normal tracking-[-0.02em] text-[#B882E1]">
                Typing...
              </span>
            </div>
          </a>

          <Conversation />
          <Conversation />
          <Conversation />
          <span className=" ml-8 flex items-center mb-6 mt-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2411_1567)">
                <path
                  d="M15.5483 0.462828C15.1481 0.053861 14.5559 -0.097401 14.0037 0.0626645L1.1264 3.78339C0.543759 3.94505 0.13079 4.40684 0.0195441 4.99268C-0.0941024 5.58973 0.30286 6.34844 0.821472 6.66537L4.84792 9.12397C5.26089 9.37688 5.79391 9.31365 6.13565 8.97111L10.7463 4.36042C10.9784 4.11952 11.3626 4.11952 11.5947 4.36042C11.8268 4.59172 11.8268 4.96867 11.5947 5.20877L6.97599 9.81946C6.63345 10.162 6.56943 10.6934 6.82153 11.1072L9.28174 15.1488C9.56985 15.6282 10.0661 15.9011 10.6103 15.9011C10.6743 15.9011 10.7463 15.9011 10.8104 15.8923C11.4346 15.8131 11.9308 15.3881 12.1149 14.7879L15.9325 2.00746C16.1005 1.46324 15.9485 0.870995 15.5483 0.462828Z"
                  fill="white"
                  fillOpacity="0.15"
                />
              </g>
              <defs>
                <clipPath id="clip0_2411_1567">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-sm ml-2.5  text-[#373737] font-medium">
              All chats
            </p>
          </span>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </li>
      </ul>
    </div>
  )
}
