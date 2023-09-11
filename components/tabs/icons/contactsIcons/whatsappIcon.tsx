import React from 'react'
import Image from 'next/image'
import whatsapp from './whatsapp.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const WhatsappIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={whatsapp}
        className='hover:scale-125 p-1'
        alt='whatsappIcon'
    />
  )
}

export default WhatsappIcon
