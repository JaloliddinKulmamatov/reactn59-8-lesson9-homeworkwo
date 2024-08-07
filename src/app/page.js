import React from 'react';
import Countries from '@/components/Countries/Countries';
import LineChart from '@/components/Chart/LineChart';
import Map from "../../public/map.png"
import Image from 'next/image';

export default function home(params) {
  return (
    <div className='flex bg-black'>
      <Countries />
      <div>
      <Image src={Map}/>
      <LineChart/>
      </div>
      <Countries />

    </div>
  );
}

