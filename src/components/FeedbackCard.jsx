import React from 'react'
import { quotationMark } from '../assets'

const FeedbackCard = ({ name, designation, avatar }) => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
    <div className='flex justify-between'>
      <div className='flex gap-4'>
              <img src={avatar} />
              <div>
                  <h1>{name}</h1>
                  <p>{designation}</p>
              </div>
          
          </div>
          <img className='h-8' src={quotationMark} />
    </div>

    <div className='py-8'>
      <h3 className='text-lg'>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</h3>
    </div>
  </div>
  )
}

export default FeedbackCard
