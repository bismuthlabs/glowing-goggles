import React from 'react'
import Image from 'next/image'
import Email from './email.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const EmailIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Email}
        className='hover:scale-125 p-1'
        alt='EmailIcon'
    />
  )
}

export default EmailIcon