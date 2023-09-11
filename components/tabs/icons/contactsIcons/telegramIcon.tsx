import React from 'react'
import Image from 'next/image'
import Telegram from './telegram.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const TelegramIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Telegram}
        className='hover:scale-125 p-1'
        alt='TelegramIcon'
    />
  )
}

export default TelegramIcon