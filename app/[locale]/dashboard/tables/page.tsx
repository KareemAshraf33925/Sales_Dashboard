import React from 'react'
import Authorstable from '../_components/Authorstable'
import Projectatable from '../_components/Projectatable'

export default function Tables() {
  return (
    <div className='px-5'>
      <Authorstable/>
      <Projectatable/>
    </div>
  )
}
