import React from 'react'
import Image from 'next/image'
import Contacts from './contacts.svg'

type IconSize ={
  iconWidth:number,
  iconHeight:number,
}

const ContactsIcon = (props:IconSize) => {
  return (
    <Image
        width={props.iconWidth}
        height={props.iconHeight}
        src={Contacts}
        className='hover:scale-125'
        alt='ContactsIcon'
    />
  )
}

export default ContactsIcon