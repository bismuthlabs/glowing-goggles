import React from 'react'
import Image from 'next/image'
import Shop from './shop.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const ShopIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Shop}
        className='hover:scale-125 '
        alt='ShopIcon'
    />
  )
}

export default ShopIcon