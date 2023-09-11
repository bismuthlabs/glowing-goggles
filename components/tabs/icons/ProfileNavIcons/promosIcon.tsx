import React from 'react'
import Image from 'next/image'
import Promo from './promos.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}
// const promoIcon : IconSize= {iconWidth:10,iconHeight:5}
const PromoIcon = (props:IconSize) => {

  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Promo}
        className='hover:scale-125'
        alt='PromoIcon'
    />
  )
}

export default PromoIcon