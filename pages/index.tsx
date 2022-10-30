import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { ChatArea } from "../components/ChatArea"
import { ChatList } from "../components/ChatList"
import styles from "../styles/Home.module.css"
import { SmoothCorners } from "react-smooth-corners"

const Home: NextPage = () => {
  return (
    <div className="flex justify-center    items-center">
      <Head>
        <title>Aerx</title>
        <meta name="description" content="Aerx UI" />
      </Head>
      <SmoothCorners corners="80">
        <div className=" grid w-[712px]   my-10 bg-[#0d0d0d] h-[1002px] rounded-[40%] font-poppins    grid-cols-7 ">
          <div className=" w-[299px] h-[1000px]  ">
            <ChatList />
          </div>
          <div className="col-start-4 h-[1000px]   w-[413px]">
            <ChatArea />
          </div>
        </div>
      </SmoothCorners>
    </div>
  )
}

export default Home
