"use client"

import Banner from '../components/Banner'

import me from "@/public/me.png"
import Image from 'next/image'
import { Star } from '@/ui/Icons'
import { useEffect, useState } from 'react'

const rawData = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    id: "cse45798437945",
    score: 34.6
  },
  {
    name: "Alice",
    email: "alice@gmail.com",
    id: "cse45798437945",
    score: 32.2
  },
  {
    name: "bob",
    email: "bob@gmail.com",
    id: "cse45798437945",
    score: 38.6
  },
  {
    name: "Alex",
    email: "alex@gmail.com",
    id: "cse45798437945",
    score: 34.6
  },
  {
    name: "Alexender",
    email: "alexender@gmail.com",
    id: "cse45798437945",
    score: 30.6
  },
  {
    name: "Tom",
    email: "tom@gmail.com",
    id: "cse45798437945",
    score: 34.6
  },
]

export default function page() {

  const [data, setData] = useState<any>(rawData);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => b.score - a.score);
    setData(sorted);
  }, [])

  return (
    <div>
      <Banner></Banner>

      <div className='max-w-7xl mx-auto relative -mt-40'>

        {/* FOR 3 PERSON */}
        <div className='flex items-center justify-center'>
          <div className='flex gap-x-5'>

            <div className='relative top-20'>
              <div className='flex justify-center'>
                <div className='flex gap-x-2'>
                  <Star w={40}></Star>
                  <Star w={40}></Star>
                </div>
              </div>
              <Image className='h-35 w-35 object-cover rounded-full border-8 border-white' src={me} height={1000} width={1000} alt='me'></Image>
              <h1 className='text-center'>{data[1].name} (2nd)</h1>
              <h1 className='text-center'>Score: {data[1].score}</h1>
            </div>


            <div>
              <div className='flex justify-center'>
                <div className='flex gap-x-2'>
                  <div className='relative top-2'><Star w={40}></Star></div>
                  <div className='relative -top-2'><Star w={40}></Star></div>
                  <div className='relative top-2'><Star w={40}></Star></div>
                </div>
              </div>
              <Image className='h-35 w-35 object-cover rounded-full border-8 border-white' src={me} height={1000} width={1000} alt='me'></Image>
              <h1 className='text-center'>{data[0].name} (1st)</h1>
              <h1 className='text-center'>Score: {data[0].score}</h1>
            </div>


            <div className='relative top-20'>
              <div className='flex justify-center'>
                <div className='flex gap-x-2'>
                  <Star w={40}></Star>
                </div>
              </div>
              <Image className='h-35 w-35 object-cover rounded-full  border-8 border-white' src={me} height={1000} width={1000} alt='me'></Image>
              <h1 className='text-center'>{data[2].name} (3rd)</h1>
              <h1 className='text-center'>Score: {data[2].score}</h1>
            </div>

          </div>
        </div>



        {/* FOR OTHERS PERSON */}
        <section className='mt-40'>
          {
            data.slice(4).map((score: any, idx: any) => {
              return (
                <div className='mt-5' key={idx + 4}>
                  <h1>{score.name}</h1>
                  <h1>Score: {score.score}</h1>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}
