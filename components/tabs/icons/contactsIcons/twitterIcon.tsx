import React from 'react'
import Image from 'next/image'
import Twitter from './twitter.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const TwitterIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Twitter}
        className='hover:scale-125 p-1'
        alt='TwitterIcon'
    />
  )
}

export default TwitterIcon