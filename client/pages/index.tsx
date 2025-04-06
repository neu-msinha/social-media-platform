import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import {GiWorld} from 'react-icons/gi';
import {BiHash, BiHomeCircle, BiUser} from 'react-icons/bi';
import {BsBell, BsBookmarks, BsEnvelope} from 'react-icons/bs';
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    title: 'Profile',
    icon: <BiUser />
  },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
          <GiWorld />
          </div>
          <div className="mt-4 text-1xl font-semibold pr-4">
            <ul>
              {SideBarMenuItems.map((item) => (
                <li className="flex justfy-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key = {item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] text-lg p-3 rounded-full w-full mt-5 font-semibold cursor-pointer">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
