import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import {GiWorld} from 'react-icons/gi';
import {BiHash, BiHomeCircle, BiMoney, BiUser} from 'react-icons/bi';
import {BsBell, BsBookmarks, BsEnvelope} from 'react-icons/bs';
import { SlOptions } from 'react-icons/sl';
import React from "react";
import FeedCard from "@/components/FeedCard";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

interface YappSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: YappSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notifications',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmarks />
  },
  {
    title: 'Monetization',
    icon: <BiMoney />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  },
  {
    title: 'More Options',
    icon: <SlOptions />
  },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-2xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
          <GiWorld />
          </div>
          <div className="mt-2 text-sm pr-4">
            <ul>
              {SideBarMenuItems.map((item) => (
                <li className="flex justfy-start items-center gap-4 hover:bg-gray-600 rounded-full px-3 py-2 w-fit cursor-pointer mt-2" key = {item.title}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] text-lg py-2 px-0 rounded-full w-full mt-5 font-semibold cursor-pointer">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-auto border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
