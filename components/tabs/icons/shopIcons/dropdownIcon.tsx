import React from 'react'
import Image from 'next/image'
import DropDown from './dropdownIcon.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const DropDownIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={DropDown}
        className='hover:scale-125 p-1'
        alt='DropDownIcon'
    />
  )
}

export default DropDownIcon