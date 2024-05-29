import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Forening from '@/app/components/forening'

//import Foreningar from '@/app/components/Foreningar'

async function getData(adress) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4`,
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  //console.log('TEST: place response ', data)

  return data
}

const page = async ({ params }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.findByID({
    collection: 'associations',
    id: params.id,
  })

  // console.log('testar', await data.tabTwo.streetadress)

  let adress = await result.tabTwo.streetadress
  const myadress = adress.split(' ').join('+').replace('ä', 'a')

  const data = await getData(myadress)

  //console.log('haha', data.results[0].geometry.location.lat)

  const lat = data.results[0].geometry.location.lat
  const long = data.results[0].geometry.location.lng

  return (
    <div>
      <Forening data={result} lat={lat} long={long} />
    </div>
  )
}

export default page
