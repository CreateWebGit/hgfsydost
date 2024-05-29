'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Foreningar = ({ data }) => {
  console.log(data)

  const router = useRouter()

  const handleClick = (id) => {
    console.log(id)
    router.replace(`lokala-foreningar/${id}`)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((forening) => (
        <div
          className="border w-[200px] py-8 cursor-pointer hover:bg-slate-400"
          onClick={() => handleClick(forening.id)}
        >
          <div className="text-center">{forening.title}</div>
          <div className="text-center"> LH nummer: {forening.tabOne.LH_nummer}</div>
          <div className="text-center"> {forening.tabOne.stadsdel}</div>
          <div className="text-center"> {forening.tabOne.bostadsföretag}</div>
        </div>
      ))}
    </div>
  )
}

export default Foreningar
