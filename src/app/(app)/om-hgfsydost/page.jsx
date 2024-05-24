import React from 'react'
import payload from 'payload'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Styrelsen from '@/app/components/Styrelsen'

const about = async () => {
  const payload = await getPayload({ config: configPromise })
  // Result will be a paginated set of Posts.
  // See /docs/queries/pagination for more.
  const result = await payload.find({
    collection: 'electedgroup', // required
  })

  // console.log(result.docs[0]);

  const data = result.docs
  console.log(data)

  return (
    <>
      <div className="">
        <Styrelsen data={data} />
      </div>
      <div></div>
    </>
  )
}

export default about
