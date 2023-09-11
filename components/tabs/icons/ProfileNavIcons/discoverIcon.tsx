import React from 'react'
import Image from 'next/image'
import Discover from './discover.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const DiscoverIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Discover}
        className='hover:scale-125'
        alt='DiscoverIcon'
    />
  )
}

export default DiscoverIcon