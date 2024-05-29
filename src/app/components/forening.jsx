'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import GoogleMaps from './GoogleMaps'

const Forening = ({ data, lat, long }) => {
  console.log('buu', long)
  const router = useRouter()
  return (
    <div>
      <div className="!relative w-full h-full block">
        <div
          className="!absolute !top-2 !left-2 flex items-center cursor-pointer z-50"
          onClick={() => router.push('/lokala-foreningar')}
        >
          <MdKeyboardDoubleArrowLeft /> <span className="">Lokala Föreningar</span>
        </div>
        <div className="!relative text-center pt-8 text-2xl">{data.title}</div>

        <div className="mt-[150px] ml-20 flex gap-8">
          <div>
            <div> {data.tabTwo.kontaktperson} </div>
            <div> {data.tabTwo.telefon} </div>
            <div> {data.tabTwo.epost} </div>
          </div>
          <div>
            <GoogleMaps long={long} lat={lat} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forening
