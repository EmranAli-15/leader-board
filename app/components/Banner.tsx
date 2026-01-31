import React from 'react'
import leader_board from "@/public/leader board.jpg"
import Image from 'next/image'

export default function Banner() {
  return (
    <div>
        <div>
          <Image className='h-[300px] object-cover' alt='banner image' src={leader_board} height={300} width={3000}></Image>
        </div>
        This is the Banner of the page
    </div>
  )
}
