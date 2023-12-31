import Link from 'next/link'
import React from 'react'

type MenuitemProps = {
  title: string,
  address: string,
  Icon: JSX.ElementType
}


export default function MenuItem({ title, address, Icon }: MenuitemProps) {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className='hidden sm:inline my-2 text-sm    s'>{title}</p>
      </Link>
    </div>
  )
}
