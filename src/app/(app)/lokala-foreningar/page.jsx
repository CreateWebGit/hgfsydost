import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Foreningar from '@/app/components/Foreningar'

const foreningar = async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'associations', // required
  })

  const data = result.docs
  console.log(data)

  return (
    <div className="">
      <h1 className="my-8 text-center">VÅRA LOKALA FÖRENINGAR</h1>
      <p className="m-auto my-8 w-[600px] text-center">
        I Syd-Ost i Stockholm finns det flera lokala hyresgästföreningar som arbetar för inflytande,
        trygghet och gemenskap för hyresgästerna.
      </p>
      <div className="max-w-[1200px] m-auto">
        <Foreningar data={data} />
      </div>
    </div>
  )
}

export default foreningar
