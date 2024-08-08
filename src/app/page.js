import React from 'react';
import Countries from '@/components/Countries/Countries';
import LineChart from '@/components/Chart/LineChart';
import Map from "../../public/map.png"
import BackToTop from '@/components/Backtop/Backtop';
import Image from 'next/image';

export default function home(params) {
  return (
    <div className='flex bg-black'>
      <Countries />
      <div>
      <Image src={Map}/>
      <BackToTop />
      <LineChart/>
      </div>
      <Countries />

    </div>
  );
}

