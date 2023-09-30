import React from 'react'

export default function SingleResult({result}) {
  return (
    <div>
        <img src={result.imgSrc} />
        <p>Location: {result.city}, {result.country}</p>
        <p>Address: {result.streetAddress}</p>
        <p>ZipCode : {result.zipcode}</p>
        <p>Days On Zillow: {result.daysOnZillow}</p>
        <p>Is Featured : {result.isFeatured?"yes":"no"}</p>
    </div>
  )
}
