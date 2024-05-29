import GoogleMaps from '@/app/components/GoogleMaps'
import React from 'react'

/*
async function getData() {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/geocode/json?address=Huvudskarsvagen14&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4',
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  console.log('TEST: place response ', data)

  return data
}
*/

/*
export async function getServerSideProps() {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/geocode/json?address=Huvudskärsvägen14&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4',
  )
  const data = await res.json()

  console.log(data)
  console.log(data.results[0].formatted_address)
  return {
    props: { address: data.results[0].address_components[3].long_name },
  }
}
*/

const Galleri = async ({ users }) => {
  // const data = await getData()

  // console.log('haha', data.results)

  return (
    <div className="flex justify-center items-center h-screen">
      hej
      {/*<GoogleMaps />*/}
    </div>
  )
}

/*
Galleri.getInitialProps = async () => {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/geocode/json?address=Huvudskärsvägen14&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4',
  )
  const data = await res.json()
  console.log('buu', data)
  return { users: data }
}
*/

export default Galleri
