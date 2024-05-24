'use client'
import React, { useEffect, useState } from 'react'

const Styrelsen = ({ data }) => {
  const [categoy, setCategory] = useState('Föreningsstyrelsen')

  function handleClick(id, cat) {
    setCategory(cat)
    console.log('valde: ', categoy)
  }

  useEffect(() => {}, [])

  console.log(data)

  return (
    <>
      <div className="flex">
        <div className="">
          {data.map((medlemmar) => (
            <div>
              <div onClick={(ja) => handleClick(ja, medlemmar.title)} className="w-72 border">
                {medlemmar.title}
              </div>
              {/*
              <div>
                {medlemmar.title === categoy ? (
                  <>
                    {medlemmar.styrelsemedlemar.map((person) => (
                      <>{person?.blockName}</>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
              */}
            </div>
          ))}
        </div>
        <div>
          {data.map((medlemmar) => (
            <>
              {medlemmar.title === categoy ? (
                <div className="flex flex-wrap">
                  {medlemmar.styrelsemedlemar.map((person) => (
                    <div className="p-8 m-8 border w-72  inline-block">
                      <div>{person?.blockName}</div>
                      <div className="flex flex-row">
                        <div className="flex gap-1">
                          {person?.uppdrag.map((uppdrag) => (
                            <div className="">{uppdrag}</div>
                          ))}
                        </div>
                      </div>
                      <div>{person?.epost}</div>
                      <div>{person?.phone}</div>
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Styrelsen
