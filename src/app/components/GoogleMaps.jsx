'use client'

import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const GoogleMaps = async ({ long, lat }) => {
  const mapRef = useRef(null)

  /*
  async function getData() {
    const res = await fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=Huvudskärsvägen14&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4',
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const data = await getData()

  console.log(data)
  */

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'quarterly',
      })

      const { Map } = await loader.importLibrary('maps')

      const locationInMap = {
        lat: lat,
        lng: long,
      }

      const options = {
        center: locationInMap,
        zoom: 15,
        id: 'NEXT_MAPS_SUN',
      }

      const map = new Map(mapRef.current, options)
    }

    /*
    async function getData() {
      const res = await fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=Huvudskärsvägen14&key=AIzaSyCnB2gPvNPFmo5PNRBWl1Is-IVSsMkxSm4',
      )
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

      console.log('haha')

      return res.json()
    }

    */

    initMap()
  }, [])

  return (
    <div className="h-[200px] w-[300px]" ref={mapRef}>
      haha
    </div>
  )
}

export default GoogleMaps
