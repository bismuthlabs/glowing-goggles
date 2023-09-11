import React from 'react'
import Image from 'next/image'
import messenger from './messenger.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const MessengerIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={messenger}
        className='hover:scale-125 p-1'
        alt='messengerIcon'
    />
  )
}

export default MessengerIcon
