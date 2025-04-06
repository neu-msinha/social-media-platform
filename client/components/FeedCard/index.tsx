import React from 'react';
import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
    return <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className="grid grid-cols-12 gap-3">
            <div className='col-span-1'>
                <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/180873309?v=4"
                alt="user-image" height={50} width={50} />
            </div>
            <div className='col-span-11'>
                <h5>Mayukh Sinha</h5>
                <pre></pre>
                <p>
                This repository contains the tool and the policy library for
                validating GKE clusters against configuration best practices
                </p>
                <div className='flex justify-between mt-5 text-lg items-center p-2 w-[90%]'>
                    <div>
                        <BiMessageRounded />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiUpload />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard;