import React from "react"
import Image from "next/image"

export const ChatArea: React.FC = () => {
  return (
    <div className="container  overflow-hidden h-full mx-auto ">
      <div className="min-w-full  rounded lg:grid lg:grid-cols-3">
        <div className=" lg:col-span-3 lg:block">
          <div className="w-full">
            <div className="relative flex justify-between items-center p-6  border-gray-300">
              <div className="flex items-center">
                <Image
                  src={"/logo.png"}
                  layout="fixed"
                  width={36}
                  height={32}
                />
                <span className="block ml-2  tracking-[-0.02em] font-semibold   text-white">
                  Valuengr
                </span>
              </div>
              <div className="flex ">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="cursor-pointer"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="10"
                    fill="white"
                    fillOpacity="0.03"
                  />
                  <path
                    opacity="0.4"
                    d="M29.101 17.5879H27.8979V16.4116C27.8979 15.9094 27.4952 15.5 26.999 15.5C26.5038 15.5 26.1 15.9094 26.1 16.4116V17.5879H24.899C24.4027 17.5879 24 17.9973 24 18.4995C24 19.0016 24.4027 19.4111 24.899 19.4111H26.1V20.5884C26.1 21.0906 26.5038 21.5 26.999 21.5C27.4952 21.5 27.8979 21.0906 27.8979 20.5884V19.4111H29.101C29.5962 19.4111 30 19.0016 30 18.4995C30 17.9973 29.5962 17.5879 29.101 17.5879Z"
                    fill="white"
                  />
                  <path
                    d="M17.5 23.0155C13.4542 23.0155 10 23.6623 10 26.2466C10 28.8299 13.4332 29.5 17.5 29.5C21.5448 29.5 25 28.8532 25 26.2689C25 23.6846 21.5668 23.0155 17.5 23.0155Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M17.5 20.5542C20.2546 20.5542 22.4626 18.3177 22.4626 15.5276C22.4626 12.7375 20.2546 10.5 17.5 10.5C14.7454 10.5 12.5374 12.7375 12.5374 15.5276C12.5374 18.3177 14.7454 20.5542 17.5 20.5542Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="hover:bg-[#141414] cursor-pointer rounded-xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <rect
                      x="16"
                      y="9"
                      width="8"
                      height="8"
                      rx="4"
                      fill="white"
                    />
                    <rect
                      x="16"
                      y="25"
                      width="8"
                      height="8"
                      rx="4"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="relative flex items-center justify-between pl-6 py-1  border-gray-300">
              <div className="flex items-center">
                <div className="object-cover w-10 h-10 rounded-full">
                  <Image
                    src={"/profile.png"}
                    layout="fixed"
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <span className="block ml-2 tracking-[-0.02em] font-medium text-white">
                    Peter White
                  </span>
                  <span className="block ml-2 tracking-[-0.02em] text-sm font-normal text-[#878787]">
                    last seen recently
                  </span>
                </div>
              </div>
              <div className="flex mr-[25px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className=" mt-0.5 mr-[20.5px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.53174 10.4724C13.5208 14.4604 14.4258 9.84672 16.9656 12.3848C19.4143 14.8328 20.8216 15.3232 17.7192 18.4247C17.3306 18.737 14.8616 22.4943 6.1846 13.8197C-2.49348 5.144 1.26158 2.67244 1.57397 2.28395C4.68387 -0.826154 5.16586 0.589383 7.61449 3.03733C10.1544 5.5765 5.54266 6.48441 9.53174 10.4724Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Bulk/Video">
                    <g id="Video">
                      <path
                        id="Fill 1"
                        opacity="0.4"
                        d="M21.7612 7.44251C21.3422 7.17855 20.8272 7.1552 20.3882 7.37855L18.9061 8.12677C18.3581 8.40291 18.0181 8.96129 18.0181 9.58261V15.4161C18.0181 16.0374 18.3581 16.5948 18.9061 16.873L20.3872 17.6202C20.5882 17.7237 20.8032 17.7735 21.0182 17.7735C21.2762 17.7735 21.5322 17.7004 21.7612 17.5572C22.1802 17.2943 22.4302 16.8384 22.4302 16.339V8.66179C22.4302 8.1623 22.1802 7.70646 21.7612 7.44251Z"
                        fill="white"
                      />
                      <path
                        id="Fill 3"
                        d="M11.9056 20H6.11359C3.69157 20 2.00055 18.3299 2.00055 15.9391V9.06091C2.00055 6.66904 3.69157 5 6.11359 5H11.9056C14.3277 5 16.0187 6.66904 16.0187 9.06091V15.9391C16.0187 18.3299 14.3277 20 11.9056 20Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="relative w-full p-6 overflow-y-auto ">
              <ul className=" font-normal">
                <li className="flex justify-start mt-28 mb-6">
                  <div className="relative max-w-xl px-5 py-5  bg-[#b882e1] text-white rounded-[20px] rounded-bl-[2px] shadow">
                    <span className="block text-base leading-5">
                      Lorem ipsum dolor sit amet,
                      <br /> consectet adipiscing elit ut aliquam.
                    </span>
                  </div>
                </li>
                <li className="flex justify-end mt-5">
                  <div className="relative max-w-xl mr-2 px-5 py-5 text-white bg-[#191919] rounded-[20px] rounded-br-[2px]  shadow">
                    <span className="block text-base leading-5">
                      Lorem ipsum dolor sit amet,
                      <br /> consectet adipiscing elit ut aliquam.
                    </span>
                  </div>
                </li>
                <li className="flex justify-end my-5">
                  <div className="relative max-w-xl mr-2 px-5 py-5 text-white bg-[#191919] rounded-[20px] rounded-br-[2px] shadow">
                    <span className="block text-base leading-5">
                      Consectet adipiscing
                    </span>
                  </div>
                </li>

                <li className="flex justify-center my-5 mr-2 ">
                  <div className="flex ">
                    <div className="relative top-4 left-4">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute cursor-pointer"
                      >
                        <circle
                          cx="19.9999"
                          cy="20"
                          r="20"
                          fill="white"
                          fillOpacity="0.05"
                        />
                        <path
                          d="M25.5539 15.2959C28.0049 15.2959 29.9999 17.3557 29.9999 19.8873V24.9196C29.9999 27.4451 28.0099 29.4997 25.5639 29.4997L14.4479 29.4997C11.9959 29.4997 9.99986 27.4409 9.99986 24.9093V19.877C9.99986 17.3516 11.9909 15.2959 14.4379 15.2959H15.3779L25.5539 15.2959Z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M20.5458 24.0374L23.4548 21.0695C23.7548 20.7627 23.7548 20.2691 23.4528 19.9634C23.1508 19.6587 22.6638 19.6597 22.3638 19.9654L20.7708 21.5905L20.7708 11.2821C20.7708 10.8504 20.4258 10.5 19.9998 10.5C19.5748 10.5 19.2308 10.8504 19.2308 11.2821V21.5905L17.6368 19.9654C17.3368 19.6597 16.8498 19.6587 16.5478 19.9634C16.3968 20.1168 16.3208 20.3168 16.3208 20.518C16.3208 20.717 16.3968 20.9171 16.5458 21.0695L19.4548 24.0374C19.5998 24.1847 19.7958 24.268 19.9998 24.268C20.2048 24.268 20.4008 24.1847 20.5458 24.0374Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="absolute flex left-20 max-w-xl px-5 py-5    text-white ">
                      <span className="text-2xl font-semibold">+12 786 </span>
                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-2.5 ml-1 "
                      >
                        <path
                          d="M13.5495 12C12.3989 12 11.3956 11.7654 10.5394 11.2963C9.68313 10.8222 9.09716 10.1513 8.78143 9.28373L8.66905 2.45145C9.17743 1.60908 9.80889 0.991172 10.5634 0.59773C11.318 0.199244 12.1956 0 13.1963 0C14.0151 0 14.775 0.123582 15.476 0.370744C16.1824 0.612863 16.7978 0.978562 17.3222 1.46784C17.8466 1.95712 18.256 2.57251 18.5503 3.314C18.85 4.05044 18.9998 4.91299 18.9998 5.90164V6.78688H8.83762V4.78941H15.781C15.7757 4.32535 15.666 3.91425 15.4519 3.55612C15.2378 3.19798 14.9408 2.91803 14.5609 2.71627C14.1863 2.50946 13.7528 2.40605 13.2605 2.40605C12.7361 2.40605 12.2759 2.51955 11.8799 2.74653C11.4839 2.96847 11.1735 3.2686 10.9487 3.64691C10.724 4.02522 10.6062 4.44136 10.5955 4.89533V6.79445C10.5955 7.36948 10.7106 7.86633 10.9407 8.28499C11.1708 8.70366 11.4946 9.02648 11.912 9.25347C12.3294 9.48045 12.8217 9.59395 13.3889 9.59395C13.7742 9.59395 14.1221 9.54351 14.4325 9.44262C14.7482 9.34174 15.0184 9.19042 15.2432 8.98865C15.4733 8.78688 15.6472 8.53972 15.765 8.24716L18.9196 8.44388C18.759 9.16015 18.4326 9.78562 17.9403 10.3203C17.448 10.8499 16.8245 11.2636 16.07 11.5612C15.3208 11.8537 14.4806 12 13.5495 12ZM5.07294 9.76797C5.57596 9.76797 6.02013 9.67465 6.40542 9.48802C6.79072 9.29634 7.09307 9.03909 7.31248 8.71627C7.53189 8.39344 7.64159 8.02774 7.64159 7.61917V6.38588C7.53456 6.45145 7.3874 6.51198 7.2001 6.56747C7.01816 6.61791 6.81213 6.66583 6.58202 6.71122C6.35191 6.75158 6.1218 6.78941 5.89169 6.82472C5.66159 6.85498 5.45288 6.88272 5.26558 6.90794C4.86423 6.96343 4.51372 7.0517 4.21404 7.17276C3.91437 7.29382 3.68158 7.45776 3.51569 7.66457C3.3498 7.86633 3.26685 8.11854 3.26685 8.42119C3.26685 8.86003 3.43542 9.19546 3.77256 9.42749C4.11504 9.65448 4.5485 9.76797 5.07294 9.76797ZM4.28629 11.9924C3.43542 11.9924 2.68623 11.8638 2.03872 11.6066C1.39655 11.3443 0.8962 10.9559 0.537659 10.4414C0.179118 9.92686 -0.000152588 9.28878 -0.000152588 8.52711C-0.000152588 7.88146 0.125604 7.34174 0.377118 6.90794C0.628632 6.4691 0.971119 6.11601 1.40458 5.84868C1.83804 5.58134 2.33304 5.37705 2.88958 5.23581C3.44612 5.09458 4.02675 4.99874 4.63145 4.9483C5.34853 4.87768 5.92648 4.80958 6.36529 4.74401C6.8041 4.67844 7.12251 4.58512 7.32051 4.46406C7.51851 4.33796 7.61751 4.15132 7.61751 3.90416V3.85876C7.61751 3.37957 7.45697 3.00883 7.13589 2.74653C6.82016 2.48424 6.37064 2.35309 5.78734 2.35309C5.17729 2.35309 4.68764 2.47919 4.3184 2.7314C3.94915 2.98361 3.70834 3.30391 3.59596 3.69231L0.433307 3.45019C0.593848 2.74401 0.906903 2.13367 1.37247 1.61917C1.84339 1.09962 2.45612 0.701134 3.21066 0.423707C3.9652 0.141236 4.84818 0 5.85959 0C6.23953 0 6.6168 0.032787 6.9914 0.0983603C7.36599 0.163934 7.72186 0.269861 8.059 0.416141C8.40148 0.562421 8.70383 0.761664 8.96605 1.01387C9.23362 1.26608 9.445 1.57629 9.60019 1.94451L9.18278 9.8739H8.96605C8.74664 10.3077 8.40148 10.6835 7.93056 11.0013C7.46499 11.319 6.91648 11.5637 6.28502 11.7352C5.65356 11.9067 4.98731 11.9924 4.28629 11.9924Z"
                          fill="white"
                        />
                      </svg>
                      <span className="ml-4 mt-1.5 text-sm text-[#868686]">
                        Received
                      </span>
                      <span className="mt-1.5 ml-10 text-sm text-[#868686]">
                        21:10
                      </span>
                    </div>

                    <svg
                      width="367"
                      height="74"
                      viewBox="0 0 367 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="365"
                        height="72"
                        rx="20"
                        stroke="white"
                        strokeOpacity="0.15"
                        strokeLinecap="round"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-start my-5">
                  <div className="relative max-w-xl px-5 py-5  bg-[#b882e1] text-white rounded-[20px] rounded-bl-[2px] shadow">
                    <span className="block text-base leading-5">
                      <svg
                        width="156"
                        height="25"
                        viewBox="0 0 156 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="6.57898"
                          width="3"
                          height="11.8421"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="106.125"
                          y="6.57886"
                          width="3"
                          height="11.8421"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="6.63281"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="112.758"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="13.2656"
                          y="5.26318"
                          width="3"
                          height="14.4737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="119.391"
                          y="5.26318"
                          width="3"
                          height="14.4737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="19.8984"
                          y="3.94727"
                          width="3"
                          height="17.1053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="126.023"
                          y="3.94727"
                          width="3"
                          height="17.1053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="26.5312"
                          y="9.21045"
                          width="3"
                          height="6.57895"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="132.656"
                          y="9.21045"
                          width="3"
                          height="6.57895"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="33.1641"
                          y="10.5264"
                          width="3"
                          height="3.94737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="139.289"
                          y="10.5264"
                          width="3"
                          height="3.94737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="39.7969"
                          y="3.94727"
                          width="3"
                          height="17.1053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="145.922"
                          y="3.94727"
                          width="3"
                          height="17.1053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="46.4297"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="152.555"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="53.0625"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="59.6953"
                          y="7.89478"
                          width="3"
                          height="9.21053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="66.3281"
                          y="5.26318"
                          width="3"
                          height="14.4737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="72.9609"
                          y="3.94727"
                          width="3"
                          height="17.1053"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="79.5938"
                          y="10.5264"
                          width="3"
                          height="3.94737"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="86.2266"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="92.8594"
                          y="6.57886"
                          width="3"
                          height="11.8421"
                          rx="1.5"
                          fill="white"
                        />
                        <rect
                          x="99.4922"
                          width="3"
                          height="25"
                          rx="1.5"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="flex justify-end my-5 mr-2">
                  <div className="relative max-w-xl px-5 py-5 text-white bg-[#191919] rounded-[20px] rounded-br-[2px] shadow">
                    <span className="block text-base leading-5">
                      Consectet adipiscing elit ut aliquam.
                    </span>
                  </div>
                </li>
                <li className="flex justify-start items-center">
                  <div className="relative px-5 py-5  bg-[#b882e1] text-white rounded-[20px] rounded-bl-[2px] shadow">
                    <span className="block text-base leading-5">
                      Lorem ipsum dolor sit amet,
                      <br /> consectet adipiscing elit ut aliquam.
                    </span>
                  </div>
                  <div className="bg-[#6054F0] relative left-10 -top-6 rounded-full w-1 h-[100px]"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative bottom-5 items-center  w-full p-3 mt-1  border-gray-300">
        <div className="w-6 h-6   cursor-pointer rounded-full">
          <Image
            src={"/clip.svg"}
            height={24}
            width={24}
            className="z-50"
            layout="fixed"
          />
        </div>
        <input
          type="text"
          placeholder="Type something..."
          className=" py-2 px-2 placeholder-opacity-50 placeholder-[#575757] text-white mx-3 bg-[#0d0d0d] rounded-full outline-none "
          name="message"
          required
        />
        <div className="w-12 h-12 absolute left-3/4 ml-6  hover:bg-[#161616] cursor-pointer rounded-full">
          <Image src={"/flash.svg"} height={48} width={48} layout="fixed" />
        </div>
      </div>
    </div>
  )
}
